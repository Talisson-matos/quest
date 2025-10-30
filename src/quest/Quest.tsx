import { useState } from "react";
import "./Quest.css";

interface Question {
  id: string;
  question: string;
  answer: string;
}

interface Section {
  title: string;
  icon: string;
  questions: Question[];
}

export default function App() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const [sections, setSections] = useState<Section[]>([
    {
      title: "Introdução ao Nicho e Produto",
      icon: "🧩",
      questions: [
        { id: "p1", question: "Qual é o nicho e produto que você pretende promover ?", answer: "" },
        { id: "p2", question: "Por que uma pessoa procuraria seu produto para comprar ?", answer: "" },
        { id: "p3", question: "Quais seriam as dificuldades no cotidiano desta pessoa que não possui este produto ainda ?", answer: "" },
        { id: "p4", question: "Como essa produto melhoraria a realidade desta pessoa ?", answer: "" },
      ],
    },
    {
      title: "Pesquisa de inferência do problema",
      icon: "🔍",
      questions: [
        { id: "i1", question: "Como a pessoa tendo este problema procuraria resolvê-lo ?", answer: "" },
        { id: "i2", question: "Como a pessoa procuraria a resposta do problema dela na internet, caso opta-se por esta alternativa ?", answer: "" },
        { id: "i3", question: "Na busca na internet, o que levaria esta pessoa a desistir de encontrar a solução de seu problema ?", answer: "" },
        { id: "i4", question: "O que poderia ser feito para evitar isto ?", answer: "" },
      ],
    },
    {
      title: "Pesquisa de Soluções Existentes",
      icon: "🛠️",
      questions: [
        { id: "s1", question: "Quais soluções o participante já utilizou para lidar com esse problema?", answer: "" },
        { id: "s2", question: "Essas soluções foram eficazes? Por quê?", answer: "" },
        { id: "s3", question: "O participante está satisfeito com as soluções disponíveis atualmente?", answer: "" },
        { id: "s4", question: "O que falta nas soluções atuais para que o problema seja resolvido de forma ideal?", answer: "" },
      ],
    },
    {
      title: "Pesquisa de Concorrência",
      icon: "💡",
      questions: [
        { id: "e1", question: "Quais as soluções que a concorrência esta implementando na internet para resolver o problema desta pessoa ?", answer: "" },
        { id: "e2", question: "Quais são os pontos positivos e negativos destas implementações", answer: "" },
        { id: "e3", question: "Que solução eu poderia inferir baseado nas ideias da concorrência ?", answer: "" },
        { id: "e4", question: "Essa solução seria viável para a pessoa ? Quais seriam as principais objeções ?", answer: "" },
      ],
    },
    {
      title: "Pesquisa de Público-Alvo",
      icon: "🧠",
      questions: [
        { id: "c1", question: "Como classificaria as principais pessoas que procuram este produto ? Idade, Gênero, Escolaridade, Classe Social, Etnia, Localização . . .", answer: "" },
        { id: "c2", question: "Quais relações existem entre este público segmentado com este produto?", answer: "" },
        { id: "c3", question: "Como adaptaria o produto da melhor maneira possível para este publico segmentado ?", answer: "" },
        { id: "c4", question: "Quais pessoas não fazem parte do público alvo, por quê, e se haveria possibilidade de alguma forma integra-las?", answer: "" },
      ],
    },
    {
      title: "Pesquisa sobre o Produto",
      icon: "💬",
      questions: [
        { id: "pa1", question: "Quais características o participante considera mais importantes nesse tipo de produto?", answer: "" },
        { id: "pa2", question: "O participante já teve alguma experiência negativa com produtos similares?", answer: "" },
        { id: "pa3", question: "O participante associa esse produto a alguma marca específica?", answer: "" },
        { id: "pa4", question: "O participante considera o preço atual do produto justo?", answer: "" },
      ],
    },
    {
      title: "Pesquisa sobre Comportamento de Compra",
      icon: "🛒",
      questions: [
        { id: "cc1", question: "Quais seriam os principais valores e percepções de mundo da pessoa que busca comprar este produto ?", answer: "" },
        { id: "cc2", question: "Como esses valores e percepções afetariam a decisão de compra do produto ?", answer: "" },
        { id: "cc3", question: "Quais fatores influenciam a decisão de compra do participante (preço, qualidade, avaliações, marca)?", answer: "" },
        { id: "cc4", question: "Como estes fatores afetariam a decisão de compra do produto?", answer: "" },
      ],
    },
    {
      title: "Pesquisa de Mensagem e Comunicação",
      icon: "📣",
      questions: [
        { id: "mc1", question: "Qual seria a melhor solução que a pessoa buscaria encontrar na internet ?", answer: "" },
        { id: "mc2", question: "Como essa solução seria veiculada da melhor maneira possível baseando no ponto de vista da pessoa ?", answer: "" },
        { id: "mc3", question: "O que faria ela desanimar na sua jornada pela solução ?", answer: "" },
        { id: "mc4", question: "Como implementaríamos uma solução para resolver isto ?", answer: "" },
      ],
    },
   
    {
      title: "Pesquisa de Hábitos e Preferências",
      icon: "💡",
      questions: [
        { id: "hc1", question: "Com que frequência o participante utiliza produtos ou serviços relacionados ao tema da pesquisa?", answer: "" },
        { id: "hc2", question: "Onde o participante costuma buscar informações antes de realizar uma compra?", answer: "" },
        { id: "hc3", question: "Quais redes sociais são mais utilizadas pelo participante?", answer: "" },
        { id: "hc4", question: "O participante prefere realizar compras online ou em lojas físicas?", answer: "" },
        { id: "hc5", question: "Que tipo de conteúdo o participante consome com mais frequência (vídeos, artigos, podcasts, etc.)?", answer: "" },
      ],
    },
    {
      title: "Pesquisa de Nova Perspectiva de Solução",
      icon: "🧠",
      questions: [
        { id: "np1", question: "Qual é a melhor solução para resolvermos o problema da pessoa baseando-se até aqui?", answer: "" },
        { id: "np2", question: "Como implementaríamos esta solução? passo a passo.", answer: "" },
        { id: "np3", question: "O que podemos esperar de reação do cliente frete a solução apresentada ?", answer: "" },
      ],
    },
    {
      title: "Pesquisa de acompanhamento e Melhoria Contínua",
      icon: "💸",
      questions: [
        { id: "ccp1", question: "Como poderemos acompanhar a solução para ver o resultado ao longo do tempo ?", answer: "" },
        { id: "ccp2", question: "Caso a solução fracasse, que atitute tomaremos a respeito?", answer: "" },
        { id: "ccp3", question: "Como trabalharemos para evitar os antigos erros?", answer: "" },
      ],
    },
    {
      title: "Pesquisa de Satisfação do Cliente",
      icon: "❤️",
      questions: [
        { id: "pv1", question: "O cliente se sente satisfeito com o produto?", answer: "" },
        { id: "pv2", question: "Foi dificultoso para criação, execução e  acompanhamento do processo de resolução?", answer: "" },
        { id: "pv3", question: "O que poderemos fazer para melhorar o processo para a próxima campanha e mitigar os problemas enfrentados?", answer: "" },
      ],
    },
  ]);

  const addKeyword = () => {
    if (keywordInput.trim()) {
      if (editingIndex !== null) {
        const updated = [...keywords];
        updated[editingIndex] = keywordInput.trim();
        setKeywords(updated);
        setEditingIndex(null);
      } else {
        setKeywords([...keywords, keywordInput.trim()]);
      }
      setKeywordInput("");
    }
  };

  const removeKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const editKeyword = (index: number) => {
    setKeywordInput(keywords[index]);
    setEditingIndex(index);
  };

  const updateAnswer = (sectionIndex: number, questionIndex: number, value: string) => {
    const updated = [...sections];
    updated[sectionIndex].questions[questionIndex].answer = value;
    setSections(updated);
  };

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  const exportReport = () => {
    let report = "=".repeat(60) + "\n";
    report += "RELATÓRIO DE PESQUISA DE MERCADO\n";
    report += "=".repeat(60) + "\n\n";

    report += "PALAVRAS-CHAVE\n";
    report += "-".repeat(60) + "\n";
    keywords.forEach((kw, i) => {
      report += `${i + 1}. ${kw}\n`;
    });
    report += "\n\n";

    sections.forEach((section) => {
      report += "=".repeat(60) + "\n";
      report += `${section.icon} ${section.title.toUpperCase()}\n`;
      report += "=".repeat(60) + "\n\n";

      section.questions.forEach((q) => {
        report += `PERGUNTA: ${q.question}\n`;
        report += `RESPOSTA: ${q.answer || "[Não respondido]"}\n\n`;
      });
    });

    const blob = new Blob([report], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pesquisa-mercado-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📊 Pesquisa de Mercado</h1>
        <p>Formulário completo de análise de problema, produto e persona</p>
      </header>

      <div className="container-quest">
        <section className="keywords-section">
          <h2>🔑 Pesquisa de Palavras-Chave</h2>
          
          <div className="keyword-input-group">
            <input
              type="text"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addKeyword()}
              placeholder="Digite uma palavra-chave..."
              className="keyword-input"
            />
            <button onClick={addKeyword} className="btn-add">
              {editingIndex !== null ? "✏️ Atualizar" : "➕ Adicionar"}
            </button>
          </div>

          <div className="external-links">
            <a href="https://ads.google.com/intl/pt-BR_br/home/tools/keyword-planner/" target="_blank" rel="noopener noreferrer" className="external-link">
              🔗 Google Ads Keyword Planner
            </a>
            <a href="https://trends.google.com.br/trends/" target="_blank" rel="noopener noreferrer" className="external-link">
              📈 Google Trends
            </a>
          </div>

          <div className="keywords-list">
            {keywords.map((kw, i) => (
              <div key={i} className="keyword-item">
                <span className="keyword-text">{kw}</span>
                <div className="keyword-actions">
                  <button onClick={() => editKeyword(i)} className="btn-edit">✏️</button>
                  <button onClick={() => removeKeyword(i)} className="btn-remove">🗑️</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="form-section">
          <h2>📝 Questionário de Pesquisa</h2>
          
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="accordion-item">
              <button
                className={`accordion-header ${openSection === section.title ? "active" : ""}`}
                onClick={() => toggleSection(section.title)}
              >
                <span className="accordion-title">
                  {section.icon} {section.title}
                </span>
                <span className="accordion-icon">
                  {openSection === section.title ? "−" : "+"}
                </span>
              </button>
              
              {openSection === section.title && (
                <div className="accordion-content">
                  {section.questions.map((q, qIndex) => (
                    <div key={q.id} className="question-block">
                      <label className="question-label">{q.question}</label>
                      <textarea
                        value={q.answer}
                        onChange={(e) => updateAnswer(sectionIndex, qIndex, e.target.value)}
                        placeholder="Digite sua resposta aqui..."
                        className="question-input"
                        rows={3}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        <div className="export-section">
          <button onClick={exportReport} className="btn-export">
            📥 Exportar Relatório Completo
          </button>
        </div>
      </div>
    </div>
  );
}
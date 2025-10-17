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
      title: "Identificação do Problema",
      icon: "🧩",
      questions: [
        { id: "p1", question: "O participante já enfrentou esse tipo de problema anteriormente?", answer: "" },
        { id: "p2", question: "Com que frequência o participante se depara com esse problema?", answer: "" },
        { id: "p3", question: "Em que situações o problema costuma ocorrer com mais intensidade?", answer: "" },
        { id: "p4", question: "O participante considera esse problema uma prioridade a ser resolvida?", answer: "" },
      ],
    },
    {
      title: "Impacto do Problema",
      icon: "🔍",
      questions: [
        { id: "i1", question: "De que forma esse problema afeta a rotina ou os resultados do participante?", answer: "" },
        { id: "i2", question: "O participante já deixou de realizar alguma atividade por causa desse problema?", answer: "" },
        { id: "i3", question: "O problema gera algum tipo de prejuízo (financeiro, emocional, operacional)?", answer: "" },
        { id: "i4", question: "O participante já tentou resolver esse problema por conta própria?", answer: "" },
      ],
    },
    {
      title: "Soluções Tentadas",
      icon: "🛠️",
      questions: [
        { id: "s1", question: "Quais soluções o participante já utilizou para lidar com esse problema?", answer: "" },
        { id: "s2", question: "Essas soluções foram eficazes? Por quê?", answer: "" },
        { id: "s3", question: "O participante está satisfeito com as soluções disponíveis atualmente?", answer: "" },
        { id: "s4", question: "O que falta nas soluções atuais para que o problema seja resolvido de forma ideal?", answer: "" },
      ],
    },
    {
      title: "Expectativas e Desejos",
      icon: "💡",
      questions: [
        { id: "e1", question: "O que o participante espera de uma solução ideal para esse problema?", answer: "" },
        { id: "e2", question: "Quais características ou funcionalidades seriam indispensáveis?", answer: "" },
        { id: "e3", question: "O participante estaria disposto a pagar por uma solução eficaz?", answer: "" },
        { id: "e4", question: "O que faria o participante confiar em uma nova solução?", answer: "" },
      ],
    },
    {
      title: "Conhecimento e Interesse pelo Produto",
      icon: "🧠",
      questions: [
        { id: "c1", question: "O participante já conhece o produto em questão?", answer: "" },
        { id: "c2", question: "O participante já utilizou esse produto anteriormente?", answer: "" },
        { id: "c3", question: "Qual é o nível de interesse do participante em adquirir esse tipo de produto?", answer: "" },
        { id: "c4", question: "O participante considera esse produto essencial ou opcional em sua rotina?", answer: "" },
      ],
    },
    {
      title: "Percepção e Avaliação",
      icon: "💬",
      questions: [
        { id: "pa1", question: "Quais características o participante considera mais importantes nesse tipo de produto?", answer: "" },
        { id: "pa2", question: "O participante já teve alguma experiência negativa com produtos similares?", answer: "" },
        { id: "pa3", question: "O participante associa esse produto a alguma marca específica?", answer: "" },
        { id: "pa4", question: "O participante considera o preço atual do produto justo?", answer: "" },
      ],
    },
    {
      title: "Comportamento de Compra",
      icon: "🛒",
      questions: [
        { id: "cc1", question: "Onde o participante costuma comprar produtos dessa categoria (lojas físicas, online, marketplaces)?", answer: "" },
        { id: "cc2", question: "O participante costuma comparar marcas antes de comprar esse tipo de produto?", answer: "" },
        { id: "cc3", question: "Quais fatores influenciam a decisão de compra do participante (preço, qualidade, avaliações, marca)?", answer: "" },
        { id: "cc4", question: "O participante estaria disposto a pagar mais por um produto com diferenciais?", answer: "" },
      ],
    },
    {
      title: "Marketing e Comunicação",
      icon: "📣",
      questions: [
        { id: "mc1", question: "O participante costuma receber anúncios sobre esse tipo de produto?", answer: "" },
        { id: "mc2", question: "Quais canais de comunicação o participante mais utiliza para conhecer novos produtos (redes sociais, e-mail, TV, etc.)?", answer: "" },
        { id: "mc3", question: "O participante já recomendou esse tipo de produto para outras pessoas?", answer: "" },
        { id: "mc4", question: "O participante se lembra de alguma campanha ou anúncio marcante relacionado ao produto?", answer: "" },
      ],
    },
    {
      title: "Perfil Demográfico",
      icon: "🎯",
      questions: [
        { id: "pd1", question: "Qual é a faixa etária do participante?", answer: "" },
        { id: "pd2", question: "Qual é o gênero com o qual o participante se identifica?", answer: "" },
        { id: "pd3", question: "Em qual cidade e estado o participante reside?", answer: "" },
        { id: "pd4", question: "Qual é o nível de escolaridade do participante?", answer: "" },
        { id: "pd5", question: "Qual é a ocupação atual do participante?", answer: "" },
      ],
    },
    {
      title: "Hábitos e Comportamentos",
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
      title: "Necessidades e Problemas",
      icon: "🧠",
      questions: [
        { id: "np1", question: "Qual é o principal desafio enfrentado pelo participante relacionado ao tema da pesquisa?", answer: "" },
        { id: "np2", question: "O que o participante gostaria que fosse diferente nos produtos ou serviços dessa área?", answer: "" },
        { id: "np3", question: "Quais funcionalidades ou benefícios são considerados mais importantes pelo participante?", answer: "" },
      ],
    },
    {
      title: "Comportamento de Compra - Persona",
      icon: "💸",
      questions: [
        { id: "ccp1", question: "O participante costuma pesquisar preços antes de comprar?", answer: "" },
        { id: "ccp2", question: "O que leva o participante a confiar em uma marca ou produto?", answer: "" },
        { id: "ccp3", question: "Qual foi a última compra realizada pelo participante e qual foi o motivo da escolha?", answer: "" },
      ],
    },
    {
      title: "Preferências e Valores",
      icon: "❤️",
      questions: [
        { id: "pv1", question: "O que motiva o participante a seguir uma marca nas redes sociais?", answer: "" },
        { id: "pv2", question: "Quais causas ou valores são importantes para o participante?", answer: "" },
        { id: "pv3", question: "O participante prefere marcas mais tradicionais ou inovadoras?", answer: "" },
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
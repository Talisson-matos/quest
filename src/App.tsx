import { useState } from "react";
import "./App.css";

const MAX_TITLE = 30;
const MAX_DESC = 90;

// Permite QUALQUER caractere (apenas corta no limite e verifica caps excessivos)
const validateText = (text: string, max: number) => {
  const cleaned = text.slice(0, max);
  const tooManyCaps = (text.match(/[A-Z]/g)?.length || 0) > text.length * 0.5;

  return {
    valid: cleaned.length <= max && !tooManyCaps,
    cleaned,
  };
};

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

interface KeywordItem {
  keyword: string;
  searches: string;
}

export default function App() {
  // Questionnaire states
  const [sections, setSections] = useState<Section[]>([
    {
      title: "Escolha da solução (produto)",
      icon: "📦",
      questions: [
        { id: "sol1", question: "Qual solução eu vou promover?", answer: "" },
        { id: "sol2", question: "Porque eu escolhi promover esta solução?", answer: "" },
        { id: "sol3", question: "Quais são todos ou os principais benefícios desta solução(produto)?", answer: "" },
        { id: "sol4", question: "Como é a página de vendas deste produto?(intuitiva, fácil navegação, carregamento rápido, responsiva, design visual confortável, clara e precisa no procura promover, a página te convence?, A página seria capaz de convencer outras pessoas?,caso não convença e não tenha outra desta características, o que pode ser melhorado?)", answer: "" },
      ],
    },
    {
      title: "Entender as dores da pessoa",
      icon: "😟",
      questions: [
        { id: "dor1", question: "Por que uma pessoa procuraria esta solução?", answer: "" },
        { id: "dor2", question: "Quais são as dores/dificuldades de uma pessoa que ainda não chegou a esta solução?", answer: "" },
        { id: "dor3", question: "Como essa solução ajudaria na resolução do problema desta pessoa?", answer: "" },
      ],
    },
    {
      title: "Entender como seria a procura na internet",
      icon: "🌐",
      questions: [
        { id: "proc1", question: "Como essa pessoa procuraria esta solução na rede de pesquisa do google(palavras-chave)?", answer: "" },
        { id: "proc2", question: "Baseando-se nestas palavras-chave,caso você fosse a pessoa em pesquisa, em qual anuncio clicaria já na rede do google, e porquê?", answer: "" },
        { id: "proc3", question: "Quais pontos positivos e negativos podemos aprender com estes anúncios?", answer: "" },
      ],
    },
    {
      title: "Criação dos títulos",
      icon: "✍️",
      questions: [
        { id: "tit1", question: "O que repudiaria a pessoa a não clicar em um anúncio?", answer: "" },
        { id: "tit2", question: "O que se pode fazer acerca disto?", answer: "" },
        { id: "tit3", question: "Quais palavras-chave você utilizaria na criação dos títulos pensando nesta pessoa - crie 8 títulos ?(máx.30 caract)", answer: "" },
        { id: "tit4", question: "Qual a primeira dor desta pessoa e qual gatilho mental se relaciona esta dor?(máx.30 caract)", answer: "" },
        { id: "tit5", question: "Qual o melhor título que se alinharia com esta dor e com o que a pessoa procura - crie 2 títulos?(máx.30 caract)", answer: "" },
        { id: "tit6", question: "Qual a segunda dor desta pessoa e qual gatilho mental se relaciona a esta dor ?(máx.30 caract)", answer: "" },
        { id: "tit7", question: "Qual o melhor título que se alinharia com esta dor e com o que a pessoa procura - crie 2 títulos?(máx.30 caract)", answer: "" },
        { id: "tit8", question: "Qual a terceira dor desta pessoa e qual gatilho mental se relaciona esta dor ?(máx.30 caract)", answer: "" },
        { id: "tit9", question: "Qual o melhor título que se alinharia com esta dor e com o que a pessoa procura - crie 2 títulos?(máx.30 caract)", answer: "" },
        { id: "tit10", question: "Crie 4 descrições de 90 caracteres cada, expondo os principais benefícios do produto.(Ressaltar a principal característica em todas e variar no resto)", answer: "" },
      ],
    },
    {
      title: "Estatistica da busca e Planejamento de orçamento",
      icon: "📊",
      questions: [
        { id: "est1", question: "Baseando-se nas palavras-chave, como esta as estatísticas de busca nos principais sites?", answer: "" },
        { id: "est2", question: "Qual o total de buscas mensais para o seu conjunto de palavras-chave?(mín. 1000 buscas)", answer: "" },
        { id: "est3", question: "Como esta a média de CPC para o seu conjunto de palavras-chave?", answer: "" },
        { id: "cpc_lance", question: "Qual lance de CPC irá realizar?", answer: "" },
        { id: "est5", question: "Qual a sua meta de taxa de conversão(conversões/cliques)?", answer: "" },
        { id: "orcamento_diario", question: "Com quanto entrará com orçamento máximo diário?", answer: "" },
        { id: "est7", question: "Baseando-se na comissão do produto, qual será sua taxa de lucro com a estrategia de orçamento utilizada?", answer: "" },
        { id: "est8", question: "Apartir de quanto em valor gasto eu irei tomar prejuízo, ficar neutro, ou lucrar?", answer: "" },
        { id: "est9", question: "Quais são minhas perspectivas de vendas semanais e mensais deste produto e quanto devo de lucrar com isto?", answer: "" },
      ],
    },
    {
      title: "Feedbacks",
      icon: "📝",
      questions: [
        { id: "fb1", question: "Qual o resultado geral desta campanha na primeira semana(avaliação, cliques, impressões, conversões, lucro, prejuízo)?", answer: "" },
        { id: "fb2", question: "Quais foram os principais erros e acertos?", answer: "" },
        { id: "fb3", question: "O que podemos aprender de feedback?", answer: "" },
        { id: "fb4", question: "Qual o resulta geral desta campanha nos primeiros 15 dias(avaliação, cliques, impressões, conversões, lucro, prejuízo)?", answer: "" },
        { id: "fb5", question: "Quais foram os principais erros e acertos?", answer: "" },
        { id: "fb6", question: "O que podemos aprender de feedback?", answer: "" },
        { id: "fb7", question: "Qual o resultado geral desta campanha em 30 dias(avaliação, cliques, impressões, conversões, lucro, prejuízo)?", answer: "" },
        { id: "fb8", question: "Quais foram os principais erros e acertos?", answer: "" },
        { id: "fb9", question: "O que podemos aprender de feedback?", answer: "" },
      ],
    },
  ]);
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Keyword researcher states
  const [keywords, setKeywords] = useState<KeywordItem[]>([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [searchesInput, setSearchesInput] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Ad planner states
  const [titles, setTitles] = useState<string[]>(Array(15).fill(""));
  const [descs, setDescs] = useState<string[]>(Array(10).fill(""));
  const [selectedTitles, setSelectedTitles] = useState<number[]>([]);
  const [selectedDescs, setSelectedDescs] = useState<number[]>([]);

  // Summary form states
  const [acaoConversao, setAcaoConversao] = useState("");
  const [metaPersonalizada, setMetaPersonalizada] = useState("");
  const [nomeCampanha, setNomeCampanha] = useState("");

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produtoNome, setProdutoNome] = useState("");
  const [checklist, setChecklist] = useState<boolean[]>(Array(10).fill(false));

  const tasks = [
    "Definir produto para a promoção.",
    "nome do produto: ",
    "Fazer o questionário.",
    "Definição das palavras-chave.",
    "Definição de títulos e descrições do anuncio.",
    "Definição de orçamento - gasto total da campanha, CPC, orçamento diário.",
    "Criar ação de conversão, meta personalizada, e vinculação de PIXEL na Hotmart.",
    "Criar campanha.",
    "Segmentar campanha (horário, aparelhos, sexo, idade, renda, localidade, palavras-chave negativas)",
    "Preencher relatório da campanha.",
  ];

  // Questionnaire functions
  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  const updateAnswer = (sectionIndex: number, questionIndex: number, value: string) => {
    const updated = [...sections];
    updated[sectionIndex].questions[questionIndex].answer = value;
    setSections(updated);
  };

  // Keyword functions
  const addKeyword = () => {
    if (keywordInput.trim()) {
      const newItem = { keyword: keywordInput.trim(), searches: searchesInput.trim() };
      if (editingIndex !== null) {
        const updated = [...keywords];
        updated[editingIndex] = newItem;
        setKeywords(updated);
        setEditingIndex(null);
      } else {
        setKeywords([...keywords, newItem]);
      }
      setKeywordInput("");
      setSearchesInput("");
    }
  };

  const removeKeyword = (index: number) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const editKeyword = (index: number) => {
    setKeywordInput(keywords[index].keyword);
    setSearchesInput(keywords[index].searches);
    setEditingIndex(index);
  };

  const copyKeyword = (kw: string) => {
    navigator.clipboard.writeText(kw);
  };

  const copyAllKeywords = () => {
    const all = keywords.map((k) => `"${k.keyword}"`).join("\n");
    navigator.clipboard.writeText(all);
  };

  const deleteAllKeywords = () => {
    setKeywords([]);
  };

  // Ad planner functions
  const updateTitle = (i: number, value: string) => {
    const { cleaned } = validateText(value, MAX_TITLE);
    const copy = [...titles];
    copy[i] = cleaned;
    setTitles(copy);
  };

  const updateDesc = (i: number, value: string) => {
    const { cleaned } = validateText(value, MAX_DESC);
    const copy = [...descs];
    copy[i] = cleaned;
    setDescs(copy);
  };

  const toggleSelect = (index: number, type: "title" | "desc") => {
    if (type === "title") {
      setSelectedTitles((prev) => {
        if (prev.includes(index)) {
          return prev.filter((i) => i !== index);
        }
        if (prev.length >= 2) return prev;
        return [...prev, index];
      });
    } else {
      setSelectedDescs((prev) => {
        if (prev.includes(index)) {
          return prev.filter((i) => i !== index);
        }
        if (prev.length >= 3) return prev;
        return [...prev, index];
      });
    }
  };

  const clearAll = () => {
    setTitles(Array(15).fill(""));
    setDescs(Array(10).fill(""));
    setSelectedTitles([]);
    setSelectedDescs([]);
  };

  const invertTitles = () => {
    if (selectedTitles.length < 2) return;
    const newTitles = [...titles];
    const values = selectedTitles.map((i) => titles[i]);
    values.reverse();
    selectedTitles.forEach((idx, i) => {
      newTitles[idx] = values[i];
    });
    setTitles(newTitles);
  };

  const invertDescs = () => {
    if (selectedDescs.length < 2) return;
    const newDescs = [...descs];
    const values = selectedDescs.map((i) => descs[i]);
    values.reverse();
    selectedDescs.forEach((idx, i) => {
      newDescs[idx] = values[i];
    });
    setDescs(newDescs);
  };

  const exportAdPreview = () => {
    const previewTitles = selectedTitles.map((i) => titles[i]).filter(Boolean);
    if (previewTitles.length === 0) return;

    const titleLine = previewTitles.join(" | ");
    const previewDescs = selectedDescs.map((i) => descs[i]).filter(Boolean);
    const descLines = previewDescs.map((d) => d.trim()).filter(Boolean);

    const lines = [titleLine, "", ...descLines];

    const content = lines.join("\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resumo_combinacao.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const previewTitles = selectedTitles.map((i) => titles[i]).filter(Boolean);
  const previewDescs = selectedDescs.map((i) => descs[i]).filter(Boolean);

  // Summary functions
  const findAnswer = (id: string): string => {
    for (const sec of sections) {
      for (const q of sec.questions) {
        if (q.id === id) return q.answer;
      }
    }
    return "";
  };

  const dataHoje = new Date().toLocaleDateString("pt-BR");
  const idPlaceholder = "ID";

  const acNome = `AC ${nomeCampanha} | ${dataHoje} | ${idPlaceholder}`;
  const mpNome = `MP ${nomeCampanha} | ${dataHoje} | ${idPlaceholder}`;
  const caNome = `CA ${nomeCampanha} | ${dataHoje} | ${idPlaceholder}`;
  const cpc = findAnswer("cpc_lance");
  const palavrasChaves = keywords.map((k) => `"${k.keyword}"`).join("\n");
  const titulosSummary = titles
    .filter(Boolean)
    .map((t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase())
    .join("\n");
  const descricoesSummary = descs.filter(Boolean).join("\n");
  const orcamento = findAnswer("orcamento_diario");

  const exportSummary = () => {
    const content = `
Nome da ação de conversão: ${acaoConversao}
${acNome}

Nome da meta personalizada: ${metaPersonalizada}
${mpNome}

Nome da campanha: ${nomeCampanha}
${caNome}

CPC(valor): ${cpc}

Palavras chaves:
${palavrasChaves}

Títulos:
${titulosSummary}

Descrições:
${descricoesSummary}

Orçamento diário: ${orcamento}
    `;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resumo_formulario.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Modal functions
  const toggleChecklistItem = (index: number) => {
    const newChecklist = [...checklist];
    newChecklist[index] = !newChecklist[index];
    setChecklist(newChecklist);
  };

  return (
    <div className="main-container">
      {/* Questionário Section */}
      <section className="questionario-section">
        <header className="header">
          <h1>📊 Questionário de Planejamento de Campanha</h1>
          <p>Preencha as seções abaixo para planejar sua campanha</p>
        </header>

        <div className="container-quest">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="accordion-item">
              <button
                className={`accordion-header ${openSection === section.title ? "active" : ""}`}
                onClick={() => toggleSection(section.title)}
              >
                <span className="accordion-title">
                  {section.icon} {section.title}
                </span>
                <span className="accordion-icon">{openSection === section.title ? "−" : "+"}</span>
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
        </div>
      </section>

      {/* Pesquisador de Palavras-Chave Section */}
      <section className="keyword-researcher-section">
        <h2>Pesquisa de palavras-chave</h2>
        <div className="external-links">
          <a href="https://trends.google.com.br/trends/" target="_blank" rel="noopener noreferrer" className="external-link">
            Google Trends
          </a>
          <a href="https://ads.google.com/aw/keywordplanner/home?ocid=7654470938&euid=1385391341&__u=8198253509&uscid=7654470938&__c=3437916362&authuser=0" target="_blank" rel="noopener noreferrer" className="external-link">
            Google Keyword Planner
          </a>
          <a href="https://answerthepublic.com/pt/1yrw9q/reports/f19bb819-7b6a-4b7a-acd2-11be50870226/edit?new_search=true&recently_searched=true" target="_blank" rel="noopener noreferrer" className="external-link">
            Answer The Public
          </a>
          <a href="https://tools.explodingtopics.com/keyword?q=EUA&db=us&_gl=1*1wiw590*_ga*MjAxODE4MzU1NS4xNzYxNDk5MDE0*_ga_WZRQZRZ1GQ*czE3NjE0OTkwMTQkbzEkZzEkdDE3NjE0OTkwODYkajYwJGwwJGgw*_gcl_au*OTM2NjMxMjU2LjE3NjE0OTkwODY." target="_blank" rel="noopener noreferrer" className="external-link">
            Exploding Topics
          </a>
          
          <a href="https://neilpatel.com/br/ubersuggest/" target="_blank" rel="noopener noreferrer" className="external-link">
            Ubersuggest BR
          </a>
        </div>

        <div className="keyword-input-group">
          <input
            type="text"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            placeholder="Palavra-chave"
            className="keyword-input"
          />
          <input
            type="text"
            value={searchesInput}
            onChange={(e) => setSearchesInput(e.target.value)}
            placeholder="Pesquisas mensais"
            className="searches-input"
          />
          <button onClick={addKeyword} className="btn-add">
            {editingIndex !== null ? "Atualizar" : "Adicionar"}
          </button>
        </div>

        <div className="keywords-list">
          {keywords.map((k, i) => (
            <div key={i} className="keyword-item">
              <span className="keyword-text">
                {k.keyword} ({k.searches})
              </span>
              <div className="keyword-actions">
                <button onClick={() => copyKeyword(k.keyword)} className="btn-copy">
                  Copiar
                </button>
                <button onClick={() => editKeyword(i)} className="btn-edit">
                  Editar
                </button>
                <button onClick={() => removeKeyword(i)} className="btn-remove">
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="prompt-box">
          <textarea
            value={keywords.map((k) => `"${k.keyword}"`).join("\n")}
            readOnly
            className="prompt-textarea"
            placeholder="Palavras-chave aqui..."
          />
          <button onClick={copyAllKeywords} className="btn-copy-all">
            Copiar Tudo
          </button>
          <button onClick={deleteAllKeywords} className="btn-delete-all">
            Apagar Tudo
          </button>
        </div>
      </section>

      {/* Planejador de Anúncios Section */}
      <section className="ad-planner-section">
        <div className="container">
          <div className="form-section">
            <div className="buttons">
              <button onClick={clearAll}>Limpar Tudo</button>
              <button onClick={invertTitles} disabled={selectedTitles.length < 2}>
                Inverter Títulos
              </button>
              <button onClick={invertDescs} disabled={selectedDescs.length < 2}>
                Inverter Descrições
              </button>
              <button onClick={exportAdPreview} disabled={previewTitles.length === 0}>
                Exportar .txt
              </button>
            </div>

            <h2>Títulos (máx. 30 caracteres)</h2>
            <div className="inputs-grid">
              {titles.map((t, i) => (
                <input
                  key={i}
                  className={selectedTitles.includes(i) ? "selected" : ""}
                  maxLength={MAX_TITLE}
                  value={t}
                  placeholder={`Título ${i + 1}`}
                  onChange={(e) => updateTitle(i, e.target.value)}
                  onClick={() => toggleSelect(i, "title")}
                />
              ))}
            </div>

            <h2>Descrições (máx. 90 caracteres)</h2>
            <div className="inputs-grid">
              {descs.map((d, i) => (
                <textarea
                  key={i}
                  className={selectedDescs.includes(i) ? "selected" : ""}
                  maxLength={MAX_DESC}
                  value={d}
                  placeholder={`Descrição ${i + 1}`}
                  onChange={(e) => updateDesc(i, e.target.value)}
                  onClick={() => toggleSelect(i, "desc")}
                  rows={3}
                />
              ))}
            </div>
          </div>

          <div className="preview-section">
            <h3>Prévia de Combinação</h3>
            <div className="preview-box">
              <div className="preview-titles">
                {previewTitles.length > 0 ? (
                  previewTitles.map((t, i) => (
                    <span key={i} className="preview-title">
                      {t}
                      {i < previewTitles.length - 1 && " | "}
                    </span>
                  ))
                ) : (
                  <span className="placeholder">Selecione 2 títulos...</span>
                )}
              </div>
              <div className="preview-descs">
                {previewDescs.length > 0 ? (
                  previewDescs.map((d, i) => (
                    <p key={i} className="preview-desc">
                      {d}
                    </p>
                  ))
                ) : (
                  <p className="placeholder">Selecione até 3 descrições...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário (Resumo) Section */}
      <section className="summary-form-section">
        <h2>Formulário (Resumo)</h2>
        <div className="summary-form">
          <label>Nome da ação de conversão</label>
          <input
            value={acaoConversao}
            onChange={(e) => setAcaoConversao(e.target.value)}
            className="summary-input"
          />
          <p className="generated-text">{acNome}</p>

          <label>Nome da meta personalizada</label>
          <input
            value={metaPersonalizada}
            onChange={(e) => setMetaPersonalizada(e.target.value)}
            className="summary-input"
          />
          <p className="generated-text">{mpNome}</p>

          <label>Nome da campanha</label>
          <input
            value={nomeCampanha}
            onChange={(e) => setNomeCampanha(e.target.value)}
            className="summary-input"
          />
          <p className="generated-text">{caNome}</p>

          <label>CPC (valor)</label>
          <p className="generated-text">{cpc || "Copiado do questionário"}</p>

          <label>Palavras chaves</label>
          <textarea value={palavrasChaves} readOnly className="summary-textarea" />

          <label>Títulos</label>
          <textarea value={titulosSummary} readOnly className="summary-textarea" />

          <label>Descrições</label>
          <textarea value={descricoesSummary} readOnly className="summary-textarea" />

          <label>Orçamento diário</label>
          <p className="generated-text">{orcamento || "Copiado do questionário"}</p>

          <button onClick={exportSummary} className="btn-export-summary">
            Gerar .txt
          </button>
        </div>
      </section>

      {/* Botão para Modal Enquete */}
      <button onClick={() => setIsModalOpen(true)} className="btn-open-modal">
       -
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Enquete</h2>
            <ul className="checklist">
              {tasks.map((task, i) => (
                <li key={i} className="checklist-item">
                  {i === 1 ? (
                    <>
                      {task}
                      <input
                        value={produtoNome}
                        onChange={(e) => setProdutoNome(e.target.value)}
                        className="produto-nome-input"
                        placeholder="Nome do produto"
                      />
                    </>
                  ) : (
                    <>
                      <input
                        type="checkbox"
                        checked={checklist[i]}
                        onChange={() => toggleChecklistItem(i)}
                      />
                      {task} - {checklist[i] ? "Concluído" : "Pendente"}
                    </>
                  )}
                </li>
              ))}
            </ul>
            <button onClick={() => setIsModalOpen(false)} className="btn-close-modal">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
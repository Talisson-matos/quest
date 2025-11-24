// src/components/KeywordResearcher.tsx
import { useState } from "react";

interface Keyword {
  keyword: string;
  searches: string;
}

export default function KeywordResearcher() {
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [searchesInput, setSearchesInput] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addOrUpdate = () => {
    if (!keywordInput.trim()) return;
    const newItem = { keyword: keywordInput.trim(), searches: searchesInput.trim() || "0" };
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
  };

  const remove = (i: number) => setKeywords(keywords.filter((_, idx) => idx !== i));

  const edit = (i: number) => {
    setKeywordInput(keywords[i].keyword);
    setSearchesInput(keywords[i].searches);
    setEditingIndex(i);
  };

  const copyAll = () => {
    const text = keywords.map(k => `"${k.keyword}"`).join("\n");
    navigator.clipboard.writeText(text);
  };

  const deleteAll = () => setKeywords([]);

  const tools = [
    { name: "Google Ads", url: "https://ads.google.com/home/tools/keyword-planner/", icon: "Chart" },
    { name: "Google Trends", url: "https://trends.google.com/trends/?geo=BR", icon: "Trending Up" },
    { name: "Ubersuggest", url: "https://neilpatel.com/br/ubersuggest/", icon: "Search" },
    { name: "AnswerThePublic", url: "https://answerthepublic.com/", icon: "Lightbulb" },
    { name: "KeywordTool.io", url: "https://keywordtool.io/", icon: "Key" },
    { name: "SEMrush", url: "https://www.semrush.com/", icon: "Bar Chart" },
  ];

  return (
    <section className="keyword-researcher-section">


      <div className="">
        <h2>Pesquisa de Palavras-Chave</h2>
        {/* BOTÕES DE FERRAMENTAS */}
        <div className="external-links">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              {tool.icon} {tool.name}
            </a>
          ))}
        </div>

        {/* INPUTS */}
        <div className="keyword-input-group">
          <input
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            placeholder="Palavra-chave"
            onKeyDown={(e) => e.key === "Enter" && addOrUpdate()}
          />
          <input
            value={searchesInput}
            onChange={(e) => setSearchesInput(e.target.value)}
            placeholder="Buscas mensais (opcional)"
            onKeyDown={(e) => e.key === "Enter" && addOrUpdate()}
          />
          <button onClick={addOrUpdate} className="btn-add">
            {editingIndex !== null ? "Atualizar" : "Adicionar"}
          </button>
        </div>

        {/* LISTA + PROMPT LATERAL */}
        <div className="keywords-content">
          <div className="keywords-list">
            {keywords.length === 0 ? (
              <p style={{ color: "#94a3b8", fontStyle: "italic", textAlign: "center", padding: "2rem" }}>
                Adicione suas primeiras palavras-chave
              </p>
            ) : (
              keywords.map((k, i) => (
                <div key={i} className="keyword-item">
                  <span className="keyword-text">
                    {k.keyword} <small style={{ opacity: 0.7 }}>({k.searches || "?"} buscas)</small>
                  </span>
                  <div className="keyword-actions">
                    <button onClick={() => navigator.clipboard.writeText(k.keyword)} className="btn-copy">
                      Copiar
                    </button>
                    <button onClick={() => edit(i)} className="btn-edit">
                      Editar
                    </button>
                    <button onClick={() => remove(i)} className="btn-remove">
                      Excluir
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

      </div>

      <div className="">


        <div className="prompt-box">
          <h3 style={{ margin: "0 0 1rem 0", color: "#e0e7ff", fontSize: "1.1rem" }}>
            Prompt Pronto para Copiar
          </h3>
          <textarea
            value={keywords.length > 0 ? keywords.map(k => `"${k.keyword}"`).join("\n") : ""}
            readOnly
            rows={14}
            placeholder="Suas palavras-chave aparecerão aqui automaticamente..."
            style={{
              background: "#1e293b",
              color: "#e2e8f0",
              fontFamily: "monospace",
              resize: "none",
            }}
          />
          <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button onClick={copyAll} className="btn-copy-all" disabled={keywords.length === 0}>
              Copiar Tudo
            </button>
            <button onClick={deleteAll} className="btn-delete-all" disabled={keywords.length === 0}>
              Apagar Tudo
            </button>
          </div>
        </div>

      </div>



    </section>
  );
}
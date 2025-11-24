// src/components/AdPlanner.tsx
import { useState } from "react";

const MAX_TITLE = 30;
const MAX_DESC = 90;

export default function AdPlanner() {
  const [titles, setTitles] = useState<string[]>(Array(15).fill(""));
  const [descs, setDescs] = useState<string[]>(Array(10).fill(""));
  const [selectedTitles, setSelectedTitles] = useState<number[]>([]);
  const [selectedDescs, setSelectedDescs] = useState<number[]>([]);

  const updateTitle = (i: number, value: string) => {
    if (value.length <= MAX_TITLE) {
      const copy = [...titles];
      copy[i] = value;
      setTitles(copy);
    }
  };

  const updateDesc = (i: number, value: string) => {
    if (value.length <= MAX_DESC) {
      const copy = [...descs];
      copy[i] = value;
      setDescs(copy);
    }
  };

  const toggleSelect = (i: number, type: "title" | "desc") => {
    if (type === "title") {
      setSelectedTitles(prev =>
        prev.includes(i)
          ? prev.filter(x => x !== i)
          : prev.length < 2 ? [...prev, i] : prev
      );
    } else {
      setSelectedDescs(prev =>
        prev.includes(i)
          ? prev.filter(x => x !== i)
          : prev.length < 3 ? [...prev, i] : prev
      );
    }
  };

  const clearAll = () => {
    setTitles(Array(15).fill(""));
    setDescs(Array(10).fill(""));
    setSelectedTitles([]);
    setSelectedDescs([]);
  };

  const exportPreview = () => {
    const titleText = selectedTitles.map(i => titles[i]).filter(Boolean).join(" | ");
    const descText = selectedDescs.map(i => descs[i]).filter(Boolean).join("\n\n");
    const content = [titleText, "", descText].filter(Boolean).join("\n");

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "preview_anuncio.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="ad-planner-section">
      <h2>Planejador de Anúncios</h2>

      <div className="buttons">
        <button onClick={clearAll}>Limpar Tudo</button>
        <button onClick={exportPreview} disabled={selectedTitles.length === 0}>
          Exportar Preview .txt
        </button>
      </div>

      <h3>Títulos (máx. 30 caracteres)</h3>
      <div className="inputs-grid">
        {titles.map((t, i) => (
          <input
            key={i}
            value={t}
            onChange={e => updateTitle(i, e.target.value)}
            onClick={() => toggleSelect(i, "title")}
            placeholder={`Título ${i + 1}`}
            maxLength={MAX_TITLE}
            className={selectedTitles.includes(i) ? "selected" : ""}
          />
        ))}
      </div>

      <h3>Descrições (máx. 90 caracteres)</h3>
      <div className="inputs-grid">
        {descs.map((d, i) => (
          <textarea
            key={i}
            value={d}
            onChange={e => updateDesc(i, e.target.value)}
            onClick={() => toggleSelect(i, "desc")}
            placeholder={`Descrição ${i + 1}`}
            rows={3}
            maxLength={MAX_DESC}
            className={selectedDescs.includes(i) ? "selected" : ""}
          />
        ))}
      </div>

      <div className="preview-box">
        <h4>Prévia do Anúncio</h4>
        {selectedTitles.length > 0 ? (
          <p className="preview-titles">
            {selectedTitles.map(i => titles[i]).filter(Boolean).join(" | ")}
          </p>
        ) : (
          <p className="placeholder">Selecione até 2 títulos...</p>
        )}
        {selectedDescs.length > 0 ? (
          selectedDescs.map(i => descs[i]).filter(Boolean).map((d, i) => (
            <p key={i} className="preview-desc">{d}</p>
          ))
        ) : (
          <p className="placeholder">Selecione até 3 descrições...</p>
        )}
      </div>
    </section>
  );
}
import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";


const MAX_TITLE = 30;
const MAX_DESC = 90;

// Valida e limpa texto, permitindo espaços normalmente
const validateText = (text: string, max: number) => {
  const cleaned = text
    .replace(/[^\p{L}\p{N}\s.,!?]/gu, "") // mantém letras, números e espaços
    .replace(/\s{2,}/g, " "); // permite espaços únicos

  const tooManyCaps =
    (text.match(/[A-Z]/g)?.length || 0) > text.length * 0.5;

  return {
    valid: cleaned.length <= max && !tooManyCaps,
    cleaned,
  };
};

export default function App() {
  const [titles, setTitles] = useState<string[]>(Array(15).fill(""));
  const [descs, setDescs] = useState<string[]>(Array(10).fill(""));
  const [selectedTitles, setSelectedTitles] = useState<number[]>([]);
  const [selectedDescs, setSelectedDescs] = useState<number[]>([]);

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
      setSelectedTitles((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : prev.length < 3
          ? [...prev, index]
          : prev
      );
    } else {
      setSelectedDescs((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : prev.length < 3
          ? [...prev, index]
          : prev
      );
    }
  };

  const clearAll = () => {
    setTitles(Array(15).fill(""));
    setDescs(Array(10).fill(""));
    setSelectedTitles([]);
    setSelectedDescs([]);
  };

  const invertTitles = () => {
    if (selectedTitles.length === 0) return;
    
    const newTitles = [...titles];
    const selectedValues = selectedTitles.map(i => titles[i]);
    selectedValues.reverse();
    selectedTitles.forEach((index, i) => {
      newTitles[index] = selectedValues[i];
    });
    setTitles(newTitles);
  };

  const invertDescs = () => {
    if (selectedDescs.length === 0) return;
    
    const newDescs = [...descs];
    const selectedValues = selectedDescs.map(i => descs[i]);
    selectedValues.reverse();
    selectedDescs.forEach((index, i) => {
      newDescs[index] = selectedValues[i];
    });
    setDescs(newDescs);
  };

  const previewTitles = selectedTitles.map((i) => titles[i]).filter(Boolean);
  const previewDescs = selectedDescs.map((i) => descs[i]).filter(Boolean);

  return (
    <div className="container">
      
      <div className="form-section">
        <div className="buttons">
          <button onClick={clearAll}>🧹 Limpar Tudo</button>
          <button onClick={invertTitles}>🔄 Inverter Títulos</button>
          <button onClick={invertDescs}>🔁 Inverter Descrições</button>
          <button onClick={invertDescs}>✅ <Link to={"/quest"}> Questionário </Link></button>
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
            />
          ))}
        </div>

        
      </div>

      <div className="preview-section">
        <h3>Prévia de Combinação</h3>
        <div className="preview-box">
          <div className="preview-titles">
            {previewTitles.map((t, i) => (
              <span key={i} className="preview-title">
                {t}
                {i < previewTitles.length - 1 && " | "}
              </span>
            ))}
          </div>
          <div className="preview-descs">
            {previewDescs.map((d, i) => (
              <p key={i} className="preview-desc">
                {d}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
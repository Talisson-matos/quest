// src/components/Questionnaire.tsx
import { useState } from "react";

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

interface QuestionnaireProps {
  sections: Section[];
  onUpdateAnswer: (sectionIndex: number, questionIndex: number, value: string) => void;
}

export default function Questionnaire({ sections, onUpdateAnswer }: QuestionnaireProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(prev => prev === title ? null : title);
  };

  return (
    <section className="questionario-section">
      <header className="header">
        <h1>Questionário de Planejamento de Campanha</h1>
        <p>Preencha todas as seções para estruturar sua campanha com inteligência</p>
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
              <span className="accordion-icon">
                {openSection === section.title ? "−" : "+"}
              </span>
            </button>

            {openSection === section.title && (
              <div className="accordion-content">
                {section.questions.map((question, qIndex) => (
                  <div key={question.id} className="question-block">
                    <label className="question-label">{question.question}</label>
                    <textarea
                      value={question.answer}
                      onChange={(e) => onUpdateAnswer(sectionIndex, qIndex, e.target.value)}
                      placeholder="Digite sua resposta aqui..."
                      className="question-input"
                      rows={4}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
// src/components/CampaignForm.tsx
import { useState } from "react";
import '../styles/CampaignForm.css';

const defaultNegativas = `grátis
gratuito
download
torrent
pirata
crack
manual
pdf
apostila
tutorial
free
demo
teste
trial
beta
sample
exemplo
modelo
template
mockup
protótipo
case
case study
artigo
notícia
reportagem
blogspot
wordpress
wiki
fórum
comunidade
discussão
opinião
review
resenha
avaliação
comparativo
diferença
vs
alternativa
substituto`;

interface CampaignFormProps {
  findAnswer: (id: string) => string;
}

export default function CampaignForm({ findAnswer }: CampaignFormProps) {
  const [nomeCampanha, setNomeCampanha] = useState("");
  const [acaoConversao, setAcaoConversao] = useState("");
  const [metaPersonalizada, setMetaPersonalizada] = useState("");
  const [urlPaginaVendas, setUrlPaginaVendas] = useState("");
  const [cpc, setCpc] = useState("");
  const [orcamentoDiario, setOrcamentoDiario] = useState("");
  const [negativas, setNegativas] = useState(defaultNegativas);
  const [local, setLocal] = useState("");
  const [horarioInicio, setHorarioInicio] = useState("00:00");
  const [horarioFim, setHorarioFim] = useState("23:59");

  // NOVO: Textarea para snippet de eventos
  const [eventos, setEventos] = useState("");

  const idades = ["18 a 24", "25 a 34", "35 a 44", "45 a 54", "+65", "Desconhecida"];
  const sexos = ["masculino", "feminino", "desconhecido"];
  const rendas = ["10% com maior renda", "11 - 20%", "31 - 40%", "41 - 50%", "50% com menor renda", "Desconhecida"];

  const [idadeSelecionada, setIdadeSelecionada] = useState<string[]>([]);
  const [sexoSelecionado, setSexoSelecionado] = useState<string[]>([]);
  const [rendaSelecionada, setRendaSelecionada] = useState<string[]>([]);

  const exportCampaign = () => {
    const hoje = new Date().toLocaleDateString("pt-BR");
    const titulo = `${nomeCampanha || "Campanha"} ${hoje}`;

    const content = `
${titulo}

NOME DA CAMPANHA: ${nomeCampanha}
AÇÃO DE CONVERSÃO: ${acaoConversao}
META PERSONALIZADA: ${metaPersonalizada}
URL DA PÁGINA: ${urlPaginaVendas}
CPC: ${cpc || findAnswer("cpc_lance")}
ORÇAMENTO DIÁRIO: ${orcamentoDiario || findAnswer("orcamento_diario")}

PALAVRAS-CHAVE NEGATIVAS:
${negativas.trim() || "(nenhuma)"}

SEGMENTAÇÃO:
• Idade: ${idadeSelecionada.length > 0 ? idadeSelecionada.join(", ") : "Todas"}
• Sexo: ${sexoSelecionado.length > 0 ? sexoSelecionado.join(", ") : "Todos"}
• Renda: ${rendaSelecionada.length > 0 ? rendaSelecionada.join(", ") : "Todas"}
• Local: ${local || "Todo o Brasil"}
• Horário: ${horarioInicio} às ${horarioFim}

SNIPPET DE EVENTOS:
${eventos.trim() || "(nenhum evento colado)"}
    `.trim();

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${titulo}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="summary-form-section">
      <h2>Configuração Final da Campanha</h2>
      <div className="summary-form">

        <label>Nome da campanha *</label>
        <input value={nomeCampanha} onChange={e => setNomeCampanha(e.target.value)} placeholder="Ex: Geladinho Gourmet Teste" />

        <label>Ação de conversão</label>
        <input value={acaoConversao} onChange={e => setAcaoConversao(e.target.value)} />

        <label>Meta personalizada</label>
        <input value={metaPersonalizada} onChange={e => setMetaPersonalizada(e.target.value)} />

        <label>URL da página de vendas</label>
        <input value={urlPaginaVendas} onChange={e => setUrlPaginaVendas(e.target.value)} placeholder="https://..." />

        <label>CPC (R$)</label>
        <input value={cpc} onChange={e => setCpc(e.target.value)} placeholder="Ex: 0,85" />

        <label>Orçamento diário (R$)</label>
        <input value={orcamentoDiario} onChange={e => setOrcamentoDiario(e.target.value)} placeholder="Ex: 100,00" />

        <label>Palavras-chave negativas (uma por linha)</label>
        <textarea value={negativas} onChange={e => setNegativas(e.target.value)} rows={10} />

        {/* NOVO CAMPO */}
        <label>Snippet de eventos (cole aqui)</label>
        <textarea
          value={eventos}
          onChange={e => setEventos(e.target.value)}
          placeholder="Cole aqui o snippet dos seus eventos..."
          rows={8}
        />

        <label>Idade</label>
        <div className="checkbox-group">
          {idades.map(age => (
            <label key={age}>
              <input
                type="checkbox"
                checked={idadeSelecionada.includes(age)}
                onChange={() => setIdadeSelecionada(prev =>
                  prev.includes(age) ? prev.filter(x => x !== age) : [...prev, age]
                )}
              /> {age}
            </label>
          ))}
        </div>

        <label>Sexo</label>
        <div className="checkbox-group">
          {sexos.map(s => (
            <label key={s}>
              <input
                type="checkbox"
                checked={sexoSelecionado.includes(s)}
                onChange={() => setSexoSelecionado(prev =>
                  prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
                )}
              /> {s}
            </label>
          ))}
        </div>

        <label>Renda familiar</label>
        <div className="checkbox-group">
          {rendas.map(r => (
            <label key={r}>
              <input
                type="checkbox"
                checked={rendaSelecionada.includes(r)}
                onChange={() => setRendaSelecionada(prev =>
                  prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]
                )}
              /> {r}
            </label>
          ))}
        </div>

        <label>Localidade</label>
        <input value={local} onChange={e => setLocal(e.target.value)} placeholder="Ex: Brasil, São Paulo, RJ + SP..." />

        <label>Horário de exibição</label>
        <div className="horario-group">
          <select value={horarioInicio} onChange={e => setHorarioInicio(e.target.value)}>
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={`${i.toString().padStart(2, "0")}:00`}>
                {i.toString().padStart(2, "0")}:00
              </option>
            ))}
          </select>
          <span>até</span>
          <select value={horarioFim} onChange={e => setHorarioFim(e.target.value)}>
            {Array.from({ length: 24 }, (_, i) => (
              <option key={i} value={`${i.toString().padStart(2, "0")}:59`}>
                {i.toString().padStart(2, "0")}:59
              </option>
            ))}
          </select>
        </div>

        <button onClick={exportCampaign} className="btn-export-summary">
          GERAR ARQUIVO .TXT DA CAMPANHA
        </button>
      </div>
    </section>
  );
}

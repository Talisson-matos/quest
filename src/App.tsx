// src/App.tsx
import { useState } from "react";
import "./App.css";

// Componentes separados
import Questionnaire from "./components/Questionario";
import KeywordResearcher from "./components/KeywordResearcher";
import AdPlanner from "./components/AdPlanner";
import CampaignForm from "./components/CampaignForm"; 

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
  // ===== QUESTIONÁRIO =====
  const [sections, setSections] = useState<Section[]>([
    {
      title: "Escolha da solução (produto)",
      icon: "Package",
      questions: [
        { id: "sol1", question: "Qual solução eu vou promover?", answer: "" },
        { id: "sol2", question: "Porque eu escolhi promover esta solução?", answer: "" },
        { id: "sol3", question: "Quais são todos ou os principais benefícios desta solução(produto)?", answer: "" },
        { id: "sol4", question: "Como é a página de vendas deste produto?(intuitiva, fácil navegação, carregamento rápido, responsiva, design visual confortável, clara e precisa no procura promover, a página te convence?, A página seria capaz de convencer outras pessoas?,caso não convença e não tenha outra desta características, o que pode ser melhorado?)", answer: "" },
      ],
    },
    {
      title: "Entender as dores da pessoa",
      icon: "Worried Face",
      questions: [
        { id: "dor1", question: "Por que uma pessoa procuraria esta solução?", answer: "" },
        { id: "dor2", question: "Quais são as dores/dificuldades de uma pessoa que ainda não chegou a esta solução?", answer: "" },
        { id: "dor3", question: "Como essa solução ajudaria na resolução do problema desta pessoa?", answer: "" },
      ],
    },
    {
      title: "Entender como seria a procura na internet",
      icon: "Globe",
      questions: [
        { id: "proc1", question: "Como essa pessoa procuraria esta solução na rede de pesquisa do google(palavras-chave)?", answer: "" },
        { id: "proc2", question: "Baseando-se nestas palavras-chave,caso você fosse a pessoa em pesquisa, em qual anuncio clicaria já na rede do google, e porquê?", answer: "" },
        { id: "proc3", question: "Quais pontos positivos e negativos podemos aprender com estes anúncios?", answer: "" },
      ],
    },
    {
      title: "Criação dos títulos",
      icon: "Writing Hand",
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
      icon: "Chart Increasing",
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
      icon: "Page with Curl",
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

  const updateAnswer = (sectionIndex: number, questionIndex: number, value: string) => {
    const updated = [...sections];
    updated[sectionIndex].questions[questionIndex].answer = value;
    setSections(updated);
  };

  const findAnswer = (id: string): string => {
    for (const sec of sections) {
      for (const q of sec.questions) {
        if (q.id === id) return q.answer;
      }
    }
    return "";
  };

  return (
    <div className="main-container">

      {/* 1. QUESTIONÁRIO */}
      <Questionnaire sections={sections} onUpdateAnswer={updateAnswer} />

      {/* 2. PESQUISADOR DE PALAVRAS-CHAVE */}
      <KeywordResearcher />

      {/* 3. PLANEJADOR DE ANÚNCIOS */}
      <AdPlanner />

      {/* 4. FORMULÁRIO FINAL DA CAMPANHA */}
      <CampaignForm findAnswer={findAnswer} />

    </div>
  );
}
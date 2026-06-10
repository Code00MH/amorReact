import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function App() {
const [loading, setLoading] = useState(true);
const [fadeOutIntro, setFadeOutIntro] = useState(false);
const [visibleMoments, setVisibleMoments] = useState(1);
const [showImprovaveis, setShowImprovaveis] = useState(false);
const [showCelebration, setShowCelebration] = useState(false);
const [showMusic, setShowMusic] = useState(false);
const [openingLetter, setOpeningLetter] = useState(false);
const [showMessage, setShowMessage] = useState(false);
const [closingMessage] = useState(false);

  useEffect(() => {
    const startFadeOutAfter = 2300;
    const fadeDuration = 800;

    const t1 = setTimeout(() => setFadeOutIntro(true), startFadeOutAfter);
    const t2 = setTimeout(
      () => setLoading(false),
      startFadeOutAfter + fadeDuration
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Timeline com fotos
  const timelineData = [
    {
      title: "Como nos conhecemos",
      image: "/images/como-nos-conhecemos.png",
      description:
        "Lá estava eu, subindo as escadas e vendo que ali iria conhecer a minha namorada, minha futura esposa e o AMOR da minha VIDA!"
    },
    {
      title: "A análise do vídeo em inglês",
      image: "/images/video-ingles.jpg",
      description:
        "Após o Gabriel ABRIR a boca sobre o meu vídeo em inglês, peguei seu instagram e ali começou nossa conversa de fato."
    },
    {
      title: "O primeiro 'eu te amo'",
      image: "/images/eu-te-amo.jpg",
      description:
        "Aquele momento em que as palavras saíram com o coração acelerado e mudaram tudo, mesmo com 2 meses de aula (sendo que nem sequer saímos para um jantar)."
    },
    {
      title: "A decisão sobre nós que mudaria absolutamente tudo",
      image: "/images/nossa-decisao.jpg",
      description:
        "Nossa conversa em Outubro, os medos e incertezas, os desafios que surgiram ao longo do tempo foi mais do que determinante para a relação que temos hoje."
    },
    {
      title: "O PEDIDO DE NAMORO!",
      image: "/images/pedido-namoro.jpg",
      description:
        "O dia em que dois pombinhos apaixonados oficializaram uma das coisas mais improváveis: Um aluno e uma professora de inglês namorarem. O resto é história, mas esse dia foi tão especial que merecia um destaque aqui."
    },
    {
      title: "O presente e nosso futuro ❤️",
      image: "/images/nosso-futuro.jpg",
      description:
        "Hoje celebramos o que já vivemos e sonhamos com tudo que ainda vamos construir."
    }
  ];

  return (
    <div className="bg-black text-white font-serif min-h-screen w-full overflow-x-hidden">
    {showCelebration && (
  <div className="fixed inset-0 pointer-events-none z-50 opacity-70">
    <Confetti
      numberOfPieces={120}
      recycle={false}
      gravity={0.08}
      tweenDuration={5000}
      colors={[
        "#fca5a5",
        "#fbcfe8",
        "#fde68a",
        "#ffffff"
      ]}
    />
  </div>
)}
      {loading ? (
        <div
          className={`flex items-center justify-center h-screen text-center transition-opacity ${
            fadeOutIntro ? "animate-fadeOutIntro" : "opacity-100"
          }`}
        >
          <p className="text-lg italic text-red-200 px-6">
            Algumas histórias merecem ser lembradas.
          </p>
        </div>
      ) : (
        <main className="flex flex-col items-center px-6 space-y-20">
          {/* HERO */}
          <section className="h-screen flex flex-col justify-center items-center text-center space-y-6 max-w-lg">
            <h1 className="text-3xl md:text-4xl font-light leading-relaxed animate-fadeInText">
              Antes de você abrir tudo… <br />
              tem uma coisinha que eu queria te mostrar ❤️
            </h1>
            <button
  onClick={() => {
    setOpeningLetter(true);

    setTimeout(() => {
      document
        .getElementById("timeline")
        ?.scrollIntoView({
          behavior: "smooth"
        });

      setOpeningLetter(false);
    }, 2800);
  }}
  className="bg-red-900 hover:bg-red-700 transition px-7 py-3 rounded-full shadow-lg"
>
  Abrir nossa caixinha de surpresa
</button>

            <p className="text-red-100 text-lg">
              Uma pequena lembrança da nossa trajetória.
            </p>

           {openingLetter && (
  <div className="letter-overlay">
    <div className="envelope">
      <div className="envelope-flap"></div>

      <div className="letter">
        ❤️
      </div>
    </div>
  </div>
)}
          </section>

          {/* TIMELINE */}
          <section
            id="timeline"
            className="w-full max-w-md space-y-10"
          >
            <h2 className="text-2xl text-center mb-6">
              Nossa História ❤️
            </h2>

            {timelineData.slice(0, visibleMoments).map((item, i) => (
  <div
    key={i}
    id={`momento-${i}`}
    className="animate-revealMoment"
  >
    {/* CARD */}
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-5 shadow-xl border border-white/10">
      {/* FOTO */}
      <div className="h-64 rounded-2xl overflow-hidden mb-5 shadow-lg">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* TEXTO */}
      <h3 className="text-xl text-red-200 mb-3">
        {item.title}
      </h3>

      <p className="text-gray-300 leading-relaxed">
        {item.description}
      </p>
    </div>

    {/* BOTÃO PRÓXIMO */}
    {i === visibleMoments - 1 &&
    i < timelineData.length - 1 ? (
      <div className="flex justify-center py-8">
        <button
          onClick={() => {
  const nextMoment = i + 1;

  setVisibleMoments((prev) => prev + 1);

  // índice 4 = O PEDIDO DE NAMORO!
  if (nextMoment === 4) {
    setTimeout(() => {
      setShowCelebration(true);

      setTimeout(() => {
        setShowCelebration(false);
      }, 7000);
    }, 600);
  }

  setTimeout(() => {
    document
      .getElementById(`momento-${nextMoment}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
  }, 200);
}}
          className="group flex flex-col items-center text-red-200 hover:text-red-100 transition"
        >
          <span className="text-sm italic opacity-80 mb-2">
            Descobrir o próximo momento...
          </span>

          <div className="animate-bounceSlow text-4xl group-hover:translate-y-1 transition-transform">
            ↓
          </div>
        </button>
      </div>
    ) : null}

    {/* FINAL DA TIMELINE */}
{i === timelineData.length - 1 && (
  <div className="flex justify-center py-8">
    <button
      onClick={() => {
        setShowImprovaveis(true);

        setTimeout(() => {
          document
            .getElementById("coisas-improvaveis")
            ?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
        }, 250);
      }}
      className="group flex flex-col items-center text-red-200 hover:text-red-100 transition"
    >
      <span className="italic mb-2 text-center">
        Existe mais uma coisa que eu precisava te mostrar... Clica no coraçãozinho, vai
      </span>

      <div className="animate-bounceSlow text-4xl">
        ❤️
      </div>
    </button>
  </div>
)}
  </div>
))}
          </section>

          {/* 5 COISAS IMPROVÁVEIS */}
{showImprovaveis && (
  <section
    id="coisas-improvaveis"
    className="w-full max-w-md space-y-6 animate-revealMoment"
  >
    <h2 className="text-2xl text-center">
      5 coisas improváveis que aconteceram com a gente ❤️
    </h2>

    {[
      {
        title: "📚 Um aluno e uma professora",
        text:
          "Quem diria que um dia isso seria possível? O que seria apenas uma relação de ensino entre aluno e professora, se tornou a realidade melancólica de duas almas gêmeas que se encontraram em um ambiente que ningúem nunca imaginou."
      },
      {
        title: "🎥 O vídeo que mudou tudo",
        text:
          "Quem diria que um vídeo em inglês, com o intuito de ser analisado, seria o pontapé inicial para que acontecesse tanta coisa? O que começou com uma conversa rápida e sem pretenção, virou carinho, confiança, risada, apoio e amor."
      },
      {
        title: "⏳ O amor que veio cedo",
        text:
          "Posso dizer que o meu Eu te amo foi rápido demais. Entretanto, foi essa frase que me encorajou a te dizer o que sentia por você mesmo com tanto pouco tempo de conversa, é como se a vida estivesse só esperando a hora certa de juntar os dois."
      },
      {
        title: "🫶 Escolher continuar",
        text:
          "Diferenças, medos, incertezas, receio de cair em um poço sem fundo de decepções... tinha muita coisa que poderia afastar a gente. Mas, de alguma forma, toda vez que parecia que uma hora acabaria, confiamos um no outro e escolhemos continuar."
      },
      {
        title: "🏡 A mais improvável de todas ❤️",
        text:
          "Talvez o mais improvável não seja o que já aconteceu... mas tudo o que ainda vamos viver. Porque mesmo depois de tudo, eu ainda consigo olhar pra você e imaginar uma vida inteira. De aluno e teacher para dois jovens adultos que quer viver a vida até o final compartilhando momentos e lembranças."
      }
    ].map((item, index) => (
      <details
        key={index}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-md cursor-pointer border border-white/10"
      >
        <summary className="text-red-200 text-lg">
          {item.title}
        </summary>

        <p className="text-gray-300 mt-3 leading-relaxed">
          {item.text}
        </p>
      </details>
    ))}
{/* BOTÃO PARA LIBERAR A MÚSICA */}
<div className="flex justify-center pt-6">
  <button
    onClick={() => {
      setShowMusic(true);

      setTimeout(() => {
        document
          .getElementById("musica")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
      }, 250);
    }}
    className="group flex flex-col items-center text-red-200 hover:text-red-100 transition"
  >
    <span className="italic mb-2 text-center">
      Ainda existe algo que me faz lembrar de você...
    </span>

    <div className="animate-bounceSlow text-4xl">
      🎶
    </div>
  </button>
</div>
          </section>
)}

          
{showMusic && (
  <section
    id="musica"
    className="w-full max-w-md text-center space-y-5 animate-revealMoment"
  >
            <h2 className="text-xl">
              Victor e Léo foi a trilha sonora que Deus escolheu para eu conhecer o meu amor. Dê play para escutar o que essa música representa para nós. ❤️
            </h2>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-80"
                src="https://open.spotify.com/embed/track/4SVLWcwTrmnafJCmqdlWC0"
                allow="encrypted-media"
                title="Spotify"
              ></iframe>
            </div>
          </section>
)}
          {/* BOTÃO DA DECLARAÇÃO */}
{showMusic && !showMessage && (
  <div className="flex justify-center pb-20">
    <button
      onClick={() => {
        setShowMessage(true);
      }}
      className="bg-red-900 hover:bg-red-700 transition px-7 py-3 rounded-full shadow-lg"
    >
      Ainda preciso te dizer uma coisa ❤️
    </button>
  </div>
)}

{/* TELA ESPECIAL */}
{showMessage && (
  <div
    className={`fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center px-8 transition-opacity duration-1000 ${
      closingMessage ? "opacity-0" : "opacity-100"
    }`}
  >
    <div className="max-w-xl text-center">
      <p className="typewriter-message">
        Você é ultra especial para mim.
        <br />
        <br />
        E eu te escolho todos os dias até o fim da minha vida.
        <br />
        <br />
        Eu te amo,
        <br />
        Gabriela França ❤️
      </p>
    </div>
  </div>
)}

{/* PRESENTE */}
<section
  id="presente"
  className="min-h-screen flex flex-col justify-center items-center text-center px-6"
>
  <div className="max-w-lg space-y-8 animate-revealMoment">
    <span className="text-7xl animate-bounceSlow">
      🎁
    </span>

    <h2 className="text-3xl text-red-200">
      Seu presente está esperando por você ❤️
    </h2>

    <p className="text-gray-300 text-lg leading-relaxed">
      Algumas coisas não cabem em fotos, músicas ou palavras.
      <br />
      <br />
      Algumas precisam ser abertas com as próprias mãos.
    </p>
  </div>
</section>
        </main>
      )}
    </div>
  );
}
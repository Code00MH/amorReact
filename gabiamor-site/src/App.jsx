// App.jsx
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white font-serif min-h-screen w-full overflow-x-hidden">
      {loading ? (
        <div className="flex items-center justify-center h-screen text-center">
          <p className="text-lg italic text-red-200 animate-fade">
            Algumas histórias merecem ser lembradas.
          </p>
        </div>
      ) : (
        <main className="flex flex-col items-center px-6 space-y-16">
          {/* Hero Section */}
          <section className="h-screen flex flex-col justify-center items-center text-center space-y-6">
            <h1 className="text-2xl font-light">
              Antes de você abrir tudo… <br /> tem uma coisinha que eu queria te mostrar ❤️
            </h1>
            <p className="text-red-100">Uma pequena lembrança da nossa história.</p>
            <button
              onClick={() =>
                document.getElementById("timeline").scrollIntoView({ behavior: "smooth" })
              }
              className="bg-red-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition"
            >
              Abrir nossa história
            </button>
          </section>

          {/* Timeline */}
          <section id="timeline" className="w-full space-y-8">
            <h2 className="text-xl text-center">Nossa Timeline ❤️</h2>
            {[
              "Como nos conhecemos",
              "Nossa história na aula de inglês",
              "O primeiro 'eu te amo'",
              "Os desafios que enfrentamos",
              "O quanto aprendemos juntos",
              "O presente e nosso futuro",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md animate-slide-up"
              >
                <div className="h-40 bg-gray-800 rounded-lg mb-4"></div>
                <h3 className="text-lg text-red-200">{title}</h3>
                <p className="text-sm text-gray-300">Descrição emocional aqui...</p>
              </div>
            ))}
          </section>

          {/* 5 coisas improváveis */}
          <section className="w-full space-y-6">
            <h2 className="text-xl text-center">5 coisas improváveis que aconteceram com a gente ❤️</h2>
            {[1, 2, 3, 4, 5].map((n) => (
              <details
                key={n}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-md cursor-pointer"
              >
                <summary className="text-red-200">Coisa {n}</summary>
                <p className="text-gray-300 mt-2">Texto emocional aqui...</p>
              </details>
            ))}
          </section>

          {/* Música */}
          <section className="w-full text-center space-y-4">
            <h2 className="text-xl">Algumas músicas acabam virando lembrança 🎶</h2>
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* Placeholder para embed Spotify/YouTube */}
              <iframe
                className="w-full h-60"
                src="https://open.spotify.com/intl-pt/track/4SVLWcwTrmnafJCmqdlWC0?si=4dc5ef1b2b9b4304"
                allow="encrypted-media"
              ></iframe>
            </div>
          </section>

          {/* Final emocional */}
          <section className="h-screen flex flex-col justify-center items-center text-center space-y-6">
            <h2 className="text-2xl font-light">
              Se chegamos até aqui, é porque vale a pena continuar escrevendo nossa história ❤️
            </h2>
            <p className="text-gray-300">
              Existe uma parte dessa história que precisava ser escrita à mão.
            </p>
            <button
              onClick={() =>
                document.getElementById("carta").scrollIntoView({ behavior: "smooth" })
              }
              className="bg-red-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition"
            >
              Agora abra sua carta ❤️
            </button>
          </section>

          {/* Carta final */}
          <section
            id="carta"
            className="h-screen flex flex-col justify-center items-center text-center space-y-6 bg-black"
          >
            <p className="text-lg italic text-red-200">
              Algumas coisas merecem ser sentidas fora da tela.
            </p>
            <span className="text-3xl">❤️</span>
          </section>
        </main>
      )}
    </div>
  );
}

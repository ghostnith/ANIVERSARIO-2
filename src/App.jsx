import React, { useState, useEffect } from "react";

import foto1 from "./assets/foto1.jpg";
import foto2 from "./assets/foto2.jpg";
import foto3 from "./assets/foto3.jpg";
import foto4 from "./assets/foto4.jpg";
import foto5 from "./assets/foto5.jpg";
import foto6 from "./assets/foto6.jpg";

export default function ANIVERSARIO({ name = "Cesy", photos }) {
  const defaultPhotos = ["LOVE1.3.png", "LOVE1.2.png", "LOV1.1.png"];
  const slides = photos && photos.length ? photos : defaultPhotos;

  const [index, setIndex] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [answers, setAnswers] = useState({});
  const [openLetters, setOpenLetters] = useState([]);

  useEffect(() => {
    let interval, timeout, cleanup;
    if (showSurprise) {
      interval = setInterval(() => {
        setHearts((h) => [
          ...h,
          { id: Date.now() + Math.random(), left: Math.random() * 100, size: 14 + Math.random() * 12 },
        ]);
      }, 200);
      timeout = setTimeout(() => clearInterval(interval), 2200);
      cleanup = setTimeout(() => setHearts([]), 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
      if (cleanup) clearTimeout(cleanup);
    };
  }, [showSurprise]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const downloadLetter = () => {
    const letter = `Para ${name},\n\nMi amorcito:\n\nMi amorcito han sido años ya que hemos pasado quien hiba a pensar ello mi amor jaja, mi vida te amo mucho te amo muchisimo mi cielo lo sabes que tu eres la unica mujer para mi la unica que quiero ver sentir y besar mucho y dar todo mi amor eres la dueña de mi la dueña de mi corazon quien quiero amar toda la vida por los siglos de los siglos mi amor , cada dia te veo mas hermosa cada dia te veo mas preciosa mi amor quiero ya estar a tu lado quiero hacer muchas cosas mas por ti mi amor , siempre quiero estar contigo y superar todo lo malo que llegue a nuestro camino te amo mai lov nunca me deje y ojala pronto estemos juntos\n\nSiempre tuyo,\nSanti\n`;
    const blob = new Blob([letter], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Carta_para_${name.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const questions = [
    { q: "¿Quién dijo 'te amo' primero?", a: "Yo fui 😍" },
    { q: "¿Quién es más dormilón?", a: "Definitivamente tú 😴" },
    { q: "¿Quién tiene los ojos más bonitos?", a: "Pues tú mi amor ❤️" },
  ];

  const promises = [
    "Prometo irte a visitar mi amor ✈️",
    "Prometo hacerte la mujer más feliz 💍",
    "Prometo amarte siempre a ti mucho mi amor 💖",
  ];

  const letters = [
    "Siempre me haces sentir en casa, aunque estemos lejos 💌",
    "Tu sonrisa es mi motor cada día 🌟",
    "No hay un futuro que imagine sin ti 💕",
  ];

  const gallerySlots = [foto1, foto2, foto3, foto4, foto5, foto6];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-black text-gray-100 p-4 sm:p-6 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
        <header className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold">💝 Para {name}</h1>
          <div className="text-sm sm:text-base opacity-80">Aniversario 2 años ✨</div>
        </header>

        <main className="space-y-10 p-4 sm:p-6">
          {/* Carrusel */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Nuestro carrusel</h2>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={slides[index]}
                alt={`Foto ${index + 1}`}
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg"
              />
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white"
              >
                ›
              </button>
            </div>
          </section>

          {/* Galería especial */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Galería especial</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallerySlots.map((s, i) => (
                <div
                  key={i}
                  className="relative w-full h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden shadow-md flex items-center justify-center"
                  style={{
                    backgroundColor: "white",
                    backgroundImage: `
                      url('https://em-content.zobj.net/thumbs/120/apple/354/sparkling-heart_1f496.png'),
                      url('https://em-content.zobj.net/thumbs/120/apple/354/two-hearts_1f495.png'),
                      url('https://em-content.zobj.net/thumbs/120/apple/354/growing-heart_1f497.png')
                    `,
                    backgroundRepeat: "repeat",
                    backgroundSize: "30px 30px",
                  }}
                >
                  <img
                    src={s}
                    alt={`Foto especial ${i + 1}`}
                    className="max-h-full max-w-full object-contain z-10"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Línea de tiempo */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Nuestra historia</h2>
            <ol className="relative border-l border-pink-400/50 ml-4 space-y-6">
              <li>
                <div className="ml-4">
                  <time className="text-pink-300">2023</time>
                  <p className="font-medium">
                    En este año fue donde conoci a la mujer perfecta a la mujer de mis sueños que desde que la vi senti lo mas bonito de mi vida la alegria y la felicidad retomo mi vida al conocer un mujer tan hermosa tan perfecta como tu mai lov
                  </p>
                </div>
              </li>
              <li>
                <div className="ml-4">
                  <time className="text-pink-300">2024</time>
                  <p className="font-medium">
                    Este año fue donde ya convivimos mucho mas donde enfretamos muchas cosas mi amor las cuales hemos solucionado juntos donde cada ves me enamoro mas de ti donde siento que sto cada vez se hace mas fuerte donde todo esto se que me hace bien estar a tu lado mi amor y solamnete quiero estar contigo esposa querida mia
                  </p>
                </div>
              </li>
              <li>
                <div className="ml-4">
                  <time className="text-pink-300">2025</time>
                  <p className="font-medium">
                    Este año ha sido de todo mi amor siempre juntos quiero quiero estar siempre contigo toda mi vida
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Playlist */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Nuestra playlist</h2>
            <div className="rounded-lg overflow-hidden">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/playlist/0pBqMZySccSjKrVhm3B47K?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                title="Spotify playlist"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full"
              />
            </div>
          </section>

          {/* Juego de preguntas */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Juego de preguntas</h2>
            <div className="space-y-4">
              {questions.map((q, i) => (
                <div key={i} className="p-4 bg-white/10 rounded-lg">
                  <p className="font-medium">{q.q}</p>
                  {answers[i] ? (
                    <p className="mt-2 text-pink-300">{q.a}</p>
                  ) : (
                    <button
                      onClick={() => setAnswers({ ...answers, [i]: true })}
                      className="mt-2 px-3 py-1 bg-pink-500 rounded-full"
                    >
                      Ver respuesta
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Promesas a futuro */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Promesas a futuro</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {promises.map((p, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-gradient-to-r from-pink-600/40 to-purple-600/40 text-center shadow"
                >
                  {p}
                </div>
              ))}
            </div>
          </section>

          {/* Cartas coleccionables */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Cartas para ti</h2>
            <div className="flex flex-wrap gap-3">
              {letters.map((l, i) => (
                <div key={i} className="p-3 bg-white/10 rounded-lg min-w-[160px]">
                  {openLetters.includes(i) ? (
                    <p>{l}</p>
                  ) : (
                    <button
                      onClick={() => setOpenLetters([...openLetters, i])}
                      className="px-3 py-1 bg-pink-500 rounded-full"
                    >
                      Abrir carta {i + 1}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Sorpresa */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Sorpresa</h2>
            <div className="p-4 rounded-lg bg-white/6">
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => setShowSurprise((s) => !s)}
                  className="px-4 py-2 rounded-full bg-pink-500 hover:scale-105 active:scale-95 transition"
                >
                  {showSurprise ? "Ocultar" : "Abrir sorpresa"}
                </button>
                <button
                  onClick={downloadLetter}
                  className="px-4 py-2 rounded-full border border-white/20"
                >
                  Descargar carta
                </button>
              </div>

              {showSurprise && (
                <div className="mt-4 relative">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-pink-800/60 to-purple-900/60">
                    <h4 className="font-bold">Mi carta</h4>
                    <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap">
                      {"mi amorcito han sido años ya que hemos pasado quien hiba a pensar ello mi amor jaja, mi vida te amo mucho te amo muchisimo mi cielo lo sabes que tu eres la unica mujer para mi la unica que quiero ver sentir y besar mucho y dar todo mi amor eres la dueña de mi la dueña de mi corazon quien quiero amar toda la vida por los siglos de los siglos mi amor , cada dia te veo mas hermosa cada dia te veo mas preciosa mi amor quiero ya estar a tu lado quiero hacer muchas cosas mas por ti mi amor , siempre quiero estar contigo y superar todo lo malo que llegue a nuestro camino te amo mai lov nunca me deje y ojala pronto estemos juntos"}
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {hearts.map((h) => (
                      <span
                        key={h.id}
                        style={{ left: `${h.left}%`, fontSize: `${h.size}px` }}
                        className="heart absolute top-3 transform -translate-x-1/2 animate-rise"
                      >
                        ❤
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>

        <footer className="p-6 text-center text-xs opacity-80">
          Hecho con ❤️ por Santi — 2 años de amor contigo, {name}.
        </footer>
      </div>

      <style>{`
        .heart {
          font-size: 18px;
          animation-duration: 3s;
          animation-iteration-count: 1;
          opacity: 0.95;
        }
        @keyframes rise {
          0% { transform: translateY(0) scale(0.8); opacity:1; left:50%; }
          50% { transform: translateY(-120px) scale(1.1); opacity:0.9; }
          100% { transform: translateY(-260px) scale(0.6); opacity:0; left:30%; }
        }
        .animate-rise { animation-name: rise; }
      `}</style>
    </div>
  );
}

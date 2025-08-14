import React, { useState, useEffect } from 'react';
import ProfileShadow from '../assets/wmremove-transformed.png'; // Ubah path jika perlu

export default function Hero() {
  const names = ['Agung Firdaus', 'Furious Insomniac'];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % names.length;
      const fullText = names[i];

      setText(prev =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const ticker = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, names, typingSpeed]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* === Kiri: Teks === */}
        <div className="text-left">
          <h1 className="text-5xl font-bold text-black mb-4">
            Hey, I am <span className="text-black">{text}</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            I am a Junior Frontend Developer, and this is my personal portfolio website. 
            Thanks for visiting! I hope you enjoy it. 😊
          </p>
          <div className="flex gap-4">
            <a
              href="#about"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Tentang Saya
            </a>
            <a
              href="#contact"
              className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
            >
              Kontak & Sosial Media
            </a>
          </div>
        </div>

        {/* === Kanan: Gambar + Pola === */}
        <div className="relative flex justify-center md:justify-end">
          {/* Pola oval di belakang */}
          <div className="absolute bottom-0 right-0 w-[200px] h-[300px] md:w-[347px] md:h-[300px] bg-gray-200 rounded-t-full z-0" />

          {/* Gambar profil di atas pola */}
          <img
            src={ProfileShadow}
            alt="Profile Shadow"
            className="relative z-10 h-[420px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}

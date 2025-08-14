// src/components/Language.jsx
import React from 'react';
import {
  FaJsSquare,
  FaPhp,
  FaLaravel,
  FaReact,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const languages = [
  { name: 'JavaScript', level: 'Intermediate', icon: <FaJsSquare size={36} /> },
  { name: 'PHP', level: 'Intermediate', icon: <FaPhp size={36} /> },
  { name: 'Laravel', level: 'Intermediate', icon: <FaLaravel size={36} /> },
  { name: 'React', level: 'Beginner', icon: <FaReact size={36} /> },
  { name: 'Tailwind CSS', level: 'Beginner', icon: <SiTailwindcss size={36} /> },
  { name: 'HTML', level: 'Advance', icon: <FaHtml5 size={36} /> },
  { name: 'CSS', level: 'Advance', icon: <FaCss3Alt size={36} /> },
];

const Language = () => (
  <section id="bahasa" className="py-16 bg-gray-100">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Bahasa & Tools Pemrograman</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-300 hover:shadow-lg transition"
          >
            {lang.icon}
            <h3 className="mt-4 text-lg font-semibold">{lang.name}</h3>
            <p className="text-sm text-gray-500">{lang.level}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Language;

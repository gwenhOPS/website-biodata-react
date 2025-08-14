// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 mt-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm">
          © 2025 - <span className="font-semibold">Furious.exe</span>. All rights reserved.
        </p>
        <p className="text-xs text-black-400 mt-1">
          Built with <span className="text-pink-400">React</span> & <span className="text-blue-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

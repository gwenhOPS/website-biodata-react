import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-white-100 py-16" 
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Kontak & Sosial Media
        </h2>
        <div className="grid md:grid-cols-2 gap-12">

          {/* Sosial Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Sosial Media
            </h3>
            <div className="flex flex-col gap-4 text-gray-600">
              <a
                href="https://github.com/gwenhops"
                className="flex items-center gap-3 hover:text-black transition"
              >
                <FaGithub className="text-2xl" /> GitHub
              </a>
              <a
                href="https://www.instagram.com/setengah_mie_ayam"
                className="flex items-center gap-3 hover:text-pink-500 transition"
              >
                <FaInstagram className="text-2xl" /> Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61559635629921"
                className="flex items-center gap-3 hover:text-blue-700 transition"
              >
                <FaFacebook className="text-2xl" /> Facebook
              </a>
            </div>
          </div>

          {/* Kontak Langsung */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Hubungi Saya
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-xl text-black-500" />
                <span>inigwenh@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaDiscord className="text-xl text-black-500" />
                <span>@1am_in_night</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

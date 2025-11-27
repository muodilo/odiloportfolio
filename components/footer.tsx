'use client';

import Link from 'next/link';
import { Github, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
              <span className="text-2xl font-bold">dilo</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer and designer<br />
              crafting digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-teal-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links - Social Icons */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-teal-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-teal-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

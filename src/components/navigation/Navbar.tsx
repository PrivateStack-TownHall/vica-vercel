"use client";

import Link from "next/link";

import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

import Logo from "../shared/Logo";

export default function Navbar() {
  return (
    <header className="bg-vica-gradient flex h-16 items-center justify-between border-b border-white/10 px-8">
      {/* Left */}
      <Logo />

      {/* Right */}
      <div className="flex items-center gap-6">
        <Link
          href="https://github.com"
          target="_blank"
          className="text-white/80 transition-all hover:text-white"
        >
          <FaGithub size={22} />
        </Link>

        <Link
          href="https://instagram.com"
          target="_blank"
          className="text-white/80 transition-all hover:text-white"
        >
          <FaInstagram size={22} />
        </Link>

        <button className="text-white/80 transition-all hover:text-white">
          <IoNotificationsOutline size={24} />
        </button>
      </div>
    </header>
  );
}

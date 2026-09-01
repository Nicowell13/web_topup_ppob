import React from "react";
import Link from "next/link";
import { Gamepad2, Gift, History, User, ShieldAlert } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Gamepad2 className="h-7 w-7 text-indigo-500" />
          <span className="text-xl font-bold tracking-tight text-white">
            TOPUP<span className="text-indigo-500">PLAY</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-indigo-400 transition-colors">
            Catalog
          </Link>
          <Link href="/check-in" className="hover:text-indigo-400 transition-colors">
            Daily Reward
          </Link>
          <Link href="/history" className="hover:text-indigo-400 transition-colors">
            Order Status
          </Link>
          <Link href="/admin" className="text-rose-400 hover:text-rose-300 flex items-center gap-1">
            <ShieldAlert className="h-4 w-4" /> Admin
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all"
          >
            <User className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

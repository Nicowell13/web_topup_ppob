import React from "react";
import Link from "next/link";
import { Sparkles, Flame, CheckCircle, Zap } from "lucide-react";

export default function HomePage() {
  const games = [
    { id: "mobile-legends", name: "Mobile Legends", publisher: "Moonton", tag: "POPULAR", imageBg: "from-blue-600 to-indigo-900" },
    { id: "free-fire", name: "Free Fire", publisher: "Garena", tag: "HOT", imageBg: "from-amber-600 to-red-900" },
    { id: "valorant", name: "Valorant", publisher: "Riot Games", tag: "PROMO", imageBg: "from-rose-600 to-slate-900" },
    { id: "genshin-impact", name: "Genshin Impact", publisher: "HoYoverse", tag: "INSTANT", imageBg: "from-teal-600 to-blue-900" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 space-y-12">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 via-gray-900 to-gray-950 p-8 shadow-2xl">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" /> Gamified Top-Up Platform
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            Top-up Kilat, Kumpulkan Poin, Klaim Diskon!
          </h1>
          <p className="text-sm text-gray-300 sm:text-base leading-relaxed">
            Dapatkan reward streak harian, voucher cashback, dan pemrosesan otomatis transaksi game & PPOB dalam hitungan detik.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#catalog"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-all flex items-center gap-2"
            >
              <Zap className="h-4 w-4" /> Beli Sekarang
            </Link>
            <Link
              href="/check-in"
              className="rounded-lg border border-gray-700 bg-gray-800/80 px-5 py-2.5 text-sm font-semibold text-gray-200 hover:bg-gray-700 transition-all flex items-center gap-2"
            >
              <Flame className="h-4 w-4 text-amber-500" /> Daily Check-In
            </Link>
          </div>
        </div>
      </section>

      {/* Game Catalog Grid */}
      <section id="catalog" className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Pilihan Populer</h2>
            <p className="text-xs text-gray-400 sm:text-sm">Pilih game favoritmu dan top up instant otomatis.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {games.map((game) => (
            <Link
              key={game.id}
              href={`/order/${game.id}`}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-4 transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-gray-900 shadow-md"
            >
              <div className={`h-32 w-full rounded-lg bg-gradient-to-tr ${game.imageBg} flex items-center justify-center text-white font-black text-xl shadow-inner`}>
                {game.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="mt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                  {game.tag}
                </span>
                <h3 className="text-base font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {game.name}
                </h3>
                <p className="text-xs text-gray-400">{game.publisher}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Image as ImageIcon, 
  Music, 
  Film, 
  FileText, 
  Bot,
  MessageCircle,
  ArrowLeft
} from "lucide-react";

const categories = [
  {
    slug: "images",
    title: "Картинки",
    description: "AI-арт, фото, ретушь и генерации",
    icon: ImageIcon,
    accent: "from-pink-500/20 to-rose-500/10",
    borderHover: "hover:border-pink-500/40",
    iconColor: "text-pink-400",
    href: "/category/images",
  },
  {
    slug: "music",
    title: "Музыка",
    description: "Песни, треки и звуковые ландшафты",
    icon: Music,
    accent: "from-cyan-500/20 to-blue-500/10",
    borderHover: "hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
    href: "/category/music",
  },
  {
    slug: "video",
    title: "Видео",
    description: "Поздравления, клипы и анимации",
    icon: Film,
    accent: "from-amber-500/20 to-yellow-500/10",
    borderHover: "hover:border-amber-500/40",
    iconColor: "text-amber-400",
    href: "/category/video",
  },
  {
    slug: "texts",
    title: "Тексты",
    description: "Истории, сценарии и копирайтинг",
    icon: FileText,
    accent: "from-emerald-500/20 to-green-500/10",
    borderHover: "hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
    href: "/category/texts",
  },
  {
    slug: "apps",
    title: "Программы и боты",
    description: "Приложения, боты и утилиты",
    icon: Bot,
    accent: "from-violet-500/20 to-purple-500/10",
    borderHover: "hover:border-violet-500/40",
    iconColor: "text-violet-400",
    href: "/category/apps",
  },
  {
    slug: "contact",
    title: "Заказать",
    description: "Связаться и обсудить ваш проект",
    icon: MessageCircle,
    accent: "from-cyan-400/25 to-violet-500/20",
    borderHover: "hover:border-cyan-400/50",
    iconColor: "text-cyan-300",
    href: "/contact",
    isSpecial: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

export default function CategoriesPage() {
  return (
    <main className="relative min-h-screen px-6 py-16 md:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <ArrowLeft className="h-4 w-4" />
            На главную
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Выбери категорию
          </h1>
          <p className="mt-4 text-lg text-zinc-500">
            Всё, что создано с помощью искусственного интеллекта
          </p>
        </motion.div>

        {/* Categories grid — 6 items look perfect in 3×2 */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.slug} variants={item}>
                <Link
                  href={cat.href}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-400 ${cat.borderHover} hover:bg-white/[0.04] hover:scale-[1.02] ${
                    cat.isSpecial ? "ring-1 ring-cyan-500/20" : ""
                  }`}
                >
                  {/* Soft accent gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  <div className="relative z-10 flex flex-1 flex-col">
                    <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${cat.iconColor}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>

                    <h2 className="mb-2 text-xl font-semibold tracking-tight text-white">
                      {cat.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-400 transition-colors">
                      {cat.description}
                    </p>

                    <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors group-hover:text-white">
                      {cat.isSpecial ? "Написать" : "Смотреть"}
                      <ArrowLeft className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Admin hint (discreet) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <Link
            href="/admin"
            className="text-xs tracking-widest text-zinc-700 uppercase transition-colors hover:text-zinc-500"
          >
            Админка
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

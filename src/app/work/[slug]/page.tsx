"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { use } from "react";
import {
  ArrowLeft,
  Play,
  Music2,
  Film,
  FileText,
  Bot,
  Image as ImageIcon,
  Calendar,
  Tag,
} from "lucide-react";
import { works, type Work } from "@/lib/works";

const typeIcons = {
  image: ImageIcon,
  music: Music2,
  video: Film,
  text: FileText,
  app: Bot,
};

const typeLabels = {
  image: "Картинка",
  music: "Музыка",
  video: "Видео",
  text: "Текст",
  app: "Программа / Бот",
};

function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export default function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const work = getWorkBySlug(slug);

  if (!work) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white">Работа не найдена</h1>
          <Link
            href="/categories"
            className="mt-4 inline-block text-cyan-400 transition-colors hover:text-cyan-300"
          >
            ← Вернуться к категориям
          </Link>
        </div>
      </main>
    );
  }

  const Icon = typeIcons[work.type];

  return (
    <main className="relative min-h-screen px-6 py-12 md:py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className={`absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b ${work.accent} opacity-20 blur-[120px]`} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href={`/category/${work.category}`}
            className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад к категории
          </Link>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Media / Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${work.accent} shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)]`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/35 backdrop-blur-md">
                  <Icon className="h-9 w-9 text-white/85" strokeWidth={1.4} />
                </div>
              </div>

              {/* Play button for media */}
              {(work.type === "music" || work.type === "video") && (
                <button className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all hover:scale-105 hover:bg-white/25">
                  <Play className="h-5 w-5 fill-white text-white" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {/* Type + Date */}
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-zinc-400">
                <Icon className="h-3.5 w-3.5" />
                {typeLabels[work.type]}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {work.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {work.title}
            </h1>

            {/* Description */}
            <p className="mb-6 text-[15px] leading-relaxed text-zinc-400">
              {work.description}
            </p>

            {/* Tags */}
            {work.tags.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Prompt block */}
            {work.prompt && (
              <div className="mt-auto rounded-xl border border-white/8 bg-white/[0.02] p-5">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Промпт
                </p>
                <p className="text-sm leading-relaxed text-zinc-400 font-mono">
                  {work.prompt}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

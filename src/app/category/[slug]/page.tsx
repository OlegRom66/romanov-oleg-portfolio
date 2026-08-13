"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { use } from "react";
import { ArrowLeft, Play, Music2, Film, FileText, Bot, Image as ImageIcon } from "lucide-react";
import { getWorksByCategory, categoryMeta, type Work } from "@/lib/works";

const typeIcons = {
  image: ImageIcon,
  music: Music2,
  video: Film,
  text: FileText,
  app: Bot,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function WorkCard({ work }: { work: Work }) {
  const Icon = typeIcons[work.type];

  return (
    <Link
      href={`/work/${work.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] transition-all duration-500 hover:scale-[1.025] hover:border-cyan-500/30 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.25)]"
    >
      {/* Soft glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${work.accent} opacity-20 blur-xl`} />
      </div>

      {/* Media preview */}
      <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${work.accent}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/30 backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
            <Icon className="h-6 w-6 text-white/80" strokeWidth={1.5} />
          </div>
        </div>

        {(work.type === "music" || work.type === "video") && (
          <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
            <Play className="h-3.5 w-3.5 fill-white text-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-5">
        <div className="mb-2.5 flex flex-wrap gap-1.5">
          {work.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-1.5 text-[15px] font-semibold leading-snug tracking-tight text-white">
          {work.title}
        </h3>

        <p className="line-clamp-2 text-[13px] leading-relaxed text-zinc-500">
          {work.description}
        </p>
      </div>
    </Link>
  );
}

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const meta = categoryMeta[slug];
  const categoryWorks = getWorksByCategory(slug);

  if (!meta) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white">Категория не найдена</h1>
          <Link href="/categories" className="mt-4 inline-block text-cyan-400 hover:underline">
            ← Вернуться к категориям
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen px-6 py-12 md:py-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute -right-32 bottom-20 h-[380px] w-[380px] rounded-full bg-violet-500/5 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/categories"
            className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Все категории
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-3 text-lg text-zinc-500">{meta.description}</p>
          <p className="mt-2 text-sm text-zinc-600">
            {categoryWorks.length}{" "}
            {categoryWorks.length === 1
              ? "работа"
              : categoryWorks.length < 5
              ? "работы"
              : "работ"}
          </p>
        </motion.div>

        {/* Works grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categoryWorks.map((work) => (
            <motion.div key={work.id} variants={item}>
              <WorkCard work={work} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, MessageCircle, Mail, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen px-6 py-16 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/categories"
            className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад к категориям
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Давай работать вместе
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">
            Есть идея для песни, видео, картинки, бота или чего-то ещё?  
            Напиши — обсудим детали и сроки.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {/* Telegram */}
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-400 hover:border-cyan-500/40 hover:bg-white/[0.05] hover:scale-[1.02]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Telegram</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Самый быстрый способ связаться
              </p>
              <p className="mt-2 text-sm text-cyan-400/80 group-hover:text-cyan-300">
                @your_username
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@romanov-oleg.site"
            className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-400 hover:border-violet-500/40 hover:bg-white/[0.05] hover:scale-[1.02]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Для более формальных запросов
              </p>
              <p className="mt-2 text-sm text-violet-400/80 group-hover:text-violet-300">
                hello@romanov-oleg.site
              </p>
            </div>
          </a>
        </motion.div>

        {/* What I can do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 rounded-2xl border border-white/8 bg-white/[0.02] p-8"
        >
          <h2 className="mb-5 text-lg font-semibold text-white">
            Что можно заказать
          </h2>
          <ul className="space-y-3 text-[15px] text-zinc-400">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              Генерация и обработка изображений, AI-арт
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              Написание песен и музыкальных треков
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              Поздравительные и рекламные видео
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              Тексты, сценарии, продающие описания
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              Telegram-боты и небольшие приложения
            </li>
          </ul>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-zinc-600"
        >
          Обычно отвечаю в течение нескольких часов
        </motion.p>
      </div>
    </main>
  );
}

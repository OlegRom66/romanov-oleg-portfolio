export type WorkType = "image" | "music" | "video" | "text" | "app";

export interface Work {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: WorkType;
  category: string;
  tags: string[];
  date: string;
  prompt?: string;
  // For demo we use color accents instead of real media
  accent: string;
}

export const works: Work[] = [
  // === КАРТИНКИ ===
  {
    id: "img-01",
    slug: "neon-city-rain",
    title: "Неоновый город под дождём",
    description: "Киберпанк-пейзаж с отражениями неоновых вывесок на мокром асфальте",
    type: "image",
    category: "images",
    tags: ["cyberpunk", "city", "night"],
    date: "2026-07-12",
    prompt: "cyberpunk city at night, heavy rain, neon reflections, ultra detailed, cinematic lighting",
    accent: "from-fuchsia-500/30 to-purple-600/20",
  },
  {
    id: "img-02",
    slug: "ethereal-portrait",
    title: "Эфирный портрет",
    description: "Мягкий сюрреалистичный женский портрет с элементами света",
    type: "image",
    category: "images",
    tags: ["portrait", "surreal", "soft"],
    date: "2026-06-28",
    prompt: "ethereal female portrait, soft volumetric light, dreamy atmosphere, 8k",
    accent: "from-rose-400/25 to-orange-300/15",
  },
  {
    id: "img-03",
    slug: "ancient-temple-fog",
    title: "Древний храм в тумане",
    description: "Затерянный храм в горах, окружённый густым туманом на рассвете",
    type: "image",
    category: "images",
    tags: ["landscape", "fantasy", "atmosphere"],
    date: "2026-08-01",
    accent: "from-emerald-500/25 to-teal-600/15",
  },
  {
    id: "img-04",
    slug: "abstract-fluid",
    title: "Абстрактная жидкость",
    description: "Динамичная абстракция из переливающихся жидких форм",
    type: "image",
    category: "images",
    tags: ["abstract", "fluid", "color"],
    date: "2026-07-19",
    accent: "from-cyan-400/30 to-blue-500/20",
  },

  // === МУЗЫКА ===
  {
    id: "mus-01",
    slug: "midnight-drive",
    title: "Midnight Drive",
    description: "Синтезаторный трек в стиле synthwave с глубоким басом",
    type: "music",
    category: "music",
    tags: ["synthwave", "electronic", "night"],
    date: "2026-07-05",
    prompt: "synthwave track, 80s nostalgia, driving at night, powerful bass, emotional pads",
    accent: "from-cyan-500/30 to-indigo-600/20",
  },
  {
    id: "mus-02",
    slug: "quiet-rain",
    title: "Тихий дождь",
    description: "Атмосферная ambient-композиция с звуками дождя и мягким фортепиано",
    type: "music",
    category: "music",
    tags: ["ambient", "piano", "relax"],
    date: "2026-06-14",
    accent: "from-slate-400/25 to-blue-400/15",
  },
  {
    id: "mus-03",
    slug: "energy-rush",
    title: "Energy Rush",
    description: "Динамичный электронный трек для спорта и концентрации",
    type: "music",
    category: "music",
    tags: ["electronic", "upbeat", "focus"],
    date: "2026-08-03",
    accent: "from-orange-500/30 to-red-500/20",
  },

  // === ВИДЕО ===
  {
    id: "vid-01",
    slug: "birthday-magic",
    title: "Поздравление с днём рождения",
    description: "Тёплое кинематографичное видео-поздравление с персонализированным текстом",
    type: "video",
    category: "video",
    tags: ["congratulation", "warm", "personal"],
    date: "2026-07-22",
    accent: "from-amber-400/30 to-rose-500/20",
  },
  {
    id: "vid-02",
    slug: "product-reveal",
    title: "Product Reveal",
    description: "Динамичный рекламный ролик с 3D-эффектами и быстрыми переходами",
    type: "video",
    category: "video",
    tags: ["commercial", "3d", "dynamic"],
    date: "2026-06-30",
    accent: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    id: "vid-03",
    slug: "nature-timelapse",
    title: "Природный таймлапс",
    description: "Плавный таймлапс рассвета в горах с мягкой музыкой",
    type: "video",
    category: "video",
    tags: ["nature", "timelapse", "calm"],
    date: "2026-08-05",
    accent: "from-sky-400/25 to-emerald-500/15",
  },

  // === ТЕКСТЫ ===
  {
    id: "txt-01",
    slug: "short-story-echo",
    title: "Эхо забытого города",
    description: "Короткий рассказ в жанре магического реализма о городе, который помнит",
    type: "text",
    category: "texts",
    tags: ["story", "magical realism"],
    date: "2026-07-08",
    prompt: "short story, magical realism, abandoned city that remembers people, melancholic tone",
    accent: "from-emerald-500/25 to-teal-600/15",
  },
  {
    id: "txt-02",
    slug: "landing-copy",
    title: "Текст для лендинга AI-сервиса",
    description: "Продающий текст главной страницы для стартапа в сфере генеративного ИИ",
    type: "text",
    category: "texts",
    tags: ["copywriting", "landing", "saas"],
    date: "2026-06-20",
    accent: "from-blue-500/25 to-indigo-500/15",
  },
  {
    id: "txt-03",
    slug: "poem-night",
    title: "Ночной стих",
    description: "Лирическое стихотворение о тишине большого города ночью",
    type: "text",
    category: "texts",
    tags: ["poetry", "urban", "night"],
    date: "2026-07-29",
    accent: "from-indigo-400/25 to-purple-500/15",
  },

  // === ПРОГРАММЫ И БОТЫ ===
  {
    id: "app-01",
    slug: "telegram-assistant",
    title: "Telegram-ассистент",
    description: "Бот, который помогает вести задачи, напоминает и отвечает на вопросы",
    type: "app",
    category: "apps",
    tags: ["telegram", "bot", "productivity"],
    date: "2026-07-15",
    accent: "from-sky-500/30 to-blue-600/20",
  },
  {
    id: "app-02",
    slug: "image-batch-tool",
    title: "Пакетный обработчик изображений",
    description: "Небольшое приложение для массовой обработки и стилизации фото через ИИ",
    type: "app",
    category: "apps",
    tags: ["tool", "images", "automation"],
    date: "2026-06-25",
    accent: "from-violet-500/30 to-purple-600/20",
  },
  {
    id: "app-03",
    slug: "mood-tracker",
    title: "Mood Tracker Bot",
    description: "Бот для отслеживания настроения с еженедельной аналитикой и советами",
    type: "app",
    category: "apps",
    tags: ["bot", "health", "analytics"],
    date: "2026-08-02",
    accent: "from-rose-400/25 to-orange-400/15",
  },
];

export const categoryMeta: Record<string, { title: string; description: string }> = {
  images: {
    title: "Картинки",
    description: "AI-арт, фото и визуальные генерации",
  },
  music: {
    title: "Музыка",
    description: "Треки, песни и звуковые атмосферы",
  },
  video: {
    title: "Видео",
    description: "Поздравления, клипы и motion-дизайн",
  },
  texts: {
    title: "Тексты",
    description: "Истории, стихи и продающие тексты",
  },
  apps: {
    title: "Программы и боты",
    description: "Приложения, боты и утилиты",
  },
};

export function getWorksByCategory(category: string): Work[] {
  return works.filter((w) => w.category === category);
}

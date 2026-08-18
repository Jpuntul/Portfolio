export const SCROLL_THRESHOLD = {
  HEADER: 50,
  BACK_TO_TOP: 300,
} as const;

export const CARD_DIMENSIONS = {
  FEATURED_MIN_WIDTH: "380px",
  FEATURED_MAX_WIDTH: "md",
  FEATURED_HEIGHT: "430px",
  IMAGE_HEIGHT: "h-48",
} as const;

export const ANIMATION_DELAY = {
  FEATURED_CARD: 0.2,
  GRID_CARD: 0.1,
  CATEGORY_STAGGER: 0.2,
} as const;

export const TECH_DISPLAY_LIMIT = {
  FEATURED: 3,
  GRID: 4,
} as const;

export const TYPEWRITER_SPEED = 100;

export const FORM_TIMEOUT = 5000;

/** Fade + rise once, first time a snap section scrolls into view. */
export const SECTION_REVEAL = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

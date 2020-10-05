export const PATH = {
  excursions: '/excursions',
  excursion: (slug: string) => `/excursions/${slug}`,
} as const;

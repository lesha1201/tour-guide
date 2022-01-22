module.exports = {
  pathPrefix: '/',
  metadata: {
    siteUrl:
      process.env.URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined),
    title: 'Гид по Санкт-Петербургу Марина Петрова',
    titleTemplate: '%s | Марина Петрова',
    description: 'Индивидуальный гид по Санкт-Петербургу.',
    image: '/images/meta-image.jpg',
  },
};

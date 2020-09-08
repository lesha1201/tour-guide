module.exports = {
  pathPrefix: '/',
  metadata: {
    url: 'http://localhost:8000',
    title: 'Title',
    subtitle:
      'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
    copyright: '© All rights reserved.',
    menu: [
      {
        label: 'Articles',
        path: '/',
      },
      {
        label: 'About me',
        path: '/pages/about',
      },
      {
        label: 'Contact me',
        path: '/pages/contacts',
      },
    ],
    author: {
      name: 'Alexey Ryabov',
      bio:
        'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
      contacts: {
        email: '',
        facebook: '#',
        telegram: '#',
        twitter: '#',
        github: '#',
        rss: '',
        vkontakte: '',
        linkedin: '#',
        instagram: '#',
        line: '',
        gitlab: '',
        weibo: '',
        codepen: '',
        youtube: '',
        soundcloud: '',
      },
    },
  },
  postsPerPage: 4,
  googleAnalyticsId: '-',
};

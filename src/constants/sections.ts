export type SECTION = {
  name: string;
  isShownInMenu: boolean;
  id: string;
};

export const HERO_SECTION = {
  name: 'Главная',
  id: 'home',
  isShownInMenu: true,
};

export const VIDEO_SECTION = {
  name: 'Видео',
  id: 'video',
  isShownInMenu: false,
};

export const FEATURES_SECTION = {
  name: 'Преимущества',
  id: 'features',
  isShownInMenu: false,
};

export const EXCURSIONS_SECTION = {
  name: 'Экскурсии',
  id: 'excursions',
  isShownInMenu: true,
};

export const GALLERY_SECTION = {
  name: 'Галерея',
  id: 'gallery',
  isShownInMenu: true,
};

export const TESTIMONIALS_SECTION = {
  name: 'Отзывы',
  id: 'testimonials',
  isShownInMenu: true,
};

export const CONTACTS_SECTION = {
  name: 'Контакты',
  id: 'contacts',
  isShownInMenu: true,
};

export const SECTIONS: SECTION[] = [
  HERO_SECTION,
  VIDEO_SECTION,
  FEATURES_SECTION,
  EXCURSIONS_SECTION,
  GALLERY_SECTION,
  TESTIMONIALS_SECTION,
  CONTACTS_SECTION,
];

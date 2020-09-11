export function toggleBodyScroll(value: string) {
  if (value) {
    document.body.style.overflow = value;

    return;
  }

  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'initial';
  } else {
    document.body.style.overflow = 'hidden';
  }
}

import { clsx } from 'clsx';

export function cn(...inputs) {
  return inputs
    .filter(Boolean)
    .join(' ');
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}

export function truncate(str, length) {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

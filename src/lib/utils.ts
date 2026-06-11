import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatFileSize(bytes: number) {
  if (!bytes) return "0 B";

  const sizes = ["B", "KB", "MB", "GB"];

  const i = Math.floor(
    Math.log(bytes) / Math.log(1024),
  );

  return `${(
    bytes /
    Math.pow(1024, i)
  ).toFixed(2)} ${sizes[i]}`;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
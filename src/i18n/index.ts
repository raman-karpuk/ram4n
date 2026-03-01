import en from "./en.json";
import ru from "./ru.json";
import pl from "./pl.json";

export type Locale = "en" | "ru" | "pl";

const translations = { en, ru, pl } as const;

export function t(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split("/");
  if (segment === "ru" || segment === "pl") return segment;
  return "en";
}

export const locales: Locale[] = ["en", "ru", "pl"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  pl: "PL",
};

export function getLocalePath(locale: Locale, path: string = "/"): string {
  if (locale === "en") return path;
  return `/${locale}${path}`;
}

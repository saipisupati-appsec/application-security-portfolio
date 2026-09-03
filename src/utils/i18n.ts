// SPDX-License-Identifier: MIT

/**
 * Returns a locale-prefixed path including the Astro base path.
 * English (default) has no locale prefix; German gets /de prefix.
 */
export function localePath(path: string, locale: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const localized =
    locale === "de"
      ? clean === "/"
        ? "/de/"
        : `/de${clean}`
      : clean;

  return `${base}${localized}`;
}

/**
 * Returns the alternate locale URL path for the given path.
 */
export function getAlternatePath(
  currentPath: string,
): { path: string; locale: string } {
  if (currentPath.startsWith("/de/") || currentPath === "/de") {
    return {
      path: currentPath.replace(/^\/de/, "") || "/",
      locale: "en",
    };
  }

  return {
    path: currentPath === "/" ? "/de/" : `/de${currentPath}`,
    locale: "de",
  };
}
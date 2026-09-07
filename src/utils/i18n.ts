// SPDX-License-Identifier: MIT

/**
 * Returns a locale-prefixed path including the Astro base path.
 *
 * English (default):
 *   /application-security-portfolio/
 *
 * German:
 *   /application-security-portfolio/de/
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
 * Returns the alternate locale URL path.
 *
 * This function receives the pathname including Astro's base path
 * and preserves that base path when switching between English and German.
 */
export function getAlternatePath(
  currentPath: string,
): { path: string; locale: string } {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  // Remove the Astro base path first.
  let path = currentPath;

  if (path === base) {
    path = "/";
  } else if (path.startsWith(`${base}/`)) {
    path = path.slice(base.length);
  }

  // German -> English.
  // Remove /de from any German route, including project pages.
  if (path === "/de" || path === "/de/" || path.startsWith("/de/")) {
    const englishPath = path.replace(/^\/de/, "") || "/";

    return {
      path: `${base}${englishPath}`,
      locale: "en",
    };
  }

  // English -> German.
  return {
    path: path === "/" ? `${base}/de/` : `${base}/de${path}`,
    locale: "de",
  };
}

export type Language = "en" | "cs";

export const fallbackLng: Language = "en";
export const languages: Language[] = [fallbackLng, "cs"];
export const cookieName = "i18next";
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

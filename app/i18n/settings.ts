export type Language = "en" | "cs";

export const fallbackLng: Language = "cs";
export const languages: Language[] = [fallbackLng, "en"];
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

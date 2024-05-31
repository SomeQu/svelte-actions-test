export interface IText {
  [key: string]: { [language in languageType]: string };
}
export type languageType = "EN" | "RU";

export type contextType = "tooltip" | "scroll";

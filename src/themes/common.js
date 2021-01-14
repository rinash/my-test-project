import { LIGHT, DARK, CUSTOM } from "./index";
import THEMES from "./names";

export const getTheme = themeName => {
  switch (themeName) {
    case THEMES.LIGHT:
      return LIGHT;
    case THEMES.DARK:
      return DARK;
    default:
      return CUSTOM;
  }
};

export function getThemeName(code) {
  switch (code) {
    case THEMES.LIGHT:
      return "Light";
    case THEMES.DARK:
      return "Light";
    case THEMES.CUSTOM:
      return "Custom";
    default:
      return "Unknown";
  }
}

import { provide, ref } from "vue";
import { THEMES, THEME } from "../constants";

const THEME_ITEM = "theme";

export function useTheme() {
	let currentTheme = ref(THEMES.LIGHT);

	const defineTheme = (theme: string) => {
		const root = document.documentElement;

		root.style.setProperty("--primary-color", THEME[theme].primaryColor);
		root.style.setProperty("--secondary-color", THEME[theme].secondaryColor);
		root.style.setProperty("--background-color", THEME[theme].backgroundColor);
		root.style.setProperty("--font-color", THEME[theme].fontColor);
		root.style.setProperty("--contrast-font-color", THEME[theme].contrastFontColor);
		root.style.setProperty("--transparent-font-color", THEME[theme].transparentFontColor);
		root.style.setProperty("--scroll-color", THEME[theme].scrollColor);
	};

	const toggleTheme = () => {
		const theme = localStorage.getItem(THEME_ITEM);
		const newTheme = theme == THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
		localStorage.setItem(THEME_ITEM, newTheme);
		currentTheme.value = newTheme;
		defineTheme(newTheme);
	};

	(() => {
		let theme = localStorage.getItem(THEME_ITEM);
		if (theme == null) {
			const isDark = window.matchMedia("(prefers-color-scheme: dark)");
			theme = isDark.matches ? THEMES.DARK : THEMES.LIGHT;
			localStorage.setItem(THEME_ITEM, theme);
		}
		currentTheme.value = theme;
		defineTheme(theme);
	})();

	provide("theme/toggleTheme", toggleTheme);
	provide("theme/currentTheme", currentTheme);
}

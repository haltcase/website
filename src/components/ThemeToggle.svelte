<script lang="ts">
	import { type WithClasses, cx } from "@/lib/cx";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	let {
		class: className,
		classes = {},
		theme,
		...rest
	}: ThemeButtonProps = $props();

	type Theme = "dark" | "light";

	interface ThemeButtonProps extends WithClasses<"root", HTMLButtonAttributes> {
		theme: Snippet<[currentTheme: Theme]>;
	}

	let dataThemeValue =
		document.documentElement.attributes.getNamedItem("data-theme")?.value;

	let currentTheme: Theme = $state(
		dataThemeValue === "dark" ? ("dark" as const) : ("light" as const)
	);

	const toggleTheme = () => {
		let value =
			currentTheme === "dark" ? ("light" as const) : ("dark" as const);

		document.dispatchEvent(new CustomEvent("set-theme", { detail: value }));
		currentTheme = value;
	};
</script>

<button
	{...rest}
	class={cx(
		"ring-primary ring-offset-bg flex cursor-pointer flex-row items-center justify-center rounded-full ring-offset-4 outline-none focus-visible:ring-1",
		className,
		classes.root
	)}
	title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
	onclick={toggleTheme}
>
	{@render theme(currentTheme)}
</button>

<script lang="ts">
	import { cx, type WithClasses } from "@/lib/cx";
	import type { HTMLButtonAttributes, SVGAttributes } from "svelte/elements";
	import ThemeToggle from "./ThemeToggle.svelte";
	import { spin } from "./transitions/spin";

	interface ThemeButtonProps extends WithClasses<"root", HTMLButtonAttributes> {
		iconSize?: SVGAttributes<SVGSVGElement>["width"];
	}

	const { iconSize = "1.25rem", ...rest }: ThemeButtonProps = $props();
</script>

<ThemeToggle {...rest}>
	{#snippet theme(currentTheme)}
		<svg
			class={cx(
				"transition-all",
				currentTheme === "dark"
					? "drop-shadow-[0_0_0_var(--color-yellow-200)] hover:text-yellow-400 hover:drop-shadow-[0_0_6px_var(--color-yellow-200)]"
					: "drop-shadow-[0_0_0_var(--color-sky-600)] hover:text-sky-800 hover:drop-shadow-[0_0_6px_var(--color-sky-600)]"
			)}
			xmlns="http://www.w3.org/2000/svg"
			width={iconSize}
			height={iconSize}
			viewBox="0 0 24 24"
		>
			{#if currentTheme === "dark"}
				<!-- tabler:sun -->
				<path
					class="origin-center"
					transition:spin
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"
				/>
			{:else}
				<!-- tabler:moon-stars -->
				<path
					class="origin-center"
					transition:spin
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992zm5 1a2 2 0 0 0 2 2a2 2 0 0 0-2 2a2 2 0 0 0-2-2a2 2 0 0 0 2-2m2 7h2m-1-1v2"
				/>
			{/if}
		</svg>
	{/snippet}
</ThemeToggle>

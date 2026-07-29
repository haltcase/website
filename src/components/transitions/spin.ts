import { cubicOut } from "svelte/easing";
import type { EasingFunction, TransitionConfig } from "svelte/transition";

export interface SpinParameters {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	rotations?: number;
}

export const spin = (
	node: Element,
	{ delay = 0, duration = 300, easing = cubicOut, rotations = 1 }: SpinParameters = {}
): TransitionConfig => {
	const totalAngle = rotations * 360;
	const opacity = Number(getComputedStyle(node).opacity);

	return {
		delay,
		duration,
		easing,
		css: (timeFraction) => `
			opacity: ${timeFraction * opacity};
			transform: rotate(${timeFraction * totalAngle}deg);
		`
	};
};

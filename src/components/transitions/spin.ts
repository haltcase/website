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
	{
		delay = 0,
		duration = 300,
		easing = cubicOut,
		rotations = 1
	}: SpinParameters = {}
): TransitionConfig => {
	const totalAngle = rotations * 360;
	const o = Number(getComputedStyle(node).opacity);

	return {
		delay,
		duration,
		easing,
		css: (t) => `
			opacity: ${t * o};
			transform: rotate(${t * totalAngle}deg);
		`
	};
};

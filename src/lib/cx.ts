import type { ClassNameValue } from "tailwind-merge";
import { twMerge } from "tailwind-merge";

export type WithClasses<
	TNames extends string = string,
	TProps = unknown
> = TProps & {
	class?: string;
	classes?: Partial<Record<TNames, ClassNameValue>>;
};

export const cx = (
	...parameters: Parameters<typeof twMerge>
): ReturnType<typeof twMerge> => twMerge(...parameters);

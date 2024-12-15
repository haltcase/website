<script lang="ts">
	import type { MessageData, MessageList } from "@/data/skills";
	import { cx, type WithClasses } from "@/lib/cx";
	import { sleep } from "@/lib/sleep";
	import { onMount } from "svelte";

	interface MessageCycleProps
		extends WithClasses<"root" | "message" | "prefix" | "suffix" | "cursor"> {
		/** List of messages to cycle through */
		messages: MessageList;
		/** Number of milliseconds between messages. */
		interval?: number;
		/** Number of milliseconds between each typed character. */
		typingSpeed?: number;
		/** Number of milliseconds between each deleted character. */
		deleteSpeed?: number;
		/** Text typed before the message. */
		prefix?: string;
		/** Text typed after the message. */
		suffix?: string;
		/** Text prepended statically to the message. */
		staticPrefix?: string;
		/** Text appended statically to the message. */
		staticSuffix?: string;
		/** String of text to use as the cursor character. */
		cursor?: string;
	}

	const getMessage = (messageOrData: string | MessageData): string =>
		typeof messageOrData === "string" ? messageOrData : messageOrData.text;

	const getLinkTarget = (messageOrData: string | MessageData): string =>
		typeof messageOrData === "string" ? "#" : (messageOrData.href ?? "#");

	let {
		messages = [],
		interval = 2000,
		prefix = "",
		suffix = "",
		staticPrefix = "",
		staticSuffix = "",
		typingSpeed = 60,
		deleteSpeed = 30,
		cursor = "",
		class: className,
		classes = {}
	}: MessageCycleProps = $props();

	let text = $state(getMessage(messages[0]));
	let link = $state(getLinkTarget(messages[0]));
	let isDeleting = $state(false);
	let isPaused = $state(false);
	let speed = $state(typingSpeed);
	let loop = $state(0);

	let index = $derived(loop % messages.length);
	const linkTarget = $derived(getLinkTarget(messages[index]));
	const message = $derived(prefix + getMessage(messages[index]) + suffix);

	const handleTyping = async (): Promise<void> => {
		if (isPaused) {
			setTimeout(handleTyping, speed);
			return;
		}

		const delta = isDeleting ? -1 : 1;

		text = message.slice(0, Math.max(0, text.length + delta));
		link = linkTarget;
		speed = isDeleting ? deleteSpeed : typingSpeed;

		if (!isDeleting && text === message) {
			isDeleting = true;
			await sleep(interval);
		} else if (isDeleting && text === "") {
			isDeleting = false;
			loop += 1;
		}

		setTimeout(handleTyping, speed);
	};

	onMount(() => {
		const timer = setTimeout(handleTyping, speed);

		return () => {
			clearTimeout(timer);
		};
	});
</script>

<span
	class={cx("inline-flex items-center", className, classes.root)}
	role="none"
	onmouseenter={() => {
		isPaused = true;
	}}
	onmouseleave={() => {
		isPaused = false;
	}}
>
	<span class={cx("mr-[0.5ch]", classes.prefix)}>{staticPrefix}</span>

	{#if link === "#"}
		<span class={cx(classes.message)}>{text}</span>
	{:else}
		<a class={cx(classes.message)} href={link}>{text}</a>
	{/if}

	<span class={cx(classes.suffix)}>{staticSuffix}</span>
	<span class={cx(classes.cursor)}>{cursor}</span>
</span>

export interface MessageData {
	text: string;
	href?: string;
}

export type MessageList = (string | MessageData)[];

export const skills = [
	"programming",
	"web design",
	"JavaScript",
	{ text: "TypeScript", href: "https://www.typescriptlang.org/" },
	".NET apps",
	"C#",
	"F#",
	"PowerShell workflows",
	"command line interfaces",
	{ text: "React", href: "https://reactjs.org/" },
	"email campaigns",
	"process improvement",
	"automation"
] satisfies MessageList;

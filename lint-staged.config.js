export default {
	"*.{js,jsx,ts,tsx,mjs,cjs}": ["eslint --fix", "prettier --write"],
	"*": "prettier --ignore-unknown --write"
};

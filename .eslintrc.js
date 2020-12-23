const [off, , error] = [0, 1, 2]

module.exports = {
  root: true,
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended"
  ],
  parserOptions: {
    project: "./tsconfig.json"
  },
  rules: {
    quotes: [error, "double", {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    "@typescript-eslint/quotes": [error, "double", {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    "react/prop-types": [off],
    // disabled for now, see:
    // https://github.com/standard/eslint-config-standard-with-typescript/issues/450
    "@typescript-eslint/no-redeclare": off
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}

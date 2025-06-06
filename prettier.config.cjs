module.exports={
  bracketSpacing: false,
  bracketSameLine: true, // evita quebra antes do > em JSX
  arrowParens: "avoid",
  // printWidth: 120, // aumente conforme seu gosto
  endOfLine: "lf",
  semi: false, // <- ponto e vírgula no final
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  "tailwindFunctions": ["clsx"],
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
}

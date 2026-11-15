/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: [".next/**", "out/**"],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  reportUnscopedDisables: true,
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        // Tailwind 4 directives.
        ignoreAtRules: [
          "apply",
          "config",
          "custom-variant",
          "plugin",
          "reference",
          "source",
          "theme",
          "utility",
          "variant",
        ],
      },
    ],
    "function-no-unknown": [
      true,
      {
        // Tailwind 4's build-time helpers.
        ignoreFunctions: ["--alpha", "--spacing", "theme"],
      },
    ],
    // Tailwind class lists aren't CSS grammar.
    "at-rule-prelude-no-invalid": [true, { ignoreAtRules: ["apply"] }],
    "declaration-property-value-no-unknown": true,
    // Tailwind 4 resolves bare package imports such as @import 'tailwindcss'.
    "import-notation": "string",
    // Font stacks hold family names, whose case is part of the name.
    "value-keyword-case": ["lower", { ignoreProperties: [/^--font-/] }],
    "color-named": "never",
    "declaration-no-important": true,
    "font-weight-notation": "numeric",
    "max-nesting-depth": [2, { ignoreAtRules: ["layer", "variant", "media", "supports"] }],
    "no-unknown-custom-properties": true,
    "selector-max-compound-selectors": 3,
    "selector-max-id": 0,
    "selector-max-universal": 1,
    "selector-no-qualifying-type": true,
    "selector-max-specificity": "0,3,0",
  },
};

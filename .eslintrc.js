module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    semi: [1, "always"],
    "prefer-const": 2,
    "quote-props" : [2, "as-needed"],
    "no-console": 1,
    "no-debugger": 1,
    "no-unused-vars": 1,
    "no-duplicate-imports": 1,
    "object-curly-newline": [1, {
      ObjectExpression: "always",
      ObjectPattern: {
        multiline: true 
      },
      ImportDeclaration: "never",
      ExportDeclaration: {
        multiline: true,
        minProperties: 3 
      }
    }],
    "object-property-newline": 1,
    "react/jsx-first-prop-new-line": [1, 'multiline'],
    "react/jsx-max-props-per-line": [1, {
      maximum: 1 
    }],
    "react/jsx-closing-bracket-location": [1, 'tag-aligned'],
    indent: ["error", 2, {
      SwitchCase: 1 
    }],
    "max-len": [0, 160, 2],
    "require-jsdoc": [0],
    "space-before-function-paren": 0,
    "generator-star-spacing": 0,
    "jsx-quotes": [2, "prefer-double"],
    "no-invalid-this": "off",
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": ["error", "always"],
    "operator-linebreak": ["error", "before"],
    "padded-blocks": ["error", "never"],
    "react/destructuring-assignment": ["error", "always"],
    "react/no-unescaped-entities": [2, {
      forbid: [">", "\"", "}"] 
    }],
    "react/display-name": "off",
    "space-infix-ops": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: {
        delimiter: "comma" 
      },
      singleline: {
        delimiter: "comma" 
      } 
    }],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};

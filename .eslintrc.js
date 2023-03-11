module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'no-multiple-empty-lines': 0,
        'react/react-in-jsx-scope': 0,
        'template-curly-spacing': 0,
        'indent': 2,
        'react-hooks/exhaustive-deps': 0,
        'linebreak-style': 0,
      }
}

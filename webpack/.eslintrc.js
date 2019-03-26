module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
		  "import/no-unresolved": "off",
		  "import/newline-after-import": "off",
		  "import/no-extraneous-dependencies": "off",
		  "indent": ["error", 4, { "SwitchCase": 1, "VariableDeclarator": 1 }],
		  "func-names": "off",
		  "valid-jsdoc": ["error", { "preferType": { "Boolean": "boolean", "Number": "number", "object": "Object", "String": "string" }, "requireReturn": false }],
		  "vars-on-top": "off",
		  "global-require": "off",
		  "no-shadow": ["error", { "allow": ["err", "callback"] }],
		  "prefer-template": "off",
		  "no-console": "off",
		  "comma-dangle": ["error", "never"],
		  "new-cap": "off",
		  "max-len": "off"
    }
};
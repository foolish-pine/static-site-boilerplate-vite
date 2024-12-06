module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "keyframes-name-pattern": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
  },
  ignoreFiles: ["dist/**", "node_modules/**"],
};

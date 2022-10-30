module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app", "prettier"],
  overrides: [
    {
      "files": ["./graphql/operations/**/*.graphql"],
      "parserOptions": {
        "operations": "./graphql/operations/**/*.graphql",
        "schema": "./graphql/generated/schema.graphql"
      },
      "extends": "plugin:@graphql-eslint/operations-recommended"
    }
  ]
};

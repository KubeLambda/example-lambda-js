const { TrailingComma } = require('projen/lib/javascript')
const { javascript } = require('projen')

const project = new javascript.NodeProject({
  authorName: "Bohdan Frankovskyi",
  defaultReleaseBranch: "main",
  name: "example-lambda-js",
  description: 'KubeLambda JavaScript example lambda',
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 100,
      semi: false,
      singleQuote: true,
      trailingComma: TrailingComma.ALL,
    },
  },
});
project.synth();

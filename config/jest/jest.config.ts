/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import path from "path";

import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",

  globals: { __IS_DEV__: true },

  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",

  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>src"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],

  setupFilesAfterEnv: ["<rootDir>config/jest/jest-setup.ts"],
  moduleNameMapper: {
    "^entities/(.*)$": "<rootDir>/src/entities/$1",
    "\\.s?css$": "identity-obj-proxy",
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
  },

  rootDir: "../../",
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: "jest-circus/runner",

  // A map from regular expressions to paths to transformers
  // transform: undefined,

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\",
  //   "\\.pnp\\.[^\\\\]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};

export default config;

// import "@testing-library/jest-dom";
// import "@testing-library/jest-dom";
// import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";

const { TextEncoder, TextDecoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Simple smoke test for React 19 compatibility
// For comprehensive testing, run: npm run test:e2e

test("App component exists", () => {
  const App = require("./App").default;
  expect(typeof App).toBe("function");
});

test("App exports default", () => {
  const App = require("./App");
  expect(App).toBeDefined();
  expect(App.default).toBeDefined();
});

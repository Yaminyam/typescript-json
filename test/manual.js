const SuppressWarnings = require("suppress-warnings");
const runner = require("ts-node");

SuppressWarnings([() => true]);
runner.register({
    project: __dirname + "/../tsconfig.test.json",
    compiler: "ttypescript",
});

const program = require("./features/application/test_application_object_nullable.ts");
for (const value of Object.values(program))
    if (typeof value === "function") value();

module.exports = {
    coverageDirectory: "../coverage",
    coveragePathIgnorePatterns: ["<rootDir>/node_modules"],
    collectCoverageFrom: [
        "src/**/*.ts",
        "sdk/**/*.ts",
        "!**/*.{enum,module,schema,fixtures}.ts",
        "!**/main.ts",
        "!**/app.module.ts",
        "!**/health/*.ts",
        "!**/shared/*.ts",
        "!**/*.config.{cjs,js,ts}",
        "!**/*.d.ts",
        "!**/node_modules/**",
    ],
    moduleFileExtensions: ["ts", "js", "json"],
    moduleNameMapper: {
        "@src/(.*)": ["<rootDir>/src/$1"],
        "@sdk/(.*)": ["<rootDir>/src/sdk/$1"],
        "@test/(.*)": ["<rootDir>/test/$1"],
    },
    preset: "ts-jest",
    testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/build", "<rootDir>/dist", "<rootDir>/config"],
    testEnvironment: "node",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
};

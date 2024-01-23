import { findAgeByUsername, findUserByEyeColour } from "../../src";
// note: these are imported in one line (even though they are from 2 separate files) because I used a index.ts file in the core folder

const users = [
	{ username: "Kat", age: 33, eyeColour: "green" },
	{ username: "Tony", age: 42, eyeColour: "blue" },
	{ username: "Joe", age: 25, eyeColour: "brown" },
];

describe.skip("findUserByUsername", () => {
	test.only("returns user when username is found", () => {
		expect(findAgeByUsername("Kat", users)).toBe(33);
	});
	test("returns error message when username is not found", () => {
		expect(findAgeByUsername("Jack", users)).toBe("User not found");
	});
	test("returns error message when username is not formatted correctly", () => {
		expect(findAgeByUsername("KAT", users)).toBe("User not found");
	});
});

describe("findUserByEyecolour", () => {
	test("returns user when username is found", () => {
		expect(findUserByEyeColour("green", users)).toBe("Kat");
	});
	test("returns error message when username is not found", () => {
		expect(findUserByEyeColour("purple", users)).toBe("User not found");
	});
	test("returns error message when username is not formatted correctly", () => {
		expect(findUserByEyeColour("GREEN", users)).toBe("User not found");
	});
});

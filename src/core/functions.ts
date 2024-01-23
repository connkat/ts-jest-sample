import { User } from "./types";

const users = [{ username: "Kat", age: 33, eyeColour: "green" }];

export function findAgeByUsername(
	username: string,
	users: User[]
): number | string {
	let output = 0;
	for (const user of users) {
		if (user.username === username) {
			output = user.age;
			return output;
		} else return "User not found";
	}
	return output;
}

export function findUserByEyeColour(eyeColour: string, users: User[]): string {
	let output = "";
	for (const user of users) {
		if (user.eyeColour === eyeColour) {
			output = user.username;
			return output;
		} else return "User not found";
	}
	return output;
}

//this is using react-testing-library, even though this repo doesn't use it

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StopWatchButton from "../../components/StopWatchButton";

test("handleStartButton", () => {
	render(<StopWatchButton />);
	const startButton = screen.getByText(/Start/i);
	expect(startButton).toBeInTheDocument();
});

test("handleStartButton clicked", () => {
	const mockHandleStartButton = jest.fn();

	const { getByText } = render(<StopWatchButton />);

	const button = getByText("Start");

	fireEvent.click(button);

	expect(200).toBeInTheDocument();
});

//this code is for a different question/solution written in
// react but pushing up to this repo for consistency

import React, { useState } from "react";

type StopWatchButtonProps = {
	setTimeInSections?: (time: number) => void;
};

export default function StopWatchButton(props: StopWatchButtonProps) {
	const { setTimeInSections } = props;
	const [secondCount, setSecondCount] = useState<number>(0);

	const handleStartButton = (): void => {
		// let second: any = setInterval(()=> {
		// 	setTimeInSeconds((prev: number) => prev + 1);
		// }, 1000)
		// setSecondCount(second);
		setSecondCount(200);
	};

	return (
		<div>
			<button onClick={handleStartButton}>Start</button>
			<p>{secondCount}</p>
		</div>
	);
}

import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// react hooks CANNOT be called in conditionals (i.e. if/else blocks) --> put the conditional IN the hook body itself :)
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		console.log('call useEffect');
		if (value > 0) {
			document.title = `New messages(${value})`;
		}
	});

	console.log('render component');

	return (
		<>
			<h1>{value}</h1>
			<button className='btn' onClick={() => setValue(value + 1)}>
				click me
			</button>
		</>
	);
};

export default UseEffectBasics;

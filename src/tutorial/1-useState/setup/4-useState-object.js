import React, { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'peter',
		age: 24,
		message: 'hello world',
	});

	const changeMessage = () => {
		// setPerson({ name: person.name, age: person.age, message: 'goobye' });
		setPerson({ ...person, message: 'goobye' }); //! spread operator
	};

	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>
			<button className='btn' onClick={changeMessage}>
				change message
			</button>
		</>
	);
};

export default UseStateObject;

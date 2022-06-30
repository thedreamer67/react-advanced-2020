import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	const [people, setPeople] = React.useState(data);

	const removeItem = (id) => {
		setPeople((oldPeople) => {
			return oldPeople.filter((person) => {
				return person.id !== id;
			});
		});
	};

	return (
		<>
			{people.map((person) => {
				const { id, name } = person;

				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
						<button className='btn' onClick={() => removeItem(id)}>
							remove person
						</button>
					</div>
				);
			})}

			<button
				className='btn'
				onClick={() => {
					setPeople([]);
				}}
			>
				clear items
			</button>
		</>
	);
};

export default UseStateArray;

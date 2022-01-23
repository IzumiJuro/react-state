import React from 'react';
import './App.css';
import {atom, useAtom} from 'jotai';

const valueAtom = atom(0);

const Text = () => {
	const [value] = useAtom(valueAtom);

	return <div>{value}</div>;
};

const Button = () => {
	const [, setValue] = useAtom(valueAtom);

	const add = () => {
		setValue(p => p + 1);
	};

	const dec = () => {
		setValue(p => p - 1);
	};

	const reset = () => {
		setValue(0);
	};

	return (
		<div>
			<button onClick={add}>add</button>
			<button onClick={dec}>decline</button>
			<button onClick={reset}>reset</button>
		</div>
	);
};

const textAtom = atom('');
const uppercaseAtom = atom(get => get(textAtom).toUpperCase());
const Input = () => {
	const [, setText] = useAtom(textAtom);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setText(e.target.value);
	return <input type="text" onChange={handleChange} />;
};

const Uppercase = () => {
	const [uppercase] = useAtom(uppercaseAtom);
	return <div>Uppercase: {uppercase}</div>;
};

function App() {
	return (
		<>
			<div>
				<Text />
				<Button />
			</div>
			<div>
				<Input />
				<Uppercase />
			</div>
		</>
	);
}

export default App;

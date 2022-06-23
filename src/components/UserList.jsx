import { useState } from 'react';
import style from './UserList.module.css';
import UserRow from './UserRow';

const UserList = ({ users }) => {
	const [search, setSearch] = useState('');

	const usersRendered = filterAndRenderUsers(users, search);

	return (
		<div className={style.list}>
			<h1>Users List</h1>
			<input
				type='text'
				name='search'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			/>
			<button type='submit'>Search</button>
			{usersRendered}
		</div>
	);
};

const filterAndRenderUsers = (users, search) => {
	const normalizeSearch = search.toLocaleLowerCase();

	const filteredUsers = search
		? users.filter(user => user.name.toLowerCase().startsWith(normalizeSearch))
		: users;

	const userRender =
		filteredUsers.length > 0 ? (
			filteredUsers.map(user => <UserRow key={user.name} {...user} />)
		) : (
			<div className={style.noUsers}>No users to show</div>
		);

	return userRender;
};

export default UserList;

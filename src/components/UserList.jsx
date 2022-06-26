import { useState } from 'react';
import { UserContext } from '../lib/contexts/UserContext';
import style from './UserList.module.css';
import UsersListFilter from './UsersListFilter';
import UsersListRows from './UsersListRows';

const UserList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFilteredFunctions } = useFilters();

	const { users, toggleUserActive } = useUsers(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.list}>
			<h1>Users List</h1>
			<UsersListFilter
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFilteredFunctions}
			/>
			<UserContext.Provider value={{ toggleUserActive }}>
				<UsersListRows users={usersFiltered} />
			</UserContext.Provider>
		</div>
	);
};

// Custom hook to manage users
const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers);

	const toggleUserActive = userId => {
		const newUsers = [...users];

		const userIndex = newUsers.findIndex(user => user.id === userId);
		if (userIndex === -1) return;

		newUsers[userIndex].active = !newUsers[userIndex].active;

		setUsers(newUsers);
	};
	return {
		users,
		toggleUserActive
	};
};

// Custom hook to manage users filters
const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});

	const setSearch = search => {
		setFilters({ ...filters, search });
	};

	const setOnlyActive = onlyActive => {
		setFilters({ ...filters, onlyActive });
	};

	const setSortBy = sortBy => {
		setFilters({ ...filters, sortBy });
	};

	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	};
};

const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCaseSearch = search.toLocaleLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
	);
};
const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter(user => user.active);
};

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		default:
			return sortedUsers;
	}
};

export default UserList;

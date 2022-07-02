import { useState } from 'react';
import style from './UserList.module.css';
import UsersListFilter from './UsersListFilter';
import UsersListRows from './UsersListRows';

const UserList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFilteredFunctions } = useFilters();

	const { users } = useUsers(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.list}>
			<h1 className={style.title}>Users List</h1>
			<UsersListFilter
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFilteredFunctions}
			/>
			<UsersListRows users={usersFiltered} />
		</div>
	);
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
		if (onlyActive && filters.sortBy === 3) {
			setFilters({ ...filters, sortBy: 0, onlyActive });
		} else {
			setFilters({ ...filters, onlyActive });
		}
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

// Custom hook to manage users
const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers);

	return {
		users
	};
};

// Custom hook to manage users filter by name
const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCaseSearch = search.toLocaleLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().includes(lowerCaseSearch)
	);
};

// Custom hook to manage users filter by active
const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter(user => user.active);
};

// Custom hook to sort users
const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		case 2:
			return sortedUsers.sort((a, b) => {
				if (a.role === b.role) return 0;
				if (a.role === 'manager') return -1;
				if (a.role === 'user' && b.role === 'admin') return -1;
				return 1;
			});

		case 3:
			return sortedUsers.sort((a, b) => {
				if (a.active === b.active) return 0;
				if (a.active && !b.active) return -1;
				return 1;
			});
		default:
			return sortedUsers;
	}
};

export default UserList;

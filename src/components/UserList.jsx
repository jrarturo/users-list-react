import { useState } from 'react';
import { useFilters } from '../lib/hooks/useFilters';
import {
	filterActiveUsers,
	filterUsersByName,
	sortUsers
} from '../lib/users/filterUsers';
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

// Custom hook to manage users
const useUsers = initialUsers => {
	const [users, setUsers] = useState(initialUsers);

	return {
		users
	};
};

export default UserList;

import { paginateUsers, useFilters } from '../lib/hooks/useFilters';
import {
	filterActiveUsers,
	filterUsersByName,
	sortUsers
} from '../lib/users/filterUsers';
import style from './UserList.module.css';
import UserListPagination from './UserListPagination';
import UsersListFilter from './UsersListFilter';
import UsersListRows from './UsersListRows';

const UserList = ({ initialUsers }) => {
	const {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	} = useFilters();

	const { users, totalPages } = getUsers(initialUsers, filters);

	return (
		<div className={style.list}>
			<h1 className={style.title}>Users List</h1>
			<UsersListFilter
				search={filters.search}
				onlyActive={filters.onlyActive}
				sortBy={filters.sortBy}
				setSearch={setSearch}
				setOnlyActive={setOnlyActive}
				setSortBy={setSortBy}
			/>
			<UsersListRows users={users} />
			<UserListPagination
				page={filters.page}
				itemPerPage={filters.itemsPerPage}
				setPage={setPage}
				setItemsPerPage={setItemsPerPage}
				totalPages={totalPages}
			></UserListPagination>
		</div>
	);
};

const getUsers = (
	initialUsers,
	{ search, onlyActive, sortBy, page, itemsPerPage }
) => {
	let usersFiltered = filterActiveUsers(initialUsers, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	const totalPages = Math.ceil(usersFiltered.length / itemsPerPage);

	usersFiltered = paginateUsers(usersFiltered, page, itemsPerPage);

	return { users: usersFiltered, totalPages };
};

export default UserList;

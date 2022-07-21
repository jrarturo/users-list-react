import { useFilters } from '../lib/hooks/useFilters';
import { UseUsers } from '../lib/hooks/useUsers';
import style from './UserList.module.css';
import UserListPagination from './UserListPagination';
import UsersListFilter from './UsersListFilter';
import UsersListRows from './UsersListRows';

const UserList = () => {
	const {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	} = useFilters();

	const { users, totalPages, error, loading } = UseUsers(filters);

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
			<UsersListRows users={users} error={error} loading={loading} />
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

export default UserList;

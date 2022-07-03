import PageSelector from './forms/PageSelector';
import Select from './forms/Select';
import style from './UserListPagination.module.css';

const UserListPagination = ({
	page,
	itemsPerPage,
	setPage,
	setItemsPerPage,
	totalPages
}) => (
	<div className={style.wrapper}>
		<div className={style.itemsPerPage}>
			<Select
				value={itemsPerPage}
				onChange={ev => setItemsPerPage(Number(ev.target.value))}
			>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
			</Select>
			<p>Items per Page</p>
		</div>
		<PageSelector page={page} totalPages={totalPages} setPage={setPage} />
	</div>
);

export default UserListPagination;

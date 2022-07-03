import { SORT_OPTIONS } from '../constants/sortOptions';
import InputCheckbox from './forms/InputCheckbox';
import InputSearch from './forms/InputSearch';
import Select from './forms/Select';
import style from './UsersListFilter.module.css';

export const UsersListFilter = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy
}) => (
	<div className={style.form}>
		<div className={style.row}>
			<InputSearch
				placeholder='search...'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			/>
			<Select
				name=''
				id=''
				value={sortBy}
				onChange={ev => setSortBy(Number(ev.target.value))}
			>
				<option value={SORT_OPTIONS.DEFAULT}>By Default</option>
				<option value={SORT_OPTIONS.NAME}>By Name</option>
				<option value={SORT_OPTIONS.ROLE}>By Role</option>
				{!onlyActive && <option value={SORT_OPTIONS.ACTIVE}>By Active</option>}
			</Select>
		</div>
		<div className={style.row}>
			<div className={style.active}>
				<InputCheckbox
					className={style.checkbox}
					checked={onlyActive}
					onChange={ev => setOnlyActive(ev.target.checked)}
				/>
				<p>Show Only Actives</p>
			</div>
		</div>
	</div>
);

export default UsersListFilter;

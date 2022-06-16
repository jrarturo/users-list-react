import style from './UserList.module.css';
import UserRow from './UserRow';

const UserList = ({ users, children }) => {
	console.log('    - UserList render');

	const userRender =
		users.length > 0 ? (
			users.map(user => <UserRow key={user.name} {...user} />)
		) : (
			<div className={style.noUsers}>No users to show</div>
		);

	return (
		<div className={style.list}>
			{children}
			{userRender}
		</div>
	);
};

export default UserList;

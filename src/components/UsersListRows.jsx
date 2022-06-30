import UserRow from './UserRow';
import style from './UsersListRows.module.css';

const UsersListRows = ({ users }) => {
	if (!users.length) return <p className={style.noUsers}>No users found</p>;
	return users.map(user => <UserRow key={user.username} {...user} />);
};

export default UsersListRows;

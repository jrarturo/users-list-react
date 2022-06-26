import UserRow from './UserRow';
import style from './UsersListRows.module.css';

const UsersListRows = ({ users }) => {
	if (!users.length) return <p className={style.noUsers}>No users found</p>;
	return users.map(user => <UserRow key={user.id} {...user} />);
};

export default UsersListRows;

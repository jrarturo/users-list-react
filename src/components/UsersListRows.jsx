import UserRow from './UserRow';
import style from './UsersListRows.module.css';

const UsersListRows = ({ users }) => {
	if (users.length <= 0) return <p className={style.noUsers}>No users found</p>;
	return users.map(user => <UserRow key={user.name} {...user} />);
};

export default UsersListRows;

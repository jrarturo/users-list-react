import UserRow from './UserRow';
import style from './UsersListRows.module.css';

const UsersListRows = ({ users, error, loading }) => {
	if (loading) return <p>loading...</p>;
	if (error) return <p className={style.noUsers}>Has been an error loading</p>;
	if (!users.length) return <p className={style.noUsers}>No users found</p>;

	return users.map(user => <UserRow key={user.id} {...user} />);
};

export default UsersListRows;

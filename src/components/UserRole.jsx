import style from './UserRole.module.css';

const ROLE_STYLE = {
	admin: ['Admin', style.admin],
	user: ['User', style.users],
	other: ['Manager', style.other]
};
const UserRole = ({ role }) => {
	const [roleName, roleClassname] = ROLE_STYLE[role] || ROLE_STYLE.other;

	return <span className={`${style.role} ${roleClassname}`}> {roleName} </span>;
};

export default UserRole;

import { USER_ROLES } from '../constants/userRoles';
import style from './UserRole.module.css';

const ROLE_STYLE = {
	[USER_ROLES.ADMIN]: ['Admin', style.admin],
	[USER_ROLES.USER]: ['User', style.users],
	[USER_ROLES.MANAGER]: ['Manager', style.other]
};
const UserRole = ({ role }) => {
	const [roleName, roleClassname] = ROLE_STYLE[role] || ROLE_STYLE.other;

	return <span className={`${style.role} ${roleClassname}`}> {roleName} </span>;
};

export default UserRole;

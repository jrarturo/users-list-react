import CheckCircleIcon from './icons/CheckCircleIcon';
import CrossCircleIcon from './icons/CrossCircleIcon';
import style from './UserStatus.module.css';

const UserStatus = ({ active }) => {
	const activeClassName = active ? style.active : style.inactive;

	const Icon = active ? CheckCircleIcon : CrossCircleIcon;

	return (
		<div className={activeClassName}>
			<Icon className={style.icon} />
			<span>{active ? 'Active' : 'Inactive'}</span>
		</div>
	);
};

export default UserStatus;

import { useState } from 'react';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ name, active, role, ...props }) => {
	const [activeState, setActiveState] = useState(active);

	const activateState = () => {
		setActiveState(!activeState);
	};

	return (
		<div className={style.user} {...props}>
			<div className={style.name}>
				<span> {name} </span>
			</div>
			<div className={style.status}>
				<UserStatus active={activeState} />
			</div>
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}>
				<button onClick={activateState}>
					{activeState ? 'Desactivate' : 'Activate'}
				</button>
			</div>
		</div>
	);
};

export default UserRow;

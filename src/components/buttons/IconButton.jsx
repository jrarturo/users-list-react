import style from './IconButton.module.css';

const CLASSNAMES = {
	black: {
		normal: style.black,
		filled: style.blackFilled
	},
	red: {
		normal: style.red,
		filled: style.redFilled
	}
};

const IconButton = ({
	kind = 'black',
	filled,
	icon: Icon,
	className,
	...props
}) => {
	const classNames = [CLASSNAMES[kind][filled ? 'filled' : 'normal']];

	return (
		<button {...props} className={`${style.button} ${classNames} ${className}`}>
			<Icon className={style.icon} />
		</button>
	);
};

export default IconButton;

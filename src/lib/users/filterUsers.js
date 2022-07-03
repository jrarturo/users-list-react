import { SORT_OPTIONS } from '../../constants/sortOptions';
import { USER_ROLES } from '../../constants/userRoles';

// Custom hook to manage users filter by name
export const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCaseSearch = search.toLocaleLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().includes(lowerCaseSearch)
	);
};

// Custom hook to manage users filter by active
export const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter(user => user.active);
};

// Custom hook to sort users
export const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case SORT_OPTIONS.NAME:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return SORT_OPTIONS.DEFAULT;
			});
		case SORT_OPTIONS.ROLE:
			return sortedUsers.sort((a, b) => {
				if (a.role === b.role) return 0;
				if (a.role === USER_ROLES.MANAGER) return -1;
				if (a.role === USER_ROLES.USER && b.role === USER_ROLES.ADMIN)
					return -1;
				return 1;
			});

		case SORT_OPTIONS.ACTIVE:
			return sortedUsers.sort((a, b) => {
				if (a.active === b.active) return 0;
				if (a.active && !b.active) return -1;
				return 1;
			});
		default:
			return sortedUsers;
	}
};

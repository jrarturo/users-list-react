import UserList from './components/UserList';

const USERS = [
	{ id: 0, name: 'John Doe Fee', active: true, role: 'admin' },
	{ id: 1, name: 'Peter Grey Master', active: false, role: 'user' },
	{ id: 2, name: 'Mary Poppings T.', active: true, role: 'user' },
	{ id: 3, name: 'Jane Grey Foo', active: false, role: 'admin' },
	{ id: 4, name: 'Jack Black Doe', active: true, role: 'user' },
	{ id: 5, name: 'Jill Tatareto', active: false, role: 'user' },
	{ id: 6, name: 'Joe Gunanoe', active: true, role: 'addsdmin' }
];

const App = () => <UserList initialUsers={USERS} />;

export default App;

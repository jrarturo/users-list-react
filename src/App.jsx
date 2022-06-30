import UserList from './components/UserList';

const USERS = [
	{ username: 'jonh', name: 'John Doe Fee', active: true, role: 'admin' },
	{ username: 'peter', name: 'Peter Grey Master', active: false, role: 'user' },
	{ username: 'mary', name: 'Mary Poppings T.', active: true, role: 'user' },
	{ username: 'jane', name: 'Jane Grey Foo', active: false, role: 'admin' },
	{ username: 'jack', name: 'Jack Black Doe', active: true, role: 'user' },
	{ username: 'jill', name: 'Jill Tatareto', active: false, role: 'user' },
	{ username: 'joe', name: 'Joe Gunanoe', active: true, role: 'addsdmin' }
];

const App = () => <UserList initialUsers={USERS} />;

export default App;

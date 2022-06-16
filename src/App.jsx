import UserList from './components/UserList';

const USERS = [
	{ name: 'John Doe Fee', active: true, role: 'admin' },
	{ name: 'Peter Grey Master', active: false, role: 'user' },
	{ name: 'Mary Poppings T.', active: true, role: 'user' }
	// { name: 'Jane Grey Foo', active: false, role: 'admin' },
	// { name: 'Jack Black Doe', active: true, role: 'user' },
	// { name: 'Jill Tatareto', active: false, role: 'user' },
	// { name: 'Joe Gunanoe', active: true, role: 'addsdmin' }
];

const App = () => (
	<UserList users={USERS}>
		<h1>Users List</h1>
	</UserList>
);

export default App;

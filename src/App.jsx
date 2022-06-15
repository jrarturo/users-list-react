import Title from './components/Title';
import UserList from './components/UserList';

const USERS = [
	{ name: 'John', active: true, role: 'admin' },
	{ name: 'Peter', active: false, role: 'user' },
	{ name: 'Mary', active: true, role: 'user' },
	{ name: 'Jane', active: false, role: 'admin' },
	{ name: 'Jack', active: true, role: 'user' },
	{ name: 'Jill', active: false, role: 'user' },
	{ name: 'Joe', active: true, role: 'addsdmin' }
];

const App = () => (
	<>
		<Title>User List</Title>
		<UserList users={USERS} />
	</>
);

export default App;

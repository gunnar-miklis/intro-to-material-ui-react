import { useEffect, useState } from 'react';
import DataTable from '../common/DataTable/DataTable';

const columns = [
	{ field: 'id', headerName: 'UserId', width: 150 },
	{ field: 'name', headerName: 'Name', width: 150 },
	{ field: 'username', headerName: 'Username', width: 150 },
	{ field: 'email', headerName: 'E-Mail', width: 150 },
];

export default function UserTable() {
	const [ users, setUsers ] = useState( [] );

	useEffect( ()=> {
		fetch( 'https://jsonplaceholder.typicode.com/users' )
			.then( ( response ) => response.json() )
			.then( ( json ) => setUsers( json ) );
	}, [] );
	return (
		<DataTable
			rows={users}
			columns={columns}
			loading={!users.length}
		/>
	);
}

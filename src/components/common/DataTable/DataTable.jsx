import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';


export default function DataTable( { rows, columns, loading, sx } ) {
	const [ pageSize, setPageSize ] = useState( 2 );

	return (
		<>
			<DataGrid
				rows={rows}
				columns={columns}
				loading={loading}
				sx={sx}
				checkboxSelection
				paginationModel={{ page: 0, pageSize: pageSize }}
				onPaginationModelChange={( ( change ) => setPageSize( change.pageSize ) )}
				pageSizeOptions={[ 2, 5, 10 ]}
			/>
		</>
	);
}

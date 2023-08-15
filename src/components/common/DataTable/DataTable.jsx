import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';


export default function DataTable( { rows, columns, loading, sx } ) {
	const [ state, setState ] = useState( {
		page: 0,
		pageSize: 2,
	} );

	return (
		<>
			<DataGrid
				rows={rows}
				columns={columns}
				loading={loading}
				sx={sx}
				checkboxSelection
				paginationModel={{ page: state.page, pageSize: state.pageSize }}
				onPaginationModelChange={( ( { page, pageSize } ) => setState( { page, pageSize } ) ) }
				pageSizeOptions={[ 2, 5, 10 ]}
			/>
		</>
	);
}

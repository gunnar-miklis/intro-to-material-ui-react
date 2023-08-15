import { DataGrid } from '@mui/x-data-grid';


export default function DataTable( { rows, columns, loading } ) {
	return (
		<>
			<DataGrid
				rows={rows}
				columns={columns}
				loading={loading}
			/>
		</>
	);
}

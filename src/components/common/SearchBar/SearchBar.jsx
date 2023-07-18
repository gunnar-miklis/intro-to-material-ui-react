import SearchIcon from '@mui/icons-material/Search';
import { Box, Input } from '@mui/material';
import { searchBarStyles } from './styles';

export default function SearchBar( { placeholder, onChange } ) {
	return (
		<Box sx={ searchBarStyles.wrapper }>
			<SearchIcon sx={ searchBarStyles.icon }/>
			<Input
				placeholder={placeholder}
				onChange={onChange}
				sx={ searchBarStyles.input }
				disableUnderline
			/>
		</Box>
	);
}

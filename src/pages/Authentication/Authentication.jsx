import { Box, IconButton, Typography } from '@mui/material';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import CommonButton from './../../components/common/CommonButton/CommonButton';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import { cardContentStyles, cardHeaderStyles } from './styles';


export default function Authentication() {
	function getHeader() {
		function handleChange( value ) {
			console.log( value );
		}
		function addUser() {
			console.log( 'click' );
		}
		return (
			<Box sx={cardHeaderStyles.wrapper}>
				<SearchBar
					placeholder="Search by email address, phone number, or user UID"
					onChange={ ( event ) => handleChange( event.target.value ) }
				/>
				<Box sx={cardHeaderStyles.buttonsWrapper}>
					<CommonButton
						variant='contained'
						onClick={addUser}
						size='large'
						sx={cardHeaderStyles.addUserButton}
					>Add user
					</CommonButton>
					<IconButton>
						<RefreshIcon />
					</IconButton>
				</Box>
			</Box>
		);
	}
	function getContent() {
		return (
			<Typography
				align='center'
				sx={cardContentStyles.typo}>No users for this project yet</Typography>
		);
	}

	return (
		<>
			<GridWrapper>
				<BasicCard header={getHeader()} content={getContent()}/>
			</GridWrapper>
		</>
	);
}

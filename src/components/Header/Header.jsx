import CommonButton from '../common/CommonButton/CommonButton';
import NotificationBell from '../common/NotificationBell/NotificationBell';
import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { headerStyles } from './styles';

export default function Header( { title } ) {
	return (
		<Box sx={headerStyles.wrapper}>
			<Box sx={headerStyles.topRow}>
				<Typography sx={headerStyles.link}>Go to docs</Typography>
				<NotificationBell iconColor='white'/>
				<Avatar src='https://mui.com/static/images/avatar/1.jpg'/>
			</Box>
			<Box sx={headerStyles.middleRow}>
				<Typography variant='h1' color='white'>{title}</Typography>
				<Box>
					<CommonButton sx={headerStyles.webButton} variant='outlined'>Web setup</CommonButton>
					<Tooltip title='Help'>
						<IconButton sx={headerStyles.helpIcon} color='white'>
							<HelpIcon/>
						</IconButton>
					</Tooltip>
				</Box>
			</Box>
		</Box>
	);
}

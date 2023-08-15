import PeopleIcon from '@mui/icons-material/People';
import DnsIcon from '@mui/icons-material/Dns';
import EthernetIcon from '@mui/icons-material/SettingsEthernet';
import InputIcon from '@mui/icons-material/SettingsInputComponent';

export const mainNavbarItems = [
	{
		id: 0,
		icon: <PeopleIcon/>,
		label: 'Form Input, Validation and Searchbar',
		route: 'form-input-validation-and-searchbar',
	},
	{
		id: 1,
		icon: <DnsIcon/>,
		label: 'Dynamic Data Table',
		route: 'dynamic-data-table',
	},
	{
		id: 2,
		icon: <InputIcon/>,
		label: 'Progress Stepper',
		route: 'progress-stepper',
	},
	{
		id: 3,
		icon: <EthernetIcon/>,
		label: 'Skeleton and Snackbar',
		route: 'skeleton-and-snackbar',
	}
];

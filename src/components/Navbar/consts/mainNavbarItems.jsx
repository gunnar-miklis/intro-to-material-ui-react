import PeopleIcon from '@mui/icons-material/People';
import DnsIcon from '@mui/icons-material/Dns';
import ImageIcon from '@mui/icons-material/Image';
import EthernetIcon from '@mui/icons-material/SettingsEthernet';
import InputIcon from '@mui/icons-material/SettingsInputComponent';
import PublicIcon from '@mui/icons-material/Public';

export const mainNavbarItems = [
	{
		id: 0,
		icon: <PeopleIcon/>,
		label: 'Authentication',
		route: 'authentication',
	},
	{
		id: 1,
		icon: <DnsIcon/>,
		label: 'Database',
		route: 'database',
	},
	{
		id: 2,
		icon: <ImageIcon/>,
		label: 'Storage',
		route: 'storage',
	},
	{
		id: 3,
		icon: <PublicIcon/>,
		label: 'Hosting',
		route: 'hosting',
	},
	{
		id: 4,
		icon: <EthernetIcon/>,
		label: 'Functions',
		route: 'functions',
	},
	{
		id: 5,
		icon: <InputIcon/>,
		label: 'Machine Learning',
		route: 'machine-learning',
	},
];

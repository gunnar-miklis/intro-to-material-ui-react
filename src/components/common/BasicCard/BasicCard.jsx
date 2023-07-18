import { Card, CardContent } from '@mui/material';

export default function BasicCard( { header, content } ) {
	return (
		<Card sx={{ borderRadius: '8px' }}>
			{header}
			<CardContent>
				{content}
			</CardContent>
		</Card>
	);
}

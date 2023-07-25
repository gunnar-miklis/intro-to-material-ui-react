import { Skeleton } from '@mui/material';

export default function Loading( { children, width, height, variant } ) {
	return (
		<Skeleton
			width={width}
			height={height}
			variant={variant}
			animation='wave'
		>
			{children}
		</Skeleton>
	);
}

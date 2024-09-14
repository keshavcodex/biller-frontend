import Button from '@mui/material/Button';
import HighlightOff from '@mui/icons-material/HighlightOff';

export default function InputFileUpload(props: any) {
	const { onClick, sx } = props;
	return (
		<Button
			component='label'
			role={undefined}
			variant='contained'
			tabIndex={-1}
			startIcon={<HighlightOff />}
			color='error'
			sx={{ ...sx }}
			onClick={onClick}
		>
			cancle
		</Button>
	);
}

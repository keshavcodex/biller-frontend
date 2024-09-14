import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function InputFileUpload(props: any) {
	const { color, bgcolor, onClick, sx } = props;
	return (
		<Button
			component='label'
			role={undefined}
			variant='contained'
			tabIndex={-1}
			startIcon={<CloudUploadIcon />}
			onClick={onClick}
			sx={{
				color, // Set text color
				bgcolor,
				...sx
			}}
		>
			Upload files
		</Button>
	);
}

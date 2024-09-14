import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1
});

export default function InputFileUpload(props: any) {
	const { onChange } = props;
	return (
		<Button
			component='label'
			role={undefined}
			variant='contained'
			tabIndex={-1}
			startIcon={<AttachFileIcon />}
			color='success'
		>
			Select files
			<VisuallyHiddenInput type='file' onChange={onChange} multiple />
		</Button>
	);
}

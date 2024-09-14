import Navbar from './Navbar';
import UploadButton from './button/UploadButton';
import CancleButton from './button/CancleButton';
import SelectButton from './button/SelectButton';
import { Box, Typography } from '@mui/material';
import {
	addAllConsumers,
	checkServer,
	fetchExcel,
	getConsumers
} from './services/apiServices';
import { useEffect, useState } from 'react';
import ExcelTable from './ExcelTable';
import CircularProgress from '@mui/material/CircularProgress';
import ConsumerTable from './ConsumerTable';

function Home() {
	const [serverUp, setServerUp] = useState(false);
	const [file, setFile] = useState<any>(null);
	const [fileName, setFileName] = useState<string | null>(null);
	const [excelData, setExcelData] = useState<any>(null);
	const [isFetching, setIsFetching] = useState(false);
	const [isUploading, setIsUploading] = useState(false);
	const [uploadResponse, setUploadResponse] = useState('');
	const [consumerList, setConsumerList] = useState([]);

	useEffect(() => {
		serverStatus();
	}, []);

	const serverStatus = async () => {
		try {
			const response = await checkServer();
			if (response.length > 0) setServerUp(true);
		} catch (error) {
			console.log(error);
		}
	};

	const search = async (text: string) => {
		setUploadResponse('');
		if (text.trim().length === 0) {
			setConsumerList([]);
			return;
		}
		try {
			const response = await getConsumers(text);
			setConsumerList(response);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const handleFileSelect = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setIsFetching(true);
		setUploadResponse('');
		const files = event.target.files;
		if (files && files.length > 0) {
			const selectedFile = files[0];
			console.log('Selected file:', selectedFile.name);
			setFileName(selectedFile.name);
			setFile(selectedFile);
			try {
				const excelFile = new FormData();
				excelFile.append('file', selectedFile);
				const response = await fetchExcel(excelFile);
				setExcelData(response);
				setIsFetching(false);
			} catch (error) {
				setIsFetching(false);
				console.log(error);
			}
		}
	};

	const cancleFileSelect = () => {
		setFileName(null);
		setFile(null);
		setExcelData(null);
		setIsFetching(false);
		setIsUploading(false);
	};
	const handleFileUpload = async () => {
		try {
			setIsUploading(true);
			const response = await addAllConsumers(excelData);
			setUploadResponse(JSON.stringify(response));
			console.log(response);
			setFileName(null);
			setFile(null);
			setExcelData(null);
			setIsFetching(false);
			setIsUploading(false);
		} catch (error) {
			setIsUploading(false);
			console.log(error);
		}
	};

	return (
		<div>
			<Navbar searchValue={search}>
				{serverUp ? 'Biller App' : 'Server Loading'}
			</Navbar>
			{fileName && (
				<Box
					sx={{
						color: '#fff',
						display: 'flex',
						justifyContent: 'center',
						p: 2
					}}
				>
					<Typography
						sx={{
							fontSize: 24
						}}
					>
						{fileName}
					</Typography>
				</Box>
			)}
			{isUploading && 'uploading'}
			<Box sx={{ m: 2 }}>
				{file ? (
					<Box>
						<CancleButton
							sx={{ m: 1 }}
							onClick={cancleFileSelect}
						></CancleButton>

						{isUploading ? (
							<CircularProgress sx={{ m: 1 }} />
						) : (
							<UploadButton
								sx={{ m: 1 }}
								onClick={handleFileUpload}
							></UploadButton>
						)}
					</Box>
				) : isFetching ? (
					<CircularProgress />
				) : (
					<SelectButton onChange={handleFileSelect}></SelectButton>
				)}
			</Box>
			{uploadResponse.length > 0 && (
				<Typography sx={{ color: '#fff' }}>{uploadResponse}</Typography>
			)}
			{excelData ? (
				<ExcelTable>{excelData}</ExcelTable>
			) : (
				consumerList.length > 0 && <ConsumerTable>{consumerList}</ConsumerTable>
			)}
		</div>
	);
}

export default Home;

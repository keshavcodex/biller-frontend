import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: '#161616',
		color: '#fff'
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14
	}
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0
	}
}));

export default function ConsumerTable({ children }: any) {
	const data = children;
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 700 }} aria-label='customized table'>
				<TableHead>
					<TableRow>
						<StyledTableCell align='left'>Consumer Id</StyledTableCell>
						<StyledTableCell align='left'>Name</StyledTableCell>
						<StyledTableCell align='center'>Book</StyledTableCell>
						<StyledTableCell align='center'>Category</StyledTableCell>
						<StyledTableCell align='center'>Reading</StyledTableCell>
						<StyledTableCell align='center'>Status</StyledTableCell>
						<StyledTableCell align='center'>Bill month</StyledTableCell>

					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row: any, index) => (
						<StyledTableRow key={index}>
							<StyledTableCell component='th' scope='row'>
								{row.conId}
							</StyledTableCell>
							<StyledTableCell align='left'>{row.name}</StyledTableCell>
							<StyledTableCell align='center'>{row.book}</StyledTableCell>
							<StyledTableCell align='center'>{row.category}</StyledTableCell>
							<StyledTableCell align='center'>{row.bill}</StyledTableCell>
							<StyledTableCell align='center'>{row.LK}</StyledTableCell>
							<StyledTableCell align='center'>{row.billMonth}</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

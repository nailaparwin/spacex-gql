import React from 'react';
import { LanuchesQuery } from '../../generated/graphql';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


interface Props{
    data: LanuchesQuery;
}


interface Column {
    id: 'mission_name' | 'launch_year' | 'launch_success' | 'details';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }
  
  const columns: Column[] = [
    { id: 'mission_name', label: 'mission_name', minWidth: 170 },
    { id: 'launch_year', label: 'launch_year', minWidth: 100 },
    {
      id: 'launch_success',
      label: 'launch_success',
      minWidth: 170,
      align: 'right',
      //format: (value: number) => value.toLocaleString('en-US'),
    },
    {
      id: 'details',
      label: 'details',
      minWidth: 170,
      align: 'right',
      //format: (value: number) => value.toLocaleString('en-US'),
    },
  ];
  
  

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
    table: {
      minWidth: 340,
    },
    tableCell: {
      paddingRight: 4,
      paddingLeft: 5
    },
  });


const Launch: React.FC<Props> = ({data}) => {
    console.log('data', data);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };




  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label=" All Space X Launches ">
          <TableHead>
            <TableRow>
            
                
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.tableCell}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {!!data.launches && 
          data.launches.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((launch, i) =>  {
              return !!launch && (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                  {columns.map((column) => {
                    const value = launch[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} className={classes.tableCell}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count= {data.launches ? data.launches.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
   
}
export default Launch;


/* {!!data.launches && data.launches.map(
    (launch, i) => !!launch && (
        <li key={i} className='LaunchesItem'>
            {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)})
        </li>
    )


 */


  


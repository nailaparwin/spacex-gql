import React from 'react';
import { makeStyles, createStyles, Theme  } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { RocketsQuery } from '../../generated/graphql';
import TablePagination from '@material-ui/core/TablePagination';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { deepPurple } from '@material-ui/core/colors';
//import { useNavigate } from 'react-router';
import './style.css';

const useRowStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
      backgroundColor: '#B0DFE5',
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: '#4C516D',
  },
 
}));

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

interface Props{
  data: RocketsQuery;
}


function createData(
    company: string,
    cost_per_launch: string,
    country: string,
    description: string,
    first_flight: string,
    id: string,
  diameter : {
    feet: string,
    meters: string,
  },
  engines: {
    number: string,
    type: string,
    version: string,
  }
) {
  return {
    company,
    cost_per_launch,
    country,
    description,
    first_flight,
    id,
    diameter,
    engines,    
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  //const navigate = useNavigate();
  
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right">
        <Avatar className={classes.large}> Rocket </Avatar>
          {/* {row.details} */}
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {row.company}
        </TableCell>
        <TableCell align="right">{row.description}</TableCell>
        <TableCell align="right">{row.country} </TableCell>
        
        
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Cost per Launch</TableCell>
                    <TableCell>Engine</TableCell>
                    <TableCell align="right">Diameter</TableCell>
                    <TableCell align="right">First Flight</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                    <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                    {row.cost_per_launch}
                      </TableCell>
                      <TableCell>{row.engines.type}({row.engines.number})</TableCell>
                      <TableCell align="right">{row.diameter.meters} meters</TableCell>
                      <TableCell align="right">{row.first_flight} </TableCell>
                      
                    </TableRow>
                  
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



const Rocket: React.FC<Props> = ({data}) => {
  const rows = data.rockets;
  
  //let rows = data.rockets!.slice()
  //rows?.splice(0,11)

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
<Grid container justify={"center"}>
    <Grid item xs={12} md={10} style={{ padding: "4px" }}>
          <Paper style={{ overflowX: "auto" }}>
          <Box fontSize={48}>
          Rockets
          </Box>
        
        </Paper>
        </Grid>
        <Grid item xs={12} md={10} style={{ padding: "4px" }}>
    <Paper className={classes.root}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead >
          <TableRow style={{backgroundColor:'#4C516D', height:'80px'}}>
            <TableCell />
            <TableCell className='tc' style={{color:'white'}}>Rockets </TableCell>
            <TableCell className='tc' style={{color:'white'}} align="left">Company</TableCell>
            <TableCell className='tc' style={{color:'white'}} align="right">Description</TableCell>
            <TableCell className='tc' style={{color:'white'}} align="right">Country</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>

       


          {!!rows && rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count= {data.rockets ? data.rockets.length - 12 : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper></Grid>
    <Grid item xs={12} md={10} style={{ padding: "4px" }}></Grid>
    <Grid item xs={12} md={10} style={{ padding: "4px" }}></Grid>
    
    
    </Grid>
  );
}
export default Rocket
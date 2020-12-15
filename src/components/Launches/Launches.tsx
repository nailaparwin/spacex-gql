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
import { LanuchesQuery } from '../../generated/graphql';
import TablePagination from '@material-ui/core/TablePagination';
import Avatar from '@material-ui/core/Avatar';
import spaceship from './../Launches/spaceship.png';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from 'react-router';
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
  data: LanuchesQuery;
}


interface Column {
  id: 'mission_name' | 'launch_year' | 'launch_success' | 'details' ;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

interface launchType {
  mission_name: string,
  launch_year: string,
  launch_success: string,
  details: string,
  mission_id: string,
  launch_date_local: string,
  rocket : {
    rocket_name: string,
    rocket_type: string,
  },
  links: {
    flickr_images: []
  }
}
function createData(
  mission_name: string,
  launch_year: string,
  launch_success: string,
  details: string,
  mission_id: string,
  launch_date_local: string,
  rocket : {
    rocket_name: string,
    rocket_type: string,
  },
  links: {
    flickr_images: [''],
  }
) {
  return {
    mission_name,
    launch_year,
    launch_success,
    details,
    mission_id,
    launch_date_local,
    rocket,
    links,
    // protein,
    // price,
    // history: [
    //   { date: '2020-01-05', customerId: '11091700', amount: 3 },
    //   { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    // ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const navigate = useNavigate();
  
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right">
        <Avatar className={classes.large} alt="mission image" src={ row.links.flickr_images.length > 0 ? row.links.flickr_images[0] : spaceship} />
          {/* {row.details} */}
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {row.mission_name}
        </TableCell>
        <TableCell align="right">{row.launch_year}</TableCell>
        <TableCell align="right">{row.launch_success ? row.launch_success.toString() : ''}</TableCell>
        
        
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
                    <TableCell>Date</TableCell>
                    <TableCell>Rocket Name</TableCell>
                    <TableCell align="right">Rocket Type</TableCell>
                    <TableCell align="right"/>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                    <TableRow key={row.mission_id}>
                    <TableCell component="th" scope="row">
                    {row.launch_date_local}
                      </TableCell>
                      <TableCell>{row.rocket.rocket_name}</TableCell>
                      <TableCell align="right">{row.rocket.rocket_type}</TableCell>
                      <TableCell align="right">
                        {/* {row.details} */}
                        
                        <button onClick={() => {   
                          
                                const rowparam = [row.mission_name, row.mission_id, row.launch_year, row.launch_success, row.details, row.rocket.rocket_name, row.rocket.rocket_type, row.launch_date_local]     
                                                     
                                navigate(`/detail/${rowparam}`);
                                
                            }}> See More </button>
                      </TableCell>
                      
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



const Launches: React.FC<Props> = ({data}) => {
  //const rows = data.launches;
  let rows = data.launches!.slice()
  rows?.splice(0,11)

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
            Launches
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
            <TableCell className='tc' style={{color:'white'}}>Mission </TableCell>
            <TableCell className='tc' style={{color:'white'}} align="left">Mission Name</TableCell>
            <TableCell className='tc' style={{color:'white'}} align="right">Launch Year</TableCell>
            <TableCell className='tc' style={{color:'white'}} align="right">Success&nbsp;(y/n)</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>

       


          {!!rows && rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => (
            <Row key={row.mission_name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count= {data.launches ? data.launches.length - 12 : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper></Grid></Grid>
  );
}
export default Launches
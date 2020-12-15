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
    flickr_images: ['./spaceship.png','./next.jpg','./next2.jpg'],
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
        <TableCell align="right" >
        <Avatar className={classes.large} variant="square" alt="mission image" src={ row.links.flickr_images.length > 0 ? row.links.flickr_images[0] : spaceship} />
          
        </TableCell>
        <TableCell component="th" scope="row" align="left" className="tc3">
        {row.mission_id}
        </TableCell>
        <TableCell className="tc3">{row.mission_name}</TableCell>
        
        <TableCell align="right" className="hidden">{row.details}</TableCell>
        
        
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Mission Highlights
              </Typography>
              <Table size="small" className="small-table">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right"></TableCell>
                   
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                    <TableRow key={row.mission_id}>
                    <TableCell component="th" scope="row">
                    <img src={row.links.flickr_images[0]} alt="mission" width="200px" height="200px" className="small-screen"/>
                      </TableCell>
                      <TableCell><img src={row.links.flickr_images[1]} alt="mission" width="200px" height="200px" className="small-screen" /></TableCell>
                      <TableCell align="right"><img src={row.links.flickr_images[2]} alt="mission" width="200px" height="200px" className="small-screen" /></TableCell>
                      
                      
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
            Missions
          </Box>
         
        </Paper>        
        </Grid>
        <Grid item xs={12} md={10} style={{ padding: "4px" }}>
    <Paper className={classes.root}>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" className="small-table">
        <TableHead >
          <TableRow style={{backgroundColor:'#4C516D', height:'80px'}} >
            <TableCell />
            <TableCell  style={{color:'white'}}>Mission </TableCell>
            <TableCell className='tc3' style={{color:'white'}} align="left">Mission ID</TableCell>
            <TableCell className='tc3' style={{color:'white'}} align="left">Mission Name</TableCell>
            <TableCell className='hidden' style={{color:'white'}} align="right">Details</TableCell>            
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
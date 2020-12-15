import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router';
import Launches from './components/Launches';
import Rocket from './components/Rocket';
import Detail from './components/Detail';
import Mission from './components/Mission';
import StT from './components/StT'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

  
 
const App = () => {
  const classes = useStyles();
 
  return (
    
     <div className={classes.root}>
        <Grid container justify={"center"}>
       
        <Grid item xs={12} md={12} style={{ padding: "4px" }}>
          {/* <Paper style={{ overflowX: "auto" }}> */}          
          <Routes>		
          <Route path="/" element={<Header/>}> </Route>
          <Route path="/launch" element={<Launches/>}> </Route>
          <Route path="/rocket" element={<Rocket/>}> </Route>
          <Route path="/mission" element={<Mission/>}> </Route>
          <Route path="/detail/:rowparam" element={<Detail/>}> </Route>
          </Routes>                  
        {/* </Paper> */}
        </Grid>
        <StT/>
       {/*  <Grid item xs={12} md={10} style={{ padding: "4px" }}>
          <Paper style={{ overflowX: "auto" }}>
          <Box fontSize={48}>
            Launches
          </Box>
        
        </Paper>
        </Grid>
         */}
      </Grid>
     
    </div>
  )
}
export default App;

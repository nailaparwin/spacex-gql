import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import { Routes, Route, useNavigate } from 'react-router';
import Launches from '../Launches';
import bakgrd from './images/pic.png';
import images1 from './images/r2.png';
import rocket from './images/r1.png';
import spacex from './images/spacex.png';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
               
                <Container >
                    <div className='InfoRow'>   
                                       
                    <div className='InfoColumn'>                        
                    <div className='TextWrapper'>
                        <div className='TopLine'>
                        Successful Stories
                        </div>
                        <div className='Heading' >SpaceX Client</div> 
                        <div className='Subtitle'>A Client Side Application.</div>      
                        
                    </div>
                    </div>
                    <div className='InfoColumn2'>                       
                         <video src={process.env.PUBLIC_URL + '/images/vid.mp4'} autoPlay loop muted
                        width='100%' ></video>
                    </div>
                    </div>
                    <div className='InfoRow2' id="home-page">   
                    <div className='InfoColumn2'>   
                    <div className='Subtitle2'> a client-side application with React and Apollo using the public SpaceX GraphQL API to display information about launches. </div>
                    </div>   
                    <div className='InfoColumn'>   
                    
                        <Button
                            variant="contained"
                            color="primary"        
                            
                            onClick={() => {
                                navigate("/launch");
                            }}
                        >
                            Let's Explore...
                        </Button>
                    </div>
                    </div>
                    <div className='InfoRow2'>
                    
                    <div className='InfoColumn'>   
                    <Link to="/launch" style={{textDecoration: 'none'}}>
                    <Paper style={{ backgroundColor:'gold', width:"30%" }}>
                    <Box fontSize={48}>
                        Launches
                    </Box>
                    <img src={images1} width="200px" height="200px" alt="rocket" border-radius="100px"/>
                    </Paper>
                    </Link>
                    </div>
                    <div className='InfoColumn'>  
                    <Link to="/mission" style={{textDecoration: 'none'}}> 
                    <Paper style={{ backgroundColor:'yellow', width:"30%" }}>
                    <Box fontSize={48}>
                        Missions
                    </Box>
                    <img src={rocket} width="200px" height="200px" alt="rocket" border-radius="100px"/>
                    </Paper>
                    </Link>
                    </div>
                    <div className='InfoColumn' >  
                    <Link to="/rocket" style={{textDecoration: 'none'}}>
                    <Paper style={{ backgroundColor:'pink', width:"30%" }}>
                    <Box fontSize={48} >
                         Rockets 
                    </Box>
                    <img src={spacex} width="200px" height="200px" alt="rocket"/>
                    </Paper>
                    </Link> 
                    </div>
                    </div> 
                   
                    <div className='InfoRow2' style={{backgroundColor: 'black', backgroundImage: `url(${bakgrd})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', borderRadius: '120px'}}> 
                     
                   {/*  <div className='div1' style={{color:'black', fontSize:'2rem', fontWeight:'bold'}}>  </div>
                    <div className='div2' style={{color:'black', fontSize:'2rem', fontWeight:'bold'}}> </div>
                    <div className='div3' style={{color:'black', fontSize:'2rem', fontWeight:'bold'}}> Launches</div>
                       */}
                       <Box style={{fontSize: '12px', lineHeight: '1.1', color:'white', marginLeft:'50px' }}>
                       <br/><br/><br/><br/> Resources: <br/><br/>
                    <hr/><br/><br/>
                    https://panacloud.github.io/bootcamp-2020/ <br/><br/>
                    https://blog.logrocket.com/build-a-graphql-react-app-with-typescript/ <br/><br/>
                    http://api.spacex.land/graphql/ <br/><br/><br/><br/>
                   <br/><br/><br/><br/><br/>
                    </Box>
                    </div>
                    <div className='InfoRow2' style={{backgroundColor: "lightblue"}}>
                   
                    </div>
                </Container>
            
        </>
    )
}

export default Header

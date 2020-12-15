import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router';
import images1 from './images/r2.png';
import rocket from './images/r1.png';
import spacex from './images/spacex.png';
import hide from './images/logo.png';


const Header = () => {
    const navigate = useNavigate();
    return (
        <>
               
               
                    {/* <div className='InfoRow'>   
                                       
                    <div className='InfoColumn'>                        
                    <div className='TextWrapper'>
                        
                        <div className='Heading' >SpaceX Client</div> 
                        <div className='Subtitle'>A Client Side Application</div>      
                        
                    </div>
                    </div>
                    <div className='InfoColumn2'>                       
                         <video src={process.env.PUBLIC_URL + '/images/vid.mp4'} autoPlay loop muted
                        width='100%' ></video>
                    </div>
                    </div> */}
                     <div className='boxes'>
                    <div id="container">
                        <div className='up'>
                            <img src={hide} width="110%" alt="hidden" />
                            
                        </div>
                    </div>
                    </div>

                    <div className='explore'>   
                    <div className="container">
                    <h3> a client-side application with React and Apollo using the public SpaceX GraphQL API to display information about launches. </h3>
                    
                    
                    
                        <Button
                            variant="contained"
                            color="primary"        
                            
                            onClick={() => {
                                navigate("/launch");
                            }}
                        >
                            Let's Explore...
                        </Button>
                   
                    </div></div>




                   

                    
                    <div className='boxes'>
                    <div id="container">
                    <div className="box"> 
                    <Link to="/mission" style={{textDecoration: 'none'}}> 
                    
                    <img src={rocket} alt="rocket" border-radius="100px"/>
                    <br/><br/><br/>
                    <h3> Mission </h3>
                    <p> “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”</p>
                    <h3> -Elon Musk </h3>
                    </Link>
                    </div>
                    <div className="box"> 
                     
                    <Link to="/launch" style={{textDecoration: 'none'}}>
                    
                    <img src={images1}  alt="rocket" border-radius="100px"/>
                    <h3> Launches </h3>
                    <p>Falcon 9’s first stage previously supported launch of Crew Dragon’s first flight to the International Space Station with NASA astronauts onboard and the ANASIS-II mission. Following stage separation, SpaceX will land Falcon 9’s first stage on the “Of Course I Still Love You” droneship, which will be stationed in the Atlantic Ocean. One of Falcon 9’s fairing halves supported two previous Starlink launches.

</p>
                    </Link>
                    </div>
                    
                    <div className="box">   
                    <Link to="/rocket" style={{textDecoration: 'none'}}>
                    
                    <img src={spacex} alt="rocket"/>
                    <br/><br/><br/>
                    <h3> Rocket </h3>
                    <p> Ahead of Falcon 9’s upcoming launch of GPS III-4, the United States Space Force’s Space and Missile Systems Center (SMC) announced today an agreement with SpaceX to recover the first stage booster and, for the first time on a National Security Space Launch (NSSL) mission, launch previously flown boosters on future GPS missions. SpaceX is proud to leverage its flight-proven capabilities toward national security space launch missions.</p>
                    </Link> 
                    </div>
                    </div> 

                   
                    <footer>
                    Resources: <br/><br/>
                    <hr/><br/><br/>
                    <Link to="https://panacloud.github.io/bootcamp-2020/" style={{textDecoration: 'none'}}> <h3>Panacloud Bootcamp 2020</h3></Link> <br/>
                    <Link to="https://blog.logrocket.com/build-a-graphql-react-app-with-typescript/" style={{textDecoration: 'none'}}> <h3>graphql-react-app-with-typescript </h3></Link> <br/>
                    <Link to="http://api.spacex.land/graphql/" style={{textDecoration: 'none'}}> <h3>api.spacex.land </h3> </Link> <br/><br/><br/><br/>
                    </footer>
                   </div>                                               
        </>
    )
}

export default Header

import React from 'react';
import './styles.css'
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { LanuchesQuery } from '../../generated/graphql';

interface Props{
    data: LanuchesQuery;
  }

const Detail: React.FC<Props> = ({data}) => {
    const rows = data.launches;
//const Detail = () => {
    //const navigate = useNavigate();
    const { rowparam }  = useParams();       
    let arr: any = rowparam.split(',')   
  
  console.log(rowparam)
  console.log(rows)
    let datarow : any;
// eslint-disable-next-line
    {!!rows && rows.map ((row) => {
                        
        return ( row?.mission_name === arr[0] ? (
            datarow = row             
         ): null)
     })}

     console.log(datarow.launch_year)
    return (
        <>
               
                <Container >
                    <div className='dInfoRow'>   
                    <div className='dHeading'>
                        Launch Detail
                                                                                                                    
                    </div>
                    </div>

                    <div className='dDetailRow'>   
                     
                    <div className='dSubtitle'> 
                    {/* {arr.map(( i:any) => {
                        return (<p> {i} </p>)
                        })} */}
                        <p> Mission ID : {arr[1]} </p>
                        <p> Mission Name : {arr[0]} </p>
                        <p> Launch Year: {datarow.launch_year}</p>
                        <p> Launch Success: {datarow.launch_success ? 'Successful' : 'Failed'}</p>
                        <p> Launch Details: {datarow.details}</p>
                        <p> Rocket Name: {datarow.rocket.rocket_name}</p>
                        <p> Rocket Type: {datarow.rocket.rocket_type}</p>
                    </div>
                    </div> 
                    <div className='dInfoRow2'>   
                    

                    {/* {!!rows && rows.map ((row) => {
                        
                       return ( row?.mission_name === arr[0] ? (
                        row?.links?.flickr_images?.map ((im: any) => {
                            return    <div className="ImgWrapper"><div className="Img"><img src={im} alt="hi" width="400px" height="400px"/></div></div>
                        })
                            
                        ): null)
                    })} */}
                    {datarow.links.flickr_images.map ((im: any) => {
                        return    <div className="dImgWrapper"><div className="dImg"><img src={im} alt="hi" width="400px" height="300px"/></div></div>
                    })}
                    </div>
                   
                </Container>
        </>
    )}
export default Detail;
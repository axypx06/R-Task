import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MonthContext } from './context';
import { API } from '../services/API';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Statistics() {
    const {month,setMonth}=React.useContext(MonthContext);
    const [sale,setSale]=React.useState(0);
    const [sold,setSold]=React.useState(0);
    const [not_sold,setNotSold]=React.useState(0);

    React.useEffect(()=>{
      fetch(`${API}/products/sales/?month=${month}`)
      .then((res)=>{
        return res.json();
      })
      .then((json)=>{
       
        setSale(json.sales);
        setSold(json.sold);
        setNotSold(json.not_sold);

      })

    },[month])
    
  return <>
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
  <div>
    <h2>Statistics - {month}</h2>
    <Card sx={{ minWidth: 400 ,borderRadius:'20px',backgroundColor:'#E3D485'}}>
      <CardContent>
        <h3>Total Sale: {sale}</h3>
        <h3>Total Sold Item: {sold}</h3>
        <h3>Total Not Sold Item: {not_sold}</h3>
      </CardContent>
    </Card>
  </div>
</div>
</>
}


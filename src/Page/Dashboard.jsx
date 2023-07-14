import React from 'react'
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BarChart from '../Chart/BarChart';
import Echart from '../Chart/Echart';
import Schart from "../Chart/Schart";
import Cchart from '../Chart/Cchart';
import Pchart from '../Chart/Pchart';
import CCchart from '../Chart/CCchart';
import Mchart from '../Chart/Mchart';
import Qchart from '../Chart/Qchart';
import Dchart from '../Chart/Dchart';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Box sx={{display:"flex",overflow:"none"}}>  
    <Sidebar/>
    <Box component="main" sx={{flexGrow:1,p:3}}>
    <Box sx={{ flexGrow: 10, overflow:"none"}}>
    <Grid container spacing={1}>

      {/* 1st */}
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 300, maxHeight:400 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Education
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <Echart/>
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 300, maxHeight:400 }}>
     
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         Skills
       </Typography>
       <Typography variant="body2" color="text.secondary">
         <Schart/>
       </Typography>
     </CardContent>
   </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 300, maxHeight:400}}>
     
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         Course
       </Typography>
       <Typography variant="body2" color="text.secondary">
         <Cchart/>
       </Typography>
     </CardContent>
   </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 300, maxHeight:400}}>
     
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         Platform
       </Typography>
       <Typography variant="body2" color="text.secondary">
        <Pchart/>
       </Typography>
     </CardContent>
   </Card>
        </Grid>

        {/* 2nd */}


        <Grid item xs={3}>
        <Card sx={{ maxWidth: 300, maxHeight:1000}}>
     
     <CardContent>
       <Typography gutterBottom variant="h6" component="div">
         Course complete status%
       </Typography>
       <Typography variant="body2" color="text.secondary">
         <CCchart/>
       </Typography>
     </CardContent>
   </Card>
        </Grid>

        <Grid item xs={9}>
        <Card sx={{ maxWidth: 980 , maxHeight: 600}}>
     
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         Last 7 days status Graph!!
       </Typography>
       <Typography variant="body2" color="text.secondary">
         <BarChart/>
         
       </Typography>
     </CardContent>
   </Card>
        </Grid>

        {/* 3rd */}


        <Grid item xs={3}>
        <Card sx={{ maxWidth: 300 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Monthly Tranning Status!!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Mchart/>
        </Typography>
      </CardContent>
    </Card>
        </Grid>


        <Grid item xs={3}>
        <Card sx={{ maxWidth: 300 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Quiz Completed %
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <Qchart/>
        </Typography>
      </CardContent>
    </Card>
        </Grid><Grid item xs={6}>
        <Card sx={{ maxWidth: 650}}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Daily Practice status!!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Dchart/>
          
        </Typography>
      </CardContent>
    </Card>
        </Grid>

        
      </Grid>
      
    </Box>
    </Box>
     </Box>

   

    
      
     
     
    
    </>
   

  )
}

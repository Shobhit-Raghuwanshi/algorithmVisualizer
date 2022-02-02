import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import {
  
  CssBaseline,
  
  createTheme
} from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark"
  }
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (<ThemeProvider theme={theme}>
  <CssBaseline />
  <div className='home-container'>

      <Typography margin="20px 0px 10px 0px" variant='h4' component="div" color="#4ECCA3">AlgorithmS VisualizeR</Typography>
      <Typography margin="10px 0px 20px 0px" variant="body2" color="#EEE">Algorithm Visualizer is an interactive online platform that visualizes algorithms.
        As it is much easier to understand complex algorithm by visualizing them.
        In this project we can visualize many sorting algoritms and a pathfinding algorithm.
        Synopsis of these algorithms is given below.
        </Typography>
      
      
        <div>

        

    <Grid container spacing={2}>
  <Grid item xs={4}>
   
    <Card className="card" variant="outlined" sx={{ minHeight: 280 }}  color="inherit">
      <CardContent>
        
        <Typography variant="h5" component="div">
          QuickSort
        </Typography>
        <br />
        <Typography variant="body3">
        The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot,
         put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater
          elements (greater than x) after x. All this should be done in linear time.
          
        </Typography>
      </CardContent>
      <CardActions>
      <a href="./Sort"> <Button size="small"> Visualize </Button></a>
      <a href="https://www.geeksforgeeks.org/quick-sort/"><Button size="small">  Learn More</Button></a> 
      </CardActions>
    </Card>
    
  </Grid>
  <Grid item xs={4}>
  <Card className="card" variant="outlined" sx={{ minHeight: 280 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          MergeSort
        </Typography>
        <br />
        <Typography variant="body3">
        Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
          
        </Typography>
      </CardContent>
      <CardActions>
      <a href="./Sort"> <Button size="small"> Visualize </Button></a>
      <a href="https://www.geeksforgeeks.org/merge-sort/"><Button size="small">  Learn More</Button></a> 
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card className="card" variant="outlined" sx={{ minHeight: 280 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          BubbleSort
        </Typography>
        <br />
        <Typography variant="body3">
        Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
          
        </Typography>
      </CardContent>
      <CardActions>
      <a href="./Sort"> <Button size="small"> Visualize </Button></a>
      <a href="https://www.geeksforgeeks.org/bubble-sort/"><Button size="small">  Learn More</Button></a> 
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card className="card" variant="outlined" sx={{ minHeight: 280 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
         Insertion sort
        </Typography>
        <br />
        <Typography variant="body3">
        Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
          
        </Typography>
      </CardContent>
      <CardActions>
      <a href="./Sort"> <Button size="small"> Visualize </Button></a>
      <a href="https://www.geeksforgeeks.org/insertion-sort/"><Button size="small">  Learn More</Button></a> 
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={4}>
  <Card className="card" variant="outlined" sx={{ minHeight: 280 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
          Dijkstra
        </Typography>
        <br />
        <Typography variant="body3">
        Dijkstra algorithm is a single-source shortest path algorithm. Here, single-source means that only one source is given, and we have to find the shortest path from the source to all the nodes.
          
        </Typography>
      </CardContent>
      <CardActions>
      <a href="./Grid"> <Button size="small"> Visualize </Button></a>
      <a href="https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"><Button size="small">  Learn More</Button></a> 
      </CardActions>
    </Card>
  </Grid>
</Grid>


        </div>
  </div>
  </ThemeProvider>
  );
};

export default Home;

import * as React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


  
export default function Header(props) {
  return (
      <AppBar className="appbar" elevation={0} style={{paddingTop: '10px', background: 'rgb(26, 26, 27)' }} position="static">
        <Toolbar>

        <Toolbar>
          <Typography variant="h5" gutterBottom component="div" sx={{ flexGrow: 1 }}>
            {props.SP !== 1 && props.SP}
          
      </Typography>
        </Toolbar>

          <Typography variant="h5" gutterBottom component="div" sx={{ flexGrow: 1 }}>
          <Button className="btn" variant="contained" color="success"   onClick={props.onClick}>Visulize</Button>
          <Button className="btn" variant="outlined"    onClick={props.onClickR}>RandomMaze</Button>
          <Button className="btn" variant="outlined" color="error"   onClick={props.onClickC}>ClearBoard</Button>
       


      </Typography>
      

          
        </Toolbar>
        
      </AppBar>
  );
}
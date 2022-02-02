import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';




export default function Navbar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box className='nav-bar' >
      <List component="nav" aria-label="main mailbox folders">
      <Link to="/" className="link">
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          
          <ListItemText  primary="HomePage" />
        </ListItemButton>
        </Link>
      
        <Link to="/sort" className="link">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          
          <ListItemText  primary="Sorting Visualizer" />
        </ListItemButton>
        </Link>

        <Link to="/grid" className="link">
        <ListItemButton className='list-btn'
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          
          <ListItemText className='list-btn' primary="Dijkstra Visualizer" />
        </ListItemButton>
        </Link>
      </List>
      
    </Box>
  );
}

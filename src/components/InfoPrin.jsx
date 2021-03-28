import React from 'react';
import Busqueda from "./Busqueda.jsx";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

/* BORDES Y POSICION DEL MENU */
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },

})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


const StyledMenuItem = withStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))(MenuItem);


const InfoPrin = () => {
 
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  return (
    <>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        centered
      >
           
          <img src="./img/usuario.png" alt="" className="FotoUsuario" />
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            className="BotonPrincipal"
            id="BotonPrincipal"
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            onClick={handleClick}
          >
          PEREZ PEREZ
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <StyledMenuItem>
            <ListItemIcon>
              <SendIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
              </StyledMenuItem>
            </StyledMenu>
          <Busqueda />
          <Tab id="NombreTab" label="INICIO" />
          <Tab id="NombreTab" label="TOP" />
          <Tab id="NombreTab" label="HITS" />
          <Tab id="NombreTab"label="NEWS" />
          <Tab id="NombreTab" label="NEWSLETTER" />
          <img src="./img/icon-blanco.png" id="FotoPrincipal" alt=""/>
      </Tabs>
    </>

  );
}
export default InfoPrin;
import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MuiTheameProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home';
import Notifications from 'material-ui/svg-icons/social/notifications-none';
import Messages from 'material-ui/svg-icons/communication/mail-outline';
import Moments from 'material-ui/svg-icons/image/flash-on';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';


const imgStyle={
  width:35,
  height:30,
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  left: 0,
  top: 0,
  marginLeft: 600,
  marginTop:15,
  cursor:'pointer'
}
const Paperstyle={
  marginLeft: 400,
   width : 200,
   height: 30,
   borderRadius: 20,
   backgroundColor:'#f5f8fa'
}

const imgStyle1 = {
  width: 19,
  height: 18,
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  left: 0,
  top: 0,
  marginLeft: 1010,
  marginTop: 20,
  pointer:'cursor'
}


const inputStyle={
   position:'absolute',
   width: 170,
   height: 20,
   paddingLeft: 9,
   fontSize:12,
   marginTop:5
}

const avatar={
  borderRadius: '50%',
   width: 30, 
   height: 30,
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  left: 0,
  top: 0,
  marginLeft: 1060,
  marginTop: 15,
  pointer: 'cursor'
}
const button={
  borderRadius: '25px',
  fontWeight: 900,
  padding: '9px',
  border: 'white solid 0px',
  backgroundColor: '#4ab3f4',
  color: 'white',
  position: 'absolute',
  marginLeft: 265,
  marginTop: -50,
  height:30,
  width:65,
  fontSize:'11px',
  cursor:'pointer'
}


  
class Navbar extends React.Component
{ 
  render()
  {

  return (
    <MuiTheameProvider>
            
    <Toolbar>
    <ToolbarGroup>
    <IconButton style={{ float: 'right',marginLeft:120,position:'absolute'}} className="floatingButton"
                            backgroundColor='#66757f'>
                            <Home color={'#66757f'} style={{ float: 'right' }} />
    </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 160,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}><a>Home</a>
                        </span>
    <IconButton style={{ float: 'right',marginLeft:185,position:'absolute'}} className="floatingButton"
                            backgroundColor='#66757f'>
                            <Moments color={'#66757f'} style={{ float: 'right' }} />
    </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 30,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}><a>Moments</a>
                        </span>
  <IconButton style={{ float: 'right', marginLeft: 260, position: 'absolute' }} className="floatingButton"
                            backgroundColor='#66757f'>
                            <Notifications color={'#66757f'} style={{ float: 'right' }} />
    </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 30,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}><a>Notifications</a>
                        </span>
  <IconButton style={{ float: 'right', marginLeft: 355, position: 'absolute' }} className="floatingButton"
                            backgroundColor='#66757f'>
                            <Messages color={'#66757f'} style={{ float: 'right' }} />
  </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 30,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor:'pointer',
                            fontWeight: 'bold'
                        }}><a>Messages</a>
                        </span>
                        <img style={imgStyle} src={require("./twitter.png")}/>
          <Paper style={Paperstyle} zDepth={1} >
                        <TextField placeholder="Search Twitter"
                            underlineShow ={false}
                            inputStyle={inputStyle} />
                       <a href="/search">    <img src={require("./search.png")} style={imgStyle1} /> </a>
                          <img src={require("./mypic.jpg")} style={avatar} alt="Avatar"/>
                         
                            <button style={button}>Tweet</button>
                            
                            
          </Paper>
                        
    </ToolbarGroup>
    </Toolbar>
    </MuiTheameProvider> );
    
  }
}

export default Navbar;



import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import More from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';


const style = {
    height: 50,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center'
}

const textStyle={
    fontSize: 12,
    textAlign: 'center',
    paddingLeft: 20,
    color: '#66757f',
    display: 'inline-block',
    cursor: 'pointer',
    fontWeight:'bold'
}
const style1={
    height: 50,
    width: 265,
    margin: 1,
    display: 'inline-block',
    float: 'right',
    marginRight: 950,
    marginTop:20,
    cursor:'pointer'
}
const textStyle1={
    fontSize:14,
    textAlign:'left',
    paddingLeft:18,
    padding: 5,
    color: "#1da1f2",
    fontWeight: 550,
    cursor:'pointer',
    marginLeft: 8
}
const textStyle2= {
    fontSize: 12,
    textAlign: 'left',
    paddingLeft: 18,
    color:"#78889c"
}
const subtitle={
    marginTop: -1,
    fontSize:13,
    paddingLeft:1,
    display: 'inline-block',
    color:'grey'
}
const button={
    borderRadius: '25px',
    border: 'groove',
    backgroundColor: 'white',
    color: '#00aced',
    position: 'absolute',
    marginLeft: 0,
    marginTop: -20,
    height:25,
    width:75,
    fontSize:'11px',
    cursor:'pointer'
  }
  const iconStyle={
    height: 15, 
    maxWidth: 15, 
    paddingBottom: 40,
    marginTop:-15,
    position:'absolute' 
  }


const Timeline2 = () => (
    <div>
      <Paper style={{ 
        marginLeft: -1,
        marginTop: 8,
        width : 1335,
        height: 73,
        backgroundColor:'#00aced'}}>
        <p style={{color: "white", fontSize: 30,display: 'flex',
         justifyContent: 'center',
          position: 'absolute', marginTop: 20, marginLeft: 140}}><b>aadhar</b></p>
        </Paper>
        <Paper style={style} zDepth={1} >
                <Toolbar style={style}>
                    <ToolbarGroup firstChild={true}>
                        
                        <span style={{fontSize: 12,
                                textAlign: 'center',
                                paddingLeft: 138,
                                color: '#66757f',
                                display: 'inline-block',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                        }}><a>Top</a></span>
                       
                            <span style={textStyle}><a>Latest</a></span>
                            
                            <span style={textStyle}><a>People</a></span>

                            <span style={textStyle}><a>Photos</a></span>

                            <span style={textStyle}><a>Videos</a></span>

                            <span style={textStyle}><a>News</a></span>

                            <span style={textStyle}><a>Broadcasts</a></span>
                    </ToolbarGroup>
                    
                    <ToolbarGroup>
                        <IconMenu
                            iconButtonElement={<IconButton ><MoreVertIcon /></IconButton>}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            style={{ float: 'right', marginTop: -1, position: 'absolute', paddingLeft: 620 }}
                            menuStyle={{ width: 150, height: 180 }}
                        >
                            <MenuItem primaryText={<span style={{ fontSize: '11px' }}>Search settings</span>} />
                            <Divider />
                            <MenuItem primaryText={<span style={{ fontSize: '11px' }}>Save this search</span>} />
                            
                            <MenuItem primaryText={<span style={{ fontSize: '11px' }}>Embed this search</span>} />
                        </IconMenu>
                    </ToolbarGroup>
                    </Toolbar>
               </Paper>
            <Card style={style1}>
            <Subheader style={{ color: "black", fontFamily: "Helvetica", fontSize: 18 }}><b>Search filters </b>
            <span style={{ color: "#1c94e0", fontSize: 9, cursor: 'pointer' }}><a style={{fontSize: 12}}><b>.</b> Show</a></span>
            </Subheader>
            </Card>
            <Card style={{ height: 180,
            width: 265,
            margin: 1,
            display: 'inline-block',
            float: 'right',
            marginRight: 950,
            marginTop:10,
            cursor:'pointer' }}>
        <Subheader style={{ color: "black", fontFamily: "Helvetica", fontSize: 18 }}><b>Related searches</b> </Subheader>
        <div style={textStyle1}><a><b>gujarat elections</b></a></div>
        <div style={textStyle1}><a><b>the centre</b></a></div>
        <div style={textStyle1}><a><b>gujarat bjp</b></a></div>
        <div style={textStyle1}><a><b>cvoter</b></a></div>
        <div style={textStyle1}><a><b>delhi</b></a></div>
        </Card>
        <Card style={{height: 420,
            width: 265,
            margin:1,
            display: 'inline-block',
            float: 'right',
            marginRight: 950,
            marginTop: 15,
            cursor: 'pointer'}}>
            <Subheader style={{ color: "black", fontFamily: "Helvetica", fontSize: 18 }}><b>Who to follow </b>
            <span style={{ color: "#1c94e0", fontSize: 9, cursor: 'pointer' }}><a style={{fontSize: 12}}><b>.</b> Refresh <b>.</b> View all</a></span>
            </Subheader>
            <div>
                <img src={require('./AH.jpg')} style={{ height : 50,
                width : 50,display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                marginRight :40,
                marginLeft :20,
                borderRadius: '50%'
                }} />
                <div>
                    <CardText style={{
                          display:'inline-block',
                          marginLeft: 78,
                          marginTop: -25}} >
                          <p><b>Aadhar Homes</b><p style={subtitle}>@AadharHomes</p> </p>
                          <button style={button}>Follow</button>
                    </CardText>
                </div> 
                </div>
                <hr/>
                <div>
                <img src={require('./AI.jpeg')} style={{ height : 50,
                width : 50,display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                marginRight :40,
                marginLeft :20,
                borderRadius: '50%'
                }} />
                <div>
                    <CardText style={{
                          display:'inline-block',
                          marginLeft: 78,
                          marginTop: -25}} >
                          <p><b>aadhar india</b><p style={subtitle}>@aadharindia</p> </p>
                          <button style={button}>Follow</button>
                    </CardText>
                </div> 
                </div>
                <hr/>
                <div>
                <img src={require('./SRK.jpg')} style={{ height : 50,
                width : 50,display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                marginRight :40,
                marginLeft :20,
                borderRadius: '50%'
                }} />
                <div>
                    <CardText style={{
                          display:'inline-block',
                          marginLeft: 78,
                          marginTop: -25}} >
                          <p><b>Shah Rukh Khan</b><p style={subtitle}>@imsrk</p> </p>
                          <button style={button}>Follow</button>
                    </CardText>
                </div> 
                </div>
                <hr/>
                <img src={require('./Gmail.jpg')} style={{ height : 50,
                width : 50,display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                marginRight :40,
                marginLeft :20,
                borderRadius: '50%'
                }} />
                <CardText style={{
                          display:'inline-block',
                          marginLeft: 78,
                          marginTop: -25}} >
                <p><b>Find people you know</b><p style={{marginTop: -1, marginRight:-15, fontSize:11,paddingLeft:1,display: 'inline-block',
                color:'grey'}}>Import your contacts from Gmail</p> </p>
                </CardText>
                <br/>
                
                <span style={{ color: "#1c94e0", fontSize: 13,marginLeft:12,marginTop: 10, cursor: 'pointer' }}><a>Connect other address books</a></span>
             </Card>
             <Card style={{
            height: 590,
            width: 265,
            margin:1,
            display: 'inline-block',
            float: 'right',
            marginRight: 950,
            marginTop: 15,
            cursor: 'pointer'}} >

            <div>
        
            <Subheader style={{ color: "black", fontFamily: "Helvetica", fontSize: 18 }}><b>Trends for you </b>
            <span style={{ color: "#1c94e0", fontSize: 9, cursor: 'pointer' }}><a style={{fontSize: 12}}><b>.</b> Change</a></span>
            </Subheader>
            <div style={textStyle1}><a><b>#OLXWinterDiaries</b></a></div>
            <div style={textStyle2}>7,592 Tweets</div>
            <br />
            <div style={textStyle1}><a><b>#FodderScam</b></a></div>
            <div style={textStyle2}>9,884 Tweets</div>
            <br />
            <div style={textStyle1}><a><b>#VirushkaWEDDING</b></a></div>
            <br />
            <div style={textStyle1}><a><b>#FPHDelhi</b></a></div>
            <div style={textStyle2}>2,262 Tweets</div>
            <br />
            <div style={textStyle1}><a><b>#PhilipsHealthcareHome</b></a></div>
            <div style={textStyle2}>1,122 Tweets</div>
            <br />
            <div style={textStyle1}><a><b>#SwagpurKaChaudhary</b></a></div>
            <br />
            <div style={textStyle1}><a><b>#StarMoviesSecretScreening</b></a></div>
            <br />
            <div style={textStyle1}><a><b>#MTVUnplugged</b></a></div>
            <div style={textStyle2}><a>1,138 Tweets</a></div>
            <br/>
            <div style={textStyle1}><a><b>#MySolutionToPollution</b></a></div>
            <div style={textStyle2}><a>6,793 Tweets</a></div>
            <br/>
            <div style={textStyle1}><a><b>#Nissan</b></a></div>
            <div style={textStyle2}><a>4,832 Tweets</a></div>       
         </div>
         </Card>
        
    <div style={{height: 40,
    width: 600,
    margin: 1,
    float: 'right',
    marginRight: 340,
    marginTop:-1285,
    cursor:'pointer'}}>
    <p style={{ marginLeft: 10, marginTop: 0, fontSize:20}}><b>Top news</b>
    <p style={{ color: "#1c94e0", fontSize: 9, cursor: 'pointer', marginLeft: 545, marginTop: -18 }}><a style={{fontSize: 12}}>View all</a></p> </p>
    </div> 
       <Card style={{height: 450,
    width: 600,
    margin: 1,
    float: 'right',
    marginRight: 340,
    marginTop:-1250,
    cursor:'pointer'}}>
    <CardMedia style={{
                          display:'inline-block',
                          marginLeft: 0,
                          marginTop: -5}}>
    <img style={{ height:350}} src={require("./childaadhar.jpg")} />
    <p style={{  marginTop: 8,
    marginLeft:4,
    fontSize:15,
    paddingLeft:1,
    display: 'inline-block',
    color:'grey'}}>Children holding Aadhar card will be served food in Govt Lower primary schools says central.
    During the winter session in loksabha Minister virendhara kumar stated "This changes is to eradicate the scams related to the fake expense in the related department".
    </p>
    <p style={{  marginTop: 0,
    marginLeft:6,
    fontSize:13,
    paddingLeft:1,
    display: 'inline-block'}}><b>Oneindia Tamil </b><p style={{  marginTop: 8,
        marginLeft:395,
        fontSize:13,
        paddingLeft:1,
        display: 'inline-block',
        color:'grey'}}>Dec 22, 2017
        </p></p>
    </CardMedia>
    </Card>  
    <Card style={{
            height: 650,
            width: 600,
            margin: 1,
            float: 'right',
            marginRight: 340,
            marginTop:-790,
            cursor:'pointer'}}>
         <IconMenu
                iconButtonElement=
                    {<IconButton style={{ float: 'right', marginLeft: 555,marginTop:-20, position: 'absolute' }} className="floatingButton"
                backgroundColor='#66757f'>
                <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute  @DrGPradhan</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block  @DrGPradhan</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <img style={{
                 borderRadius: '50%',
                 width: 50, 
                 height: 50,
                 display: 'flex',
                 justifyContent: 'center',
                 position: 'absolute',
                 left: 0,
                 top: 0,
                 marginLeft: 410,
                 marginTop: 720,
                 pointer: 'cursor'
                 }} src= {require("./Gaurav.jpg")}/>
                 <div>     
               <CardMedia  style={{
                          display:'inline-block',
                          marginLeft: 78,
                          marginTop: -25}}>
              
                  <p><b>#GauravPradhan </b><p style={subtitle}> @DrGPradhan . 7h</p> </p>
                  <p style={{fontSize:15, marginTop:-20}}>Why so-called low life seculars and Intellectuals opposing <b>AADHAR</b> </p>
                  <img style={{borderRadius: '1%', height: 550}} src={require("./AG.jpg")} />
                  <div style={{position:'absolute'}}>
            <IconButton  iconStyle={iconStyle} tooltip="Reply" tooltipPosition="top-center">
                <img src={require("./reply.png")} />
            </IconButton>
            <IconButton iconStyle={iconStyle} tooltip="Retweet" tooltipPosition="top-center" >
                <img src={require("./retweet.png")} />
            </IconButton>
            <IconButton iconStyle={iconStyle} tooltip="Like" tooltipPosition="top-center" >
                <img src={require("./like.png")} />
            </IconButton>
            <IconButton iconStyle={iconStyle} tooltip="Direct message" tooltipPosition="top-center" >
                <img src={require("./DM.png")} />
            </IconButton>
            </div> 
                  </CardMedia>
                  </div>
        </Card>
      <div style={{width:265, marginLeft: 130, marginTop: 1320}}>
      <p style={subtitle}>© 2017 Twitter About Help Center Terms 
      Privacy policy Cookies Ads info </p>
      </div>


    </div>
);
export default Timeline2;
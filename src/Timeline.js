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




const textStyle1={
    fontSize:14,
    textAlign:'left',
    paddingLeft:18,
    color: "#1da1f2",
    fontWeight: 550,
    cursor:'pointer'
}
const textStyle2= {
    fontSize: 12,
    textAlign: 'left',
    paddingLeft: 18,
    color:"#78889c"
}

const style1={
    height: 160,
    width: 275,
    margin: 1,
    display: 'inline-block',
    float: 'right',
    marginRight: 950,
    marginTop:20,
    cursor:'pointer'
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
    marginLeft: 0,
    marginTop: 12,
    pointer: 'cursor'
  }
const titleStyle={
    marginTop:15,
    display:'inline-block'
}
const subtitle={
    marginTop: -1,
    fontSize:13,
    paddingLeft:5,
    display: 'inline-block',
    color:'grey'
}
const Paperstyle={
    marginLeft: 40,
     width : 425,
     height: 35,
     borderRadius: 5,
     backgroundColor:'#f5f8fa'
  }

const inputStyle={
    position:'absolute',
    width: 170,
    height: 30,
    paddingLeft: 9,
    fontSize:14,
    marginTop:3
    
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
  const iconStyle={
    height: 15, 
    maxWidth: 15, 
    paddingBottom: 40,
    marginTop:-15,
    position:'absolute' 
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
  const avatar1={
    borderRadius: '50%',
     width: 65, 
     height: 65,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 130,
    marginTop: 120,
    "border-width": "2px", 
    "border-color" : "white",
    "border-style" : "solid"
}


const Timeline = () => (
    
    <div>    
     <Card style={style1}>
     <CardText>
        <Paper style={{ 
        marginLeft: -16,
        marginTop: -15,
        width : 275,
        height: 65,
        backgroundColor:'#00aced'}}>
        </Paper>
        <img src={require('./mypic.jpg')} style={avatar1} alt="Avatar" />
            
            <p style={{marginLeft: 80, fontSize: 16, marginTop:8}}><b>Jyotsna Singh</b>
            <p style={{
             marginTop: -500,
             fontSize:13,
             paddingLeft:5,
             marginLeft: -5,
             display: 'inline-block',
             color:'grey'}}>@jyo_singh_16</p></p>

           <table style={{marginTop:-20, border:25}}>
            <thead>
        <tr>
            <th style={{color:'gray', fontSize:12}}>Tweets</th>
            <th style={{color:'gray', fontSize:12}}>Following</th>
            <th style={{color:'gray', fontSize:12}}>Followers</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align = 'center' style = {{color : 'blue'}}><strong>1</strong></td>
            <td align = 'center' style = {{color : 'blue'}}><strong>10</strong></td>
            <td align = 'center' style = {{color : 'blue'}}><strong>4</strong></td>
            </tr>
        </tbody>
        </table>
    </CardText>
        
     </Card>
     
     <Card style={{
            height: 530,
            width: 500,
            margin: -160,
            display: 'inline-block',
            float: 'right',
            marginRight: 435,
            cursor: 'pointer'}}>       
       <Toolbar>
       <ToolbarGroup>
       <IconButton style={{ float: 'right',marginLeft:120,position:'absolute'}} className="floatingButton"
                            backgroundColor='#66757f'>
       </IconButton>
       <Paper style={Paperstyle} zDepth={1} >
                        <TextField  placeholder=" What's happening?" 
                            underlineShow ={false}
                            inputStyle={inputStyle} />
                            <img src={require("./mypic.jpg")} style={avatar} alt="Avatar" />
                            
                            
                            
        </Paper>
      </ToolbarGroup>
      </Toolbar>
      <IconMenu
                iconButtonElement=
                    {<IconButton style={{ float: 'right', marginLeft: 455,marginTop:-20, position: 'absolute' }} className="floatingButton"
                backgroundColor='#66757f'>
                <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @neetimohan18</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @neetimohan18</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <img src= {require("./neeti.jpg")}
             style={{
                 borderRadius: '50%',
                 width: 50, 
                 height: 50,
                 display: 'flex',
                 justifyContent: 'center',
                 position: 'absolute',
                 left: 0,
                 top: 0,
                 marginLeft: 420,
                 marginTop: 150,
                 pointer: 'cursor'
                 }} />
                 
                <div>     
               <CardMedia  style={{
                          display:'inline-block',
                          marginLeft: 78,
                          marginTop: -25}}>
              
                  <p><b>Neeti Mohan</b><p style={subtitle}>@neetimohan18 . 2h</p> </p>
                <p style={{fontSize:15, marginTop:-20}}>
      What a blast last night performing for stellar audience at the <a style={{ color:'blue'}}>#KakinadaBeachFestival @arrahman</a> Live in concert. 
                     </p>
                     <img style={{borderRadius: '1%', height:350, width:65}} src={require("./Concert.jpg")} />
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
                     

            
               </CardMedia >

                </div>
               </Card>

    <Card style={{
            height: 390,
            width: 500,
            margin: 500,
            display: 'inline-block',
            float: 'right',
            marginRight: 435,
            marginTop: 165,
            cursor: 'pointer'}}> 
            <IconMenu
                iconButtonElement=
                    {<IconButton style={{ float: 'right', marginLeft: 455,marginTop:-20, position: 'absolute' }} className="floatingButton"
                backgroundColor='#66757f'>
                <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @HasuraHQ </span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @HasuraHQ </span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <img src= {require("./Hasura.jpg")}
             style={{
                 borderRadius: '50%',
                 width: 50, 
                 height: 50,
                 display: 'flex',
                 justifyContent: 'center',
                 position: 'absolute',
                 left: 0,
                 top: 0,
                 marginLeft: 420,
                 marginTop: 630,
                 pointer: 'cursor'
                 }} />
                 <div>     
               <CardMedia  style={{
                          display:'inline-block',
                          marginLeft: 78,
                          marginTop: -25}}>
              
                  <p><b>Hasura</b><p style={subtitle}>@HasuraHQ . 22Dec</p> </p>
                  <p style={{fontSize:15, marginTop:-20}}>Build your next <a style={{ color:'blue'}}> #datascience</a>
                  app using the <a style={{ color:'blue'}}> #python #dash </a> framework.
                  Written on top of <a style={{ color:'blue'}}> #Flask</a>, <a style={{ color:'blue'}}> @plotly_js</a>, and<a style={{ color:'blue'}}> @reactjs</a>,
                   Dash is ideal for building <a style={{ color:'blue'}}> #dataviz</a> apps with highly custom user interfaces in pure Python.
                  Clone & Deploy in 3 steps:<a style={{ color:'blue'}}> http://bit.ly/2BLgvIO  #build #apps</a></p>
                  <img style={{borderRadius: '1%'}} src={require("./Python.png")} />
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
        <Card style={{
            height: 510,
            width: 275,
            margin:1,
            display: 'inline-block',
            float: 'right',
            marginRight: 950,
            marginTop: -1250,
            cursor: 'pointer'}} >

            <div>
        
            <Subheader style={{ color: "black", fontFamily: "Helvetica", fontSize: 18 }}><b>Trends for you </b>
            <span style={{ color: "#1c94e0", fontSize: 9, cursor: 'pointer' }}><a style={{fontSize: 12}}><b>.</b> Change</a></span>
            </Subheader>
            <div style={textStyle1}><a><b>#NewlsEzee</b></a></div>
            <div style={textStyle2}>5,570 Tweets</div>
            <br />
            <div style={textStyle1}><a><b>#ApolloHTS</b></a></div>
            <div style={textStyle2}>1,912 Tweets</div>
            <br />
            <div style={textStyle1}><a><b>#AdarshScam</b></a></div>
            <div style={textStyle2}>8,825 Tweets</div>
            <br />
            <div style={textStyle1}><a><b>#Nissan</b></a></div>
            <div style={textStyle2}>4,136 Tweets</div>
            <br />
            <div style={textStyle1}><a><b>#YogiInsultsKarnataka</b></a></div>
            <div style={textStyle2}>2,228 Tweets</div>
            <br />
            <div style={textStyle1}><a><b>#MyntraEndOfReasonSale</b></a></div>
            <div style={textStyle2}>4,411 Tweets</div>
            <br />
            <div style={textStyle1}><a><b>#TigerZindaHai</b></a></div>
            <div style={textStyle2}><a>138K Tweets</a></div>
            <br />
            <div style={textStyle1}><a><b>#FridayFeeing</b></a></div>
            <div style={textStyle2}><a>@HasuraHQ is Tweeting about this</a></div>
            <br/>
            <div style={textStyle1}><a><b>#ForbesIndiaCeleb100</b></a></div>
            <div style={textStyle2}><a>4,528 Tweets</a></div>
            <br/>
            <div style={textStyle1}><a><b>Nitin Patel</b></a></div>
         </div>
         <Card style={{height: 380,
            width: 275,
            margin:1,
            display: 'inline-block',
            float: 'right',
            marginRight: -810,
            marginTop: -672,
            cursor: 'pointer'}}>
            <Subheader style={{ color: "black", fontFamily: "Helvetica", fontSize: 18 }}><b>Who to follow </b>
            <span style={{ color: "#1c94e0", fontSize: 9, cursor: 'pointer' }}><a style={{fontSize: 12}}><b>.</b> Refresh <b>.</b> View all</a></span>
            </Subheader>
            <div>
                <img src={require('./PM.jpg')} style={{ height : 50,
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
                          <p><b>PMO India</b><p style={subtitle}>@PMOIndia</p> </p>
                          <button style={button}>Follow</button>
                    </CardText>
                </div> 
                </div>
                <hr />
                <div>
                <img src={require('./Aamir.jpg')} style={{ height : 50,
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
                          <p><b>Aamir Khan</b><p style={subtitle}>@aamir_khan</p> </p>
                          <button style={button}>Follow</button>
                    </CardText>
                </div> 
                </div>
                <hr />
                <div>
                <img src={require('./Skill.png')} style={{ height : 50,
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
                          <p><b>Skillsoft</b><p style={subtitle}>@skillsoft</p> </p>
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
                <p><b>Find people you know</b><p style={{marginTop: -1, marginRight:0, fontSize:11,paddingLeft:1,display: 'inline-block',
                color:'grey'}}>Import your contacts from Gmail</p> </p>
                </CardText>
                <br/>
                
                <span style={{ color: "#1c94e0", fontSize: 13,marginLeft:12, cursor: 'pointer' }}><a>Connect other address books</a></span>
             </Card>

        </Card>
        <Card style={{height: 150,
            width: 275,
            margin:1,
            display: 'inline-block',
            float: 'right',
            marginRight:140,
            marginTop: -1027,
            cursor: 'pointer'}}>>
            <CardText>
            <p style={subtitle}>© 2017 Twitter About HelpCenter Terms Privacy policy Cookies Ads info  Brand Blog Status Apps Jobs Marketing Businesses Developers </p>
            </CardText>
            <br/>
            
            <img src={require('./Advertise.png')} style={{ height : 20,
                width : 20,display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                marginTop: 0,
                marginRight :40,
                marginLeft :20,
                borderRadius: '10%'
                }} />
                <span style={{ color: "#1c94e0", fontSize: 12,marginLeft:45, cursor: 'pointer' }}><a>Advertise with Twitter</a></span>
             

        </Card>

        </div>
       
);

export default Timeline;
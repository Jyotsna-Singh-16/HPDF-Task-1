import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Timeline from './Timeline';
import Timeline2 from './Timeline2';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => ( 
<MuiThemeProvider>
<Navbar />
<Timeline />
</MuiThemeProvider>
);

const Aadhar=() =>(
<MuiThemeProvider>
 <Navbar2/>
 <Timeline2/>
</MuiThemeProvider>
);


ReactDOM.render(<BrowserRouter><Switch><Route path="/search" component={Aadhar} /> <Route path="/" component={App}/></Switch></BrowserRouter> , document.getElementById('root')); 


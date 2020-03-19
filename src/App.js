import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Compare from './components/pages/Compare';
import History  from './components/pages/History';
import Login from './components/pages/Login';
import Result from './components/pages/Result';

import axios from 'axios';
import './App.css';

class App extends Component{
    state = {
        users: [],
      }
    async componentDidMount(){
        
        const res = await axios.get(`http://localhost:3000/HistoryData.js`);
        console.log(res);
        this.setState({users:res.data, loading:false});
    
      }
    render(){
        return(
            <Router>
            <div className="App">
                <NavBar title="Docompar" icon="fab fa-github" />
                <div className='container'>
                    <Switch>
                    <Route exact path='/history'   component={History} />
                    <Route exact path='/compare'   component={Compare}/>
                    <Route exact path='/logout'   component={Login}/>
                    <Route exact path='/result'   component={Result}/>

                    </Switch>

                </div>

            </div>
            </Router>


        );
    }
}
export default App
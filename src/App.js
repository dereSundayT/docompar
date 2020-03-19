import React, {Component,Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import Compare from './components/pages/Compare';
import History  from './components/pages/History';
import Login from './components/pages/Login';
import Result from './components/pages/Result';

import axios from 'axios';
import './App.css';
import './Style.css';

class App extends Component{
    state = {
        histo: [],
      }
    async componentDidMount(){
        const res = await axios.get('https://decompar.herokuapp.com/api/HistoryData.js');
        this.setState({histo: res.data});
        
      }
    render(){
        const {histo} = this.state
        console.log(histo)
        return(
            <Router>
            <div className="App">
                <NavBar title="Docompar" icon="fab fa-github"/>
                <div className='container'>
                    <Switch>
                    
                    <Route exact path='/history' 
                    render={props => (
                    <Fragment>
                        <History   histo={histo}   component={History} />
                    </Fragment>
            )} />
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
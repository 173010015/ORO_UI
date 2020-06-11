import React,{ Component } from 'react';
import { Route} from 'react-router-dom';
import Login from './components/UserComponent/Login';



class App extends Component{
  render(){
    return (
      <div>
      <Route path="/oro/login" exact component={Login}/>
      </div>
    );
  }

}

export default App;

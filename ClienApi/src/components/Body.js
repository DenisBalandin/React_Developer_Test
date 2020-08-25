import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AllUsers from './AllUsers';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import NewUser from './NewUser';
import EditPage from './EditPage';


class Body extends Component{
    render(){
        return(
            <div>
                <Route exact path="/allusers"  component={AllUsers}/>
                <Route exact path="/login"  component={LogIn}/>
                <Route exact path="/signup"  component={SignUp}/>
                <Route exact path="/newuser"  component={NewUser}/>
                <Route exact path="/"  component={Home}/>
                <Route exact path="/editpage/:userid" component={EditPage} />
            </div>
        );
    }
}
export default Body;
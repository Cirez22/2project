import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeView from './views/HomeView';
import Login from './views/Login';
import Register from './views/Register';
import UserDash from './views/UserDash';
import SideBar from "./components/UserInterface/SideBar";
import Dashboard from "./components/UserInterface/Dashboard";
import Works from './components/UserInterface/Works/Works'
import MyWorks from './components/UserInterface/MyWorks/MyWorks'
import Messages from './components/UserInterface/Messages/Messages'
import Account from './components/UserInterface/Account/Account'
import Settings from './components/UserInterface/Settings/Setting'

import NewWork from './components/UserInterface/Works/NewWork'



function App() {


 
  return (

    <div>
      <BrowserRouter> 

          <div className="container">
            <div className="row">
              <div className="col-3">

                <SideBar />
              </div>
              <div className="col-9">
                <Switch>

                  <Route exact path="/userinterface" component={UserDash} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/works" component={Works} />
                  <Route exact path="/myworks" component={MyWorks} />
                  <Route exact path="/messages" component={Messages} />
                  <Route exact path="/account" component={Account} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/newwork" component={NewWork} />



                </Switch>

              </div>
            </div>
          </div>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

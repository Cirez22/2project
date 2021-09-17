import { BrowserRouter, Switch, Route } from "react-router-dom";

// import React, { useEffect, useState } from 'react';
import HomeView from './views/HomeView';
import Login from './views/Login';
import Register from './views/Register';
import UserDash from './views/UserDash';
import Dashboard from "./components/UserInterface/Dashboard";
import MessagesView from './components/UserInterface/Messages/MessagesView'
import SettingView from './components/UserInterface/Settings/SettingView'
import AccountView from './components/UserInterface/Account/AccountView'

import NewWork from './components/UserInterface/Works/NewWork'
import PostedWork from './components/UserInterface/Works/PostedWork'
import WorksView from "./components/UserInterface/Works/WorksView";
import MyWorksView from "./components/UserInterface/MyWorks/MyWorksView";



function App() {


 

  return (

    <div>
      <BrowserRouter> 

          <div className="container">
            <div className="row">
              {/* <div className="col-3">

                <SideBar />
              </div> */}
              <div className="col-9">
                <Switch>

                  <Route exact path="/userinterface" component={UserDash} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/worksview" component={WorksView} />
                  <Route exact path="/myworksview" component={MyWorksView} />
                  <Route exact path="/newwork" component={NewWork} />
                  <Route exact path="/postedwork" component={PostedWork} />
                  <Route exact path="/settingview" component={SettingView} />
                  <Route exact path="/accountview" component={AccountView} />
                  <Route exact path="/messagesview" component={MessagesView} />




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

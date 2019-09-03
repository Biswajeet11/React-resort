import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import NavBar from './components/Navbar'
import Errors from './pages/Error';
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        {/* <Route exact path='/' component={Errors} /> */}
      </Switch>
    </div>
  )
}

export default App;

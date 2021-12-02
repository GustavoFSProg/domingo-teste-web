import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import GetId from './pages/Get-ID/GetId'
import Register from './pages/register/Register'
import Update from './pages/Update/Update'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/register" component={Register} />
        <Route path="/get" component={GetId} />
        <Route path="/update" component={Update} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

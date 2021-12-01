import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import GetId from './pages/Get-ID/GetId'
import Register from './pages/register/Register'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/register" component={Register} />
        <Route path="/get" component={GetId} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

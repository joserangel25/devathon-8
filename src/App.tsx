
import { Route, Switch } from 'wouter'
import './App.css'
import { LayoutMain } from './layouts/LayoutMain'

function App() {

  return (
    <>
      <LayoutMain>
        <div></div>
        <Switch>
          <Route path="/" component={MyRute} />
          <Route path="/letters" component={Letters} />
        </Switch>
      </LayoutMain>
    </>
  )
}

export default App


const MyRute = () => {
  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
}

const Letters = () => {
  return (
    <div>
      <h1>Cartas</h1>
    </div>
  )
}
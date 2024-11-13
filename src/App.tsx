
import { Route, Router } from 'wouter'
import { LayoutMain } from './layouts/LayoutMain'
import { Gps, Letters } from './pages'
import './App.css'

function App() {

  return (
    <>
      <LayoutMain>
        <Router>
          <Route path="/" component={Gps} />
          <Route path="/letters" component={Letters} />
        </Router>
      </LayoutMain>
    </>
  )
}

export default App

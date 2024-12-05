
import { Route, Router } from 'wouter'
import { LayoutMain } from './layouts/LayoutMain'
import { Gps, Letters, CookiesPage } from './pages'

import './App.css'

function App() {

  return (
    <>
      <LayoutMain>
        <Router>
          <Route path="/" component={Gps} />
          <Route path="/letters" component={Letters} />
          <Route path="/cookies" component={CookiesPage} />
        </Router>
      </LayoutMain>
    </>
  )
}

export default App

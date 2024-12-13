
import { Route, Router } from 'wouter'
import { LayoutMain } from './layouts/LayoutMain'
import { Gps, Letters, CookiesPage, ChildsPage, ReindeersPage } from './pages'

import './App.css'

function App() {

  return (
    <>
      <LayoutMain>
        <Router>
          <Route path="/" component={Gps} />
          <Route path="/letters" component={Letters} />
          <Route path="/cookies" component={CookiesPage} />
          <Route path="/childs" component={ChildsPage} />
          <Route path="/reindeers" component={ReindeersPage} />
        </Router>
      </LayoutMain>
    </>
  )
}

export default App

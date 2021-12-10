// Packages, CSS, Context, Utils, Data, Components, UI, Components, Media
// Packages
import { Route, Switch } from 'react-router-dom'
// Components
import Layout from './Components/Layout/Layout'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Masks from 'Components/Shop/Masks'
import Scrubbies from 'Components/Shop/Scrubbies'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <Projects />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/shop'>
          <Shop />
        </Route>
        <Route path='/shop/masks'>
          <Masks />
        </Route>
        <Route path='/shop/scrubbies'>
          <Scrubbies />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App

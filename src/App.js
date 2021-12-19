// Packages, CSS, Context, Utils, Data, Components, UI, Components, Media, Data
// Packages
import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'
// Components
import Layout from './Components/Layout/Layout'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Masks from 'Components/Shop/Masks/Masks'
import Scrubbies from 'Components/Shop/Scrubbies/Scrubbies'
import Admin from 'Components/Admin/Admin'

// initialize google analytics
ReactGA.initialize('UA-1632848-21')
ReactGA.pageview('app')

function App() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0)
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop,
          })
        }
      }, 0)
    }
  }, [pathname, hash, key]) // do this on route change

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
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App

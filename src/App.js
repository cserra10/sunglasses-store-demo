import React from 'react';
import About from './pages/About'
import Home from './pages/Home'
import Testimonials from './pages/Testimonials'
import Container from '@material-ui/core/Container'
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import Layout from './Layout'

const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: true,
    path: '/about',
    component: About
  },
  {
    exact: true,
    path: '/testimonials',
    component: Testimonials
  },
  {
    path: '*',
    component: () => <Redirect to="/" />
  }
];


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Container maxWidth="md">
          <Switch>
            {routes.map((route, i) => {
              const Component = route.component;

              return (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => <Component {...props} />}
                />
              );
            })}
          </Switch>
        </Container>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

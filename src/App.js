import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import { ThemeProvider } from '@material-ui/styles';
import theme from './styles/customMuiTheme';
import './styles/index.scss';
import CatsState from './context/cats/CatsState';
import FavsState from './context/favs/FavsState';
import GetFavsWrapper from './components/GetFavsWrapper';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './components/pages/About';
import CatSingle from './components/pages/CatSingle';
import Favs from './components/pages/Favs';
import Gallery from './components/pages/Gallery';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CatsState>
        <FavsState>
          <GetFavsWrapper>
            <Switch>
              <Router>
                <ScrollToTop />
                <Navbar />
                <div className="container">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      render={props => <Home {...props} />}
                    />
                    <Route
                      exact
                      path="/about"
                      render={props => <About {...props} />}
                    />
                    <Route
                      exact
                      path="/gallery"
                      render={props => <Gallery {...props} />}
                    />
                    <Route
                      exact
                      path="/favs"
                      render={props => <Favs {...props} />}
                    />
                    <Route
                      exact
                      path="/single/:id"
                      render={props => <CatSingle {...props} />}
                    />
                    <Route component={NotFound} />
                  </Switch>
                </div>
                <Footer />
              </Router>
            </Switch>
          </GetFavsWrapper>
        </FavsState>
      </CatsState>
    </ThemeProvider>
  );
};

export default App;

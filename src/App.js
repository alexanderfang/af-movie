import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import { blue, pink, red } from '@material-ui/core/colors';
import CustomAppBar from './components/AppBar/CustomAppBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './configs/routes';
import MovieDetail from './containers/MovieDetail';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';

const useStyles = makeStyles({
  appBarSpace: {
    height: 64,
  }
});

function App() {

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: red[500],
      },
      secondary: {
        main: pink[500],
      }
    }
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: blue[500],
      },
      secondary: {
        main: pink[500],
      }
    }
  });

  const [isDark, toggleIsDark] = useState(true);

  useEffect(() => {
    if(isDark){
      document.body.style.backgroundColor = '#212121';
    } else {
      document.body.style.backgroundColor = '#fff';
    }
  }, [isDark])

  return (
    <Router>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CustomAppBar theme={{ isDark, toggleIsDark }} />
        <Switch>
          {routes.map((route) => (
            <Route 
              key={route.path}
              component={route.component}
              path={route.path}
              exact={route.path === '/'}
            />
          ))}
          {/* <Route exact key="/" path="/" component={Home} /> */}
          <Route 
            key="movie-detail"
            component={MovieDetail}
            path="/movie/:id"
          />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;

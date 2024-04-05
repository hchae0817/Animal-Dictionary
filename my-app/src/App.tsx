import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
//import React, { ReactElement } from 'react';
import Home from './component/Home'
// import Statistic from './component/Statistic'
import Navbar from './component/Navbar'
import Search from './component/Search';
import Statistic from './component/Statistic';

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "Search", element: <Search /> },
    { path: "Statistic", element: <Statistic />}
    // ...
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppWrapper />
    </Router>
  );
};

export default App;
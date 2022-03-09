import Navbar from 'components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';


const Routes = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default Routes;

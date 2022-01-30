import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import ListadoPeliculas from './ListadoPeliculas';

function App() {

  return (
  <BrowserRouter>
    <Switch>
        <Route path="/blog">
          <Blog></Blog>  
        </Route>

        <Route path="/">
          <ListadoPeliculas></ListadoPeliculas>  
        </Route>
      </Switch>
  </BrowserRouter>
    
  );
}

export default App;

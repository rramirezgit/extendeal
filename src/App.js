import React from 'react';
import { Navbar } from "./components/NavBar/Navbar";
import Products from "./views/Products/Products";
import NewProduct from './views/NewProduct/NewProduct';
import ProductEdit from './views/EditProduct/ProductEdit';
import DetailsProductContainer from './views/DetailsProduct/DetailsProductContainer'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import DataProvider from './components/context/DataContext';

function App() {

  return (
    <DataProvider>
      <div className="App">
        <Router>
        <Navbar />
          <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/newProduct" component={NewProduct} /> 
          <Route exact path="/product/:productId" component={DetailsProductContainer} /> 
          <Route exact path="/product/:productId/edit" component={ProductEdit} /> 
                  
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;

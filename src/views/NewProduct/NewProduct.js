import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './styles.css';
import {
  Grid,
  Container
} from '@material-ui/core';
import Product from '../../components/Products/Product/Product';
import ItemForm from '../../components/ItemForm';
import PageLoading from '../../views/PageLoading/PageLoading';
import Select from '@material-ui/core/Select';
// import api from '../api';

const NewProduct = () => {
  const history = useHistory();
  const [state, setstate] = useState({
    loading: false,
    error: null,
    form: {
      title: '',
      image_src: '',
      free_shipping: '',
      price: '',
      original_price: '',
      features: '',
      currency: '$',
      decimals: '',
      has_loyalty_discount: false
    }
  })


  const handleChange = e => {
    let value;
    e.target.name == "free_shipping" ? value = e.target.checked : value = e.target.value
    setstate({
      form: {
        ...state.form,
        [e.target.name]: value,
      },
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setstate({ ...state, loading: true, error: null });

    try {
      await fetch(`http://localhost:3001/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state.form)
      });
      setstate({ ...state, loading: false });
      history.push("/");
    } catch (error) {
      setstate({ ...state, loading: false, error: error });
    }
  };


  if (state.loading) {
    return <PageLoading />;
  }
  if (state.form) {
    return (
      <>
        <div style={{ width: "100%" }} className="background-viewproducts">
          <div style={{ margin: "90px auto", width: "90%" }} className="containerGrid">
            <Grid container item xs={10}>
              <Container>
                <Product
                  title={state.form.title || 'Title'}
                  image_src={state.form.image_src || 'http://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png'}
                  free_shipping={state.form.free_shipping || false}
                  price={state.form.price || '0'}
                  features={state.form.features || ''}
                  currency={state.form.currency || '$'}
                />
              </Container>
            </Grid>
            <Grid container item xs={7}>
              <h1>New Item</h1>
              <ItemForm
                onChange={handleChange}
                onSubmit={handleSubmit}
                formValues={state.form}
                error={state.error}
              />
            </Grid>
          </div>
        </div>
      </>
    );
  }
}

export default NewProduct;

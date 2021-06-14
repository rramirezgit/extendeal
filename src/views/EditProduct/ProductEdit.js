import React, { useState, useEffect } from 'react';
import './ProductEdit.css';
import {
  Grid,
  Container
} from '@material-ui/core';
import Product from '../../components/Products/Product/Product';
import ItemForm from '../../components/ItemForm';
import PageLoading from '../PageLoading/PageLoading';
// import api from '../api';

const ProductEdit = (props) => {
  const [state, setstate] = useState({
    loading: true,
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


  useEffect(() => {
    setstate({ ...state, loading: true, error: null });

    fetch(`https://serverextendeal.herokuapp.com/items?q=${props.match.params.productId}`)
      .then(res => res.json())
      .then(
        (data) => {
          setstate({ ...state, loading: false, form: data[0] });
        },
        (error) => {
          setstate({ ...state, loading: false, error: error });
        }
      )
  }, [])

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
      await fetch(`https://serverextendeal.herokuapp.com/items/${props.match.params.productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state.form)
      });

      setstate({ ...state, loading: false });

      props.history.push('/');
    } catch (error) {
      setstate({ ...state, loading: false, error: error });
    }
  };


  if (state.loading) {
    return <PageLoading />;
  }

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

export default ProductEdit
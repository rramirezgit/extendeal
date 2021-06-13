import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Container
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import swal from 'sweetalert';
import './DetailsProduct.css';
import Product from '../../components/Products/Product/Product';

function DetailsProduct(props) {
  const history = useHistory();
  const handleClick = () => history.push(`/Product/${product.id}/edit`);


  const product = props.product[0];

  const swaler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
          props.onDeleteproduct()
        } else {
          swal("Your file is safe!");
        }
      });
  }

  return (
    <>
      <div style={{ width: "100%" }} className="background-viewproducts">
        <div style={{ margin: "90px auto", width: "90%" }} className="containerGrid">
          <Grid container item xs={10}>
            <Container>
              <Product
                title={product.title || 'Title'}
                image_src={product.image_src || 'http://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png'}
                free_shipping={product.free_shipping || false}
                price={product.price || '0'}
                features={product.features || ''}
                currency={product.currency || '$'}
              />
            </Container>
          </Grid>
          <Grid container item xs={7}>
            <h2>Actions</h2>
            <Container>
              <div>
                <Button className="productDetails__buttons" type="submit" variant="contained" color="primary" onClick={handleClick}>
                  edit
                </Button>
              </div>
              <br />
              <div>
                <Button className="productDetails__buttons" type="submit" variant="contained" color="secondary" onClick={swaler}>
                  delete
                </Button>
              </div>
            </Container>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default DetailsProduct;

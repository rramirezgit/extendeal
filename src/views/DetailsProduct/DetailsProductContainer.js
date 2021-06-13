import React, { useState, useEffect } from 'react';
import DetailsProduct from './DetailsProduct';
import PageLoading from '../PageLoading/PageLoading';

const DetailsProductContainer = (props) => {
  const [state, setstate] = useState({
    loading: true,
    error: null,
    data: undefined,
  })

  useEffect(() => {
    setstate({ ...state, loading: true, error: null });
    fetch(`http://localhost:3001/items?q=${props.match.params.productId}`)
      .then(res => res.json())
      .then(
        (data) => {
          setstate({ ...state, loading: false, data: data });
        },    
        (error) => {
          setstate({ ...state, loading: false, error: error });
        }
      )
  }, [])

  const handleDeleteproduct = async e => {
    setstate({ ...state, loading: true, error: null });

    fetch(`http://localhost:3001/items/${props.match.params.productId}`, { method: 'DELETE' })
      .then(
        () => {
          props.history.push('/');
          setstate({ ...state, loading: false });
        }, (error) => {
          setstate({ ...state, loading: false, error: error });
        }
      )
  };


  if (state.loading) {
    return <PageLoading />;
  }


  return (
    <DetailsProduct
      onDeleteproduct={handleDeleteproduct}
      product={state.data}
    />
  );

}

export default DetailsProductContainer;


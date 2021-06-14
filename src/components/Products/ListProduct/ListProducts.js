import React, { useContext, useEffect } from 'react';
import {
    Box,
    Container
} from '@material-ui/core';
import { DataContext } from '../../context/DataContext';
import ProductCard from '../ProductCard/ProductCard';
import PageLoading from '../../../views/PageLoading/PageLoading';
import './style.css';


const ListProducts = () => {

    const { products, saveProducts } = useContext(DataContext);
    let loading = true

    useEffect(() => {
        fetch(`https://serverextendeal.herokuapp.com/items`)
            .then(res => res.json())
            .then(
                (data) => {                    
                    saveProducts({
                        items: data
                    })
                    loading = false
                })
            .catch(error => {
                saveProducts({
                    items: []
                })
                loading = false

            });
    }, [])

    if (loading === true && !products.items) {
        return <PageLoading />;
    }

    if (products.items.length === 0) {
        return "nose encontro";
    }

    return (
        <Container className="mainContainer_products" >
            <Box className="containerBox_product">
                {
                    products.items.map(product => (
                        <ProductCard
                            key={product.id}
                            item={product}
                        />
                    ))
                }
            </Box>
        </Container>
    );
}

export default ListProducts;
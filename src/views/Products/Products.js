import React, { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../components/context/DataContext';
import ListProducts from '../../components/Products/ListProduct/ListProducts';
import SearchBar from 'material-ui-search-bar';
import './products.css';
import { Container } from '@material-ui/core';



const Products = () => {

    const { saveProducts } = useContext(DataContext);

    //State to save search from input
    const [searchValue, setSearchValue] = useState('');

    //Function to get items by search
    useEffect(() => {
        // history.push('/')
        fetch(`https://serverextendeal.herokuapp.com/items?q=${searchValue}`)
            .then(res => res.json())
            .then(
                (data) => {
                    data.length !== 0 ?
                        saveProducts({
                            items: data
                        })
                        : saveProducts({
                            items: data
                        })
                })
            .catch(error => {
                console.error(error);
            });
    }, [searchValue])

    return (
        <>
            <div style={{ width: "100%" }} className="background-view">
                <div style={{ margin: "100px auto", width: "90%" }} className="containerGrid">
                    <Container>
                        <SearchBar
                            value={searchValue}
                            // onChange={(e) => setSearchValue(e) }  

                            onRequestSearch={(e) => setSearchValue(e)}
                            placeholder="Search ..."
                            autoFocus
                        />
                        <ListProducts />
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Products;
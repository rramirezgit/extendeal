const {
    getItemsList,
} = require('');
  

describe("getItemsList", () => {

    it("should test result data", () => {
        //axios.get = jest.fn().mockImplementation(() => ({
            // items: [{
            //     "id": "MLA885018383",
            //     "title": "Nokia 23 M 32gb 2gb - Exclusivo Mercado Libre",
            //     "image_src": "http://http2.mlstatic.com/D_677725-MLA43953776684_102020-I.jpg",
            //     "free_shipping": true,
            //     "price": "14.999",
            //     "original_price": "19.999",
            //     "discount": 25,
            //     "currency": "$",
            //     "decimals": "00",
            //     "has_loyalty_discount": false
                
            // }]
        //}));

        getItemsList("calculadora").then(result => {
            expect(result.items.length).toBeGreaterThanOrEqual(5)
        });
    });
});
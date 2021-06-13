const {
    getItemsList,
    getItemsByCategory
} = require('../server/services/index');
  
const axios = require("axios").default;

describe("getItemsList", () => {

    it("should test result data", () => {
        axios.get = jest.fn().mockImplementation(() => ({
            items: [{
                "id": "MLA885018383",
                "title": "Nokia 23 M 32gb 2gb - Exclusivo Mercado Libre",
                "image_src": "http://http2.mlstatic.com/D_677725-MLA43953776684_102020-I.jpg",
                "free_shipping": true,
                "link": {
                "url": "https://articulo.mercadolibre.com.ar/MLA-885018383-nokia-23-m-32gb-2gb-exclusivo-mercado-libre-_JM?variation=66536334371&hide_psmb=true#reco_item_pos=0&reco_backend=promotions-sorted-by-score-mla-B&reco_backend_type=low_level&reco_client=seller-promotions&reco_id=927af3c1-c403-492e-be24-9f8064d0a4d3"
                },
                "price": {
                "price": "14.999",
                "original_price": "19.999",
                "discount": 25,
                "currency": "$",
                "decimals": "00",
                "has_loyalty_discount": false
                }
            }]
        }));

        getItemsList("calculadora").then(result => {
            expect(result.items.length).toBeGreaterThanOrEqual(5)
        });
    });
});

describe("getItemsByCategory", () => {

    it("should test result data", () => {
        axios.get = jest
        .fn()
        .mockImplementation(() => ({ data: { id: "MLA1039" } }));

        getItemsByCategory("MLA1039").then(result => {
            expect(result.items.length).toBeGreaterThanOrEqual(5)
        });
    });
});
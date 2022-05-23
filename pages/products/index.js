import Box from '../../styles/Box'

import BtnsChoiceProduct from "../../components/BtnsChoiceProduct";
import ProductsHeader from "../../components/routes/products/ProductsHeader";
import GetTheBest from "../../components/routes/products/GetTheBest";
import ChartsPage from "../../components/routes/products/ChartsPage";
import Features from "../../components/routes/products/Features";
import products from "../../components/routes/products/productSingle/productInfoItems";

const Products = ({productInfoItems}) => {

    console.log(productInfoItems, "productInfoItems - index.js dla products")

    return (
        <Box>
            <ProductsHeader/>
            <BtnsChoiceProduct productInfoItems={productInfoItems}/>
            <GetTheBest/>
            <ChartsPage/>
            <Features/>
        </Box>
    );
}

export default Products;



export async function getStaticProps(context) {

    const productInfoItems = products

    return {
        props: {productInfoItems: productInfoItems}, // will be passed to the page component as props
    }
}


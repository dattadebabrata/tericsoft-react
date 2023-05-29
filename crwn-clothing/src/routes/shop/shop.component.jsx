import SHOP_DATA from "../../shop-data.json";
import {productsContext} from "../../context/products.contexts";
import {useContext} from "react";
import ProductCard from "../../components/product-card/product-card.component"
import "./shop.styles.scss";
const Shop = () => {
    console.log(SHOP_DATA)
    const {products} = useContext(productsContext)
    return(
        <div className={"products-container"}>
            {SHOP_DATA.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop;
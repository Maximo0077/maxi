import { useState, useEffect } from "react";
import { getProductByCategory, getProducts } from "../../products.jsx";
import ItemList from "../itemList";

import { useParams } from "react-router-dom";

export const ItemListContainer = ({greeting} ) => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunc = categoryId ? getProductByCategory : getProducts
        
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [ categoryId ])

    return(
        <div>
            <h1>
                {greeting}
            </h1>
            <ItemList products={products}/>
        </div>
    )
}


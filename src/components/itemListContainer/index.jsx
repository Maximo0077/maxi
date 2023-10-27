import { useState, useEffect } from "react";
import ItemList from "../itemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

export const ItemListContainer = ({greeting} ) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const q = query(collection(db, 'productos'), where("id", "==", id))

        getDocs(q)
            .then(response => {
                response.docs.map(doc => {
                    const data = doc.data()
                    if(data.id == id) {
                        setProduct({ id: doc.id, ...data })
                    }   
                })
                
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [id])

    return(
        <div>
            <h1>
                {greeting}
            </h1>
            <ItemList products={products}/>
        </div>
    )
}


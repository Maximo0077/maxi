import './itemDetailContainer.css'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../itemDetail'
import { getDocs, query, collection, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {
        setLoading(true)

        const collectionRef = id
            ? query(collection(db, 'products'), where('id', '==', id) )
            : collection(db, 'products')


        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
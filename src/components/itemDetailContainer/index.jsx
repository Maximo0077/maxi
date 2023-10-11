import './itemDetailContainer.css'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../itemDetail'
import { getDocs, query, collection, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const q = query(collection(db, 'products'), where("id", "==", id))

        console.log(q)

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
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
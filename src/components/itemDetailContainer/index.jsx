import './itemDetailContainer.css'
import { useState, useEffect } from 'react'
import { ItemDetail } from '../itemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const q = doc(db, 'productos', id)

        getDoc(q)
            .then(response => {
                  const data = response.data()
                  if(data){
                    setProduct({ id: response.id, ...data })
                  }else{
                    console.log('Item no existe')
                  }
                       
                    
                
                
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
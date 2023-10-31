 import React, { useContext } from 'react'
import ShopCategory from './ShopCategory'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
 
 function Product() {
  const {all_product} = useContext(ShopCategory)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
   return (
     <div>
        <Breadcrums product={product}/>
     </div>
   )
 }
 
 export default Product
 import React, { useContext } from 'react'
import ShopCategory from './ShopCategory'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import { ShopContext } from '../Context/ShopContext'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
 
 function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id == Number(productId))
  // console.log(ShopCategory) 
  return (
     <div>
        <Breadcrums product={product}/>
        <ProductDisplay product={product}/>

     </div>
   )
 }
 
 export default Product
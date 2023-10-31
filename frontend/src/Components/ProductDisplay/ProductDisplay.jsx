import React from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import './ProductDisplay.css'
function ProductDisplay(props) {
    const {product} = props 
    return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className="pproductdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">R{product.old_price}</div>
            <div className="productdisplay-right-price-new">R{product.new_price}</div>
        </div>
        <div className="productdisplay-right-discription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quod magni eius nam saepe ipsum corrupti, dolore repudiandae quisquam nulla.
        </div>
        <div className="productdisplay-select-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
            </div>
        </div>
        <button>Add To Cart</button>
        <p className='productdisplay-right-category'>
            Category: {product.category}
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay

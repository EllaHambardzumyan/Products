import React from 'react'
import {FaHeart} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import './ProductBox.css'


export default function ProductBox({product}){
    return(
        <div className='product_box'>
        <div className='product_image'>
           <img src={product.thumbnail} alt=''/>
        </div>
        <div className='product_name'>
            <p>{product.title}</p>
        </div>
        <div className='product_price'>
             <p>{product.price}</p>
        </div>
        <div className='product_buttons'>
            <button className='product_fav'><FaHeart/></button>
            <button className='product_card'>Add to card</button>
    
            <button className='product_del' onClick={()=> ('')}><RxCross2/></button>
        </div>
        </div>
    )
}
import React, { useContext } from 'react'
import './ShopCategory.css'
// import all_product from '../../all_product.json'
import Item from '../Item/Item'

const ShopCategory = (props) => {

    return (
      <div className='shop-category'>
        <img src={props.banner} alt="" />
        <div className="sort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="sort-category">
            <p>Sort by</p>
          <img src={'/Assets/dropdown_icon.png'} alt="" />
          </div>
        </div>
        <div className="product-category">
          {/* {all_product.map((item, i)=>{
            if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} category={item.category} image={item.image} new_price={item.new_price}/>
          }
          else{
            return null;
          }
        })} */}
        </div>
        <div className="explore-more">
          Explore more
        </div>
      </div>
  )
}

export default ShopCategory
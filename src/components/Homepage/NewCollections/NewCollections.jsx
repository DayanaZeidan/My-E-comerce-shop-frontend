import React from 'react'
import './NewCollections.css'
// import new_collection from '../../../new_collections.json'
import Item from '../../Item/Item'

function NewCollections() {
  // const [products, setProducts] = useContext(ProductContext);
  return (
    <div className='newcollections'>
        <h1>New Collections</h1>
        <hr/>
        <div className="collections">
            {/* {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}/>
            })} */}
        </div>
    </div>
  )
}

export default NewCollections
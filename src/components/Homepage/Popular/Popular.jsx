import React, { useContext } from 'react'
import './Popular.css'
import Item from '../../Item/Item'
import { ProductContext } from '../../../App';

function Popular() {
    const [products, setProducts] = useContext(ProductContext);
    return (
        <div className='popular'>
            <h1>Best Selling Products</h1>
            <hr />
            <div className="popular-item">
                {products.map((item,i) => {
                    return <Item key={i} item={item}/>
                })}
            </div>
        </div>
    )
}

export default Popular
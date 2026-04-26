import React from 'react'
import { Dashboard } from './Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Product } from './Product'
import { Supplier } from './Supplier'
import { Purchase } from './Purchase'

export const ContentArea = ({ products, suppliers, purchases}) => {
  return (
    <div id='content_area'>
        
            <Routes>
                <Route path='/'   element={<Dashboard 
                products={products}
                suppliers={suppliers}
                purchases={purchases}/>}/>
                <Route path='/product'   element={<Product />}/>
                <Route path='/supplier'   element={<Supplier />}/>
                <Route path='/purchase'   element={<Purchase/>}/>

            </Routes>
        
        
    </div>
  )
}

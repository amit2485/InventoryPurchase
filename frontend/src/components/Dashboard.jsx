import React from 'react'

export const Dashboard = ({products ,suppliers, purchases}) => {

  return (
    <div>
        <h1 style={{marginLeft:"20px",display:"inline-block",alignItems:"center"}}>Dashboard</h1>
        <div  style={{display:"flex",justifyContent:"space-around"}}>
            <div class="count" >
                <p>Product</p>
                <p>{products.length}</p>
        </div>
        <div class="count">
                 <p>Supplier</p>
                 <p>{suppliers.length}</p>
        </div>
        <div class="count">
                 <p>Purchase</p>
                 <p>{purchases.length}</p>
        </div>
        </div>
        
    </div>
  )
}

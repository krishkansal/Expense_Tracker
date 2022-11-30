import React from 'react'
import { useState } from 'react';

const AddTransaction =({transactions  , clicked})=>{

    const[purpose,setPurpose]=useState("")
    const [amount,setAmount]=useState(0)
    console.log(purpose);
    console.log(amount);
    

    return(
        <div style={ {marginBottom: '25px'} }>
        <div className='container'>
            <h2>Add Transaction -</h2>
            <form style={{ padding: '15px', margin: '15px', border: '1px solid black' }}>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='transaction label...' value={purpose} onChange={(e)=>setPurpose(e.target.value)}></input>
                </div>
                <div className='form-group'>    
                     <input type="text" className='form-control' placeholder='transaction amount...' value={amount} onChange={(e)=>setAmount(e.target.value)} ></input>
                </div>
            </form>
                <button className='btn btn-success' onClick={()=>clicked({ id : transactions.length+1 , transactionTitle:purpose , amount:amount})}>ADD</button>
           
        </div>
        </div>
    )
}
export default AddTransaction;
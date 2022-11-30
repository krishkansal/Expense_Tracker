import React from 'react'

const Balance=({transactions})=>{
    let myBalance = 0

    transactions.forEach(transaction => 
        myBalance += parseInt(transaction.amount)) 


    const boxStyle={
        border:'1px solid #f7f7f7',
        padding:'12px',
        margin:'12px'
    }

    return(
        <div style={boxStyle}>
            <h3>Your Balance -</h3>
            <p className='lead'> $ {myBalance}</p>
        </div>
    )
}
export default Balance;
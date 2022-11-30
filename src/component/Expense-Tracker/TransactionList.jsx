import React from 'react'
import Transaction from './Transaction';

const TransactionList=({transactions,clicked})=>{

    

    return(
        <div>
            <h2> Your Transaction History -</h2>
            <div style={{border:'5px solid #f7f7f7',margin:'10px'}}>

                <ul className='list-unstyle'>
                    {
                        transactions.map((transaction)=>
                            <Transaction
                            key={transaction.id}
                            amount={transaction.amount}
                            transactionTitle={transaction.transactionTitle}
                            clicked={()=>clicked(transaction.id)}
                            />

                        )
                    }

                </ul>
                {/* <div style={{display:'flex',justifyContent:'space-around',marginBottom:'12px',borderLeft:'3px solid green'}}>
                    <h3>Salary</h3>
                    <div className="lead">+ $ 1200</div>
                    <i className="fa-regular fa-x"></i>
                </div>

                <div style={{display:'flex',justifyContent:'space-around',marginBottom:'12px',borderLeft:'3px solid red'}}>
                    <h3>Books</h3>
                    <div className="lead">- $ 250</div>
                    <i className="fa-regular fa-x"></i>
                </div> */}

            </div>
        </div>
    )
}
export default TransactionList;
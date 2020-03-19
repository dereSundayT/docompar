import React from 'react';

const HistoryItems = ({nameOne,nameTwo,id,percent}) =>{
    return(
        <tr>
                <td> {id}</td>
    <td> <b>{nameOne} </b> & <b>{nameTwo}</b> has <b>{percent}</b> simmilarities in thier work</td>
                   <td><span className='btn btn-dark'>Re-Run</span></td>
               </tr>
    )
}

export default HistoryItems
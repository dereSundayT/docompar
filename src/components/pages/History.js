import React from 'react';
import HistoryData from '../HistoryData';
const History = () => {
    const historyComponets = HistoryData.map((history) => {
        return (
            <tr>
                <td>{history.id}</td>
            </tr>
        )

    })
    return(
        <div>
           <table className='table table-responsive'>
               <tr>
                   <th>S/N</th>
                   <th> </th>
                   <th> Action</th>
               </tr>

               {historyComponets}
           </table>
        </div>
    )
}


export default History
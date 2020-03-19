import React from 'react';
import NavBar from '../layouts/NavBar';
import HistoryItems from './HistoryItems';
import historyData from '../HistoryData';
const History = () => {
  const historyComponents=  historyData.map(history => {
        return (
        <HistoryItems nameOne={history.name_1} nameTwo={history.name_2} id={history.id} percent={history.percentage} />
        )
    })
   return(
        <div>
            <NavBar title="Docompar" icon="fab fa-500px"/>
           <table className='table table-condense'>
               <tr>
                   <th>S/N</th>
                   <th> Result</th>
                   <th>Action</th>
               </tr>
        
               
                {historyComponents}
              
               

              
            
           </table>
        </div>
    )
}


export default History
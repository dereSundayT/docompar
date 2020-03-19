import React from 'react';
//import HistoryItems from './HistoryItems';
const History = ({histo}) => {


    return(
        <div>
           <table className='table table-responsive'>
               <tr>
                   <th>S/N</th>
                   <th> </th>
                   <th>Action</th>
               </tr>
              {histo}
            
              

           </table>
        </div>
    )
}


export default History
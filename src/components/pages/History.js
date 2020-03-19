import React from 'react';
//import HistoryItems from './HistoryItems';
const History = ({histo}) => {
    // eslint-disable-next-line no-lone-blocks
    {
        for(var i=0; i<=histo.length; i++){
            console.log(histo.length);
        }
    }


    return(
        <div>
           <table className='table table-condense'>
               <tr>
                   <th>S/N</th>
                   <th> Result</th>
                   <th>Action</th>
               </tr>
               {histo}
              
            
           </table>
        </div>
    )
}


export default History
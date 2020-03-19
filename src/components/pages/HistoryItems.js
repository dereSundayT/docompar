import React from 'react';

const HistoryItems = ({history:{id,name}}) =>{
    return(
        <tr>
            <td> {name} h </td>
        </tr>
    )
}

export default HistoryItems
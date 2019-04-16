import React from 'react';

const Table = ({ rows }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Sourece</th>
          <th>Target</th>
          <th>Amount</th>
          <th>Timestamp</th>
          <th>Signature</th>
        </tr>
      </thead>
      <tbody>
      { (rows.length > 0) ? rows.map( (row, index) => {
           return (
            <tr key={ index }>
              <td>{ row.source }</td>
              <td>{ row.target }</td>
              <td>{ row.amount }</td>
              <td>{ row.timestamp }</td>
              <td>{ row.signature }</td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default Table
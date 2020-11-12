import React from 'react'

export const Table = ({ columns, data }) => {
  return (
    <table style={{ fontSize: '80%' }}>
      <thead>
        <tr>
          {
            Object.keys(columns).map(key => (
              <th key={ `col-${ key }` }>{ columns[key] }</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row, i) => (
            <tr key={ `row-${ i }` }>
              { Object.keys(columns).map((column, j) => <td key={ `${ i },${ j }` }>{ row[column] }</td>) }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
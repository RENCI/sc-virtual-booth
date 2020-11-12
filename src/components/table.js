import React from 'react'

export const Table = ({ columns, data }) => {
  return (
    <table style={{ fontSize: '80%' }}>
      <thead>
        <tr>
          {
            columns.map(column => (
              <th key={ `col-${ column.key }` }>{ column.name }</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row, i) => (
            <tr key={ `row-${ i }` }>
              { columns.map((column, j) => <td key={ `${ i },${ j }` }>{ row[column.key] }</td>) }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
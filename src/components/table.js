import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.table(({ theme }) => `
  font-size: 85%;
  color: ${ theme.color.primary.darker };
  background-color: ${ theme.color.extended.mist }33;
  & th, & td {
    border: 1px solid ${ theme.color.primary.dark }33;
    padding: ${ theme.spacing.medium };
    text-align: center;
  }
  &&& th {
    background-color: ${ theme.color.extended.mist }ff;
  }
  &&& tr:nth-child(2n - 1) {
    background-color: ${ theme.color.extended.mist }77;
  }
`)

export const Table = ({ columns, data }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}
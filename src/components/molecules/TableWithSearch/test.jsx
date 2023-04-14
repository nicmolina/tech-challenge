import React from 'react'
import { render, screen } from '@testing-library/react'
import TableWithSearch from '.'

describe('TableWithSearch', () => {
  it('renders table with rows when rows prop is provided', () => {
    const columns = ['ID', 'Account Name', 'Amount']
    const rows = [
      { id: 1, account_name: 'Account A', amount: 100 },
      { id: 2, account_name: 'Account B', amount: 200 }
    ]
    const searchText = ''

    render(
      <TableWithSearch columns={columns} rows={rows} searchText={searchText} />
    )

    const tableHead = screen.getByRole('table').querySelector('thead')
    const tableBody = screen.getByRole('table').querySelector('tbody')

    expect(tableHead).toBeInTheDocument()
    expect(tableBody).toBeInTheDocument()
    expect(tableBody.querySelectorAll('tr')).toHaveLength(rows.length)
  })

  it('renders "no transaction data" message when rows prop is empty', () => {
    const columns = ['ID', 'Account Name', 'Amount']
    const rows = []
    const searchText = ''

    render(
      <TableWithSearch columns={columns} rows={rows} searchText={searchText} />
    )

    const tableHead = screen.getByRole('table').querySelector('thead')
    const tableBody = screen.getByRole('table').querySelector('tbody')

    expect(tableHead).toBeInTheDocument()
    expect(tableBody).toBeInTheDocument()
    expect(tableBody.querySelectorAll('tr')).toHaveLength(1)
    expect(screen.getByText('There is no transaction data')).toBeInTheDocument()
  })

  it('filters rows based on search text', () => {
    const columns = ['ID', 'Account Name', 'Amount']
    const rows = [
      { id: 1, account_name: 'Account A', amount: 100 },
      { id: 2, account_name: 'Account B', amount: 200 },
      { id: 3, account_name: 'Account C', amount: 300 }
    ]
    const searchText = 'b'

    render(
      <TableWithSearch columns={columns} rows={rows} searchText={searchText} />
    )

    const tableBody = screen.getByRole('table').querySelector('tbody')

    expect(tableBody.querySelectorAll('tr')).toHaveLength(1)
    expect(screen.getByText('Account B')).toBeInTheDocument()
  })
})

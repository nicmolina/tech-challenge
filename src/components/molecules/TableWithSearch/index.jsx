import React from 'react'
import { Table, TableBody, TableRow, Paper, TableHead } from '@mui/material'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import PropTypes from 'prop-types'
import * as S from './styles'

const TableWithSearch = ({ columns, rows, searchText }) => {
  const filteredRows = rows.filter((row) => {
    if (rows.length > 0)
      return row?.account_name.toLowerCase().includes(searchText.toLowerCase())
    else return rows
  })

  return (
    <S.TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns?.map((column, index) => (
              <S.TableCellHead key={`${column}_${index}`}>
                {column}
              </S.TableCellHead>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.length > 0 ? (
            filteredRows.map((row, index) => (
              <S.TableRow key={`${row}_${index}`}>
                {Object.values(row).map((value) => (
                  <S.TableCell key={`${value}_${index}`}>{value}</S.TableCell>
                ))}
              </S.TableRow>
            ))
          ) : (
            <S.TableRow>
              <S.TableCell colSpan={8}>
                <S.TableEmptyContainer>
                  <WarningAmberIcon
                    sx={{ width: '3rem', height: '3rem', marginRight: '1rem' }}
                  />
                  There is no transaction data
                </S.TableEmptyContainer>
              </S.TableCell>
            </S.TableRow>
          )}
        </TableBody>
      </Table>
    </S.TableContainer>
  )
}

TableWithSearch.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  searchText: PropTypes.string
}

export default TableWithSearch

import styled from 'styled-components'
import {
  TableCell as MaterialCell,
  TableContainer as MaterialContainer,
  TableRow as MaterialRow
} from '@mui/material'

export const TableContainer = styled(MaterialContainer)`
  && {
    max-height: 600px;
    color: #fff;
    background-color: var(--main-color);
    border: 2px solid rgba(224, 224, 224, 1);
  }
`

export const TableCellHead = styled(MaterialCell)`
  && {
    background-color: var(--main-color);
    color: #fff;
    font-weight: 500;
  }
`

export const TableRow = styled(MaterialRow)`
  :hover {
    background-color: #022547;
    cursor: pointer;
  }
`

export const TableCell = styled(MaterialCell)`
  && {
    color: #fff;
  }
`
export const TableEmptyContainer = styled.div`
  display: flex;
  height: 6rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.4rem;
  margin: auto;
  font-weight: 600;
`

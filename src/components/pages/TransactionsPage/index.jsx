import { TableWithSearch } from '../../molecules'
import { InputAdornment, FormControl } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useClientDetailsProvider } from '../../../contexts/client/ClientDetailsProvider'
import { useState } from 'react'
import * as S from './styles'
import { TransactionTemplate } from '../../templates/index'

const TransactionsPage = () => {
  const [searchText, setSearchText] = useState('')
  const { clientTransactionsData } = useClientDetailsProvider()
  const columns = [
    'AccountName',
    'Transaction Type',
    'Transaction Description',
    'Credit Card Number',
    'Credit Card Issuer',
    'CVV',
    'Amount',
    'Currency'
  ]

  const handleSearchChange = (e) => setSearchText(e.target.value)

  return (
    <TransactionTemplate>
      <S.Wrapper>
        <S.FormWrapper>
          <FormControl
            onChange={handleSearchChange}
            sx={{
              width: '16%'
            }}
            variant="outlined"
          >
            <S.InputLabel htmlFor="outlined-adornment-password">
              Account Name
            </S.InputLabel>
            <S.OutlinedInput
              type={'text'}
              placeholder={'Search by Account Name'}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              }
              label="AccoutName"
            />
          </FormControl>
        </S.FormWrapper>
        <TableWithSearch
          columns={columns}
          rows={clientTransactionsData}
          searchText={searchText}
        />
      </S.Wrapper>
    </TransactionTemplate>
  )
}

export default TransactionsPage

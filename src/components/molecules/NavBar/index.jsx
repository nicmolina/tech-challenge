import React from 'react'
import * as S from './styles'
import { Button } from '../../atoms'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import PropTypes from 'prop-types'

const NavBar = ({ client }) => {
  return (
    <S.Wrapper>
      <S.ContentContainer>
        <S.ListContainer>
          <S.ListItem>
            {client ? (
              <Button
                startIcon={<AccountBoxIcon />}
                label={`Welcome ${client.first_name}!`}
              />
            ) : null}
          </S.ListItem>
          <S.ListItem>
            <S.Link to="/user">
              <Button label="Profile" variant="outlined" />
            </S.Link>

            <S.Link to="/table">
              <Button label="Transactions" variant="outlined" />
            </S.Link>
          </S.ListItem>
        </S.ListContainer>
      </S.ContentContainer>
    </S.Wrapper>
  )
}

NavBar.propTypes = {
  client: PropTypes.object
}

export default NavBar

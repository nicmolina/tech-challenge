import PropTypes from 'prop-types'
import * as S from './styles'
import { NavBar } from '../../molecules'
import { useClientDetailsProvider } from '../../../contexts/client/ClientDetailsProvider'

const TransactionTemplate = ({ children }) => {
  const { client } = useClientDetailsProvider()

  return (
    <S.Wrapper>
      <NavBar client={client} />
      {children}
    </S.Wrapper>
  )
}

TransactionTemplate.propTypes = {
  children: PropTypes.element
}

export default TransactionTemplate

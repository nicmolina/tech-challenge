import { TransactionTemplate } from '../../templates'
import { useClientDetailsProvider } from '../../../contexts/client/ClientDetailsProvider'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import { WarningAmber } from '@mui/icons-material'
import * as S from './styles'

const UserDetailsPage = () => {
  const { client } = useClientDetailsProvider()

  console.info('client', client)

  return (
    <TransactionTemplate>
      <S.Wrapper>
        <S.Card style={{ backgroundColor: '#373F47' }}>
          <S.CardIlustration>
            <PersonPinIcon />
          </S.CardIlustration>
          {client ? (
            <S.CardContent>
              <S.Typography variant="h6">{client.first_name}</S.Typography>
              <S.Typography variant="p">
                <strong>Job:</strong> {client.job}
              </S.Typography>
              <S.Typography variant="p">
                <strong>Job Descriptor:</strong> {client.job_descriptor}
              </S.Typography>
              <S.Typography variant="p">
                <strong>ID:</strong> {client.client_id}
              </S.Typography>
            </S.CardContent>
          ) : (
            <S.CardContent>
              <WarningAmber style={{ color: '#fff' }} />
              <S.Typography variant="h6">There is no client data</S.Typography>
            </S.CardContent>
          )}
        </S.Card>
      </S.Wrapper>
    </TransactionTemplate>
  )
}

export default UserDetailsPage

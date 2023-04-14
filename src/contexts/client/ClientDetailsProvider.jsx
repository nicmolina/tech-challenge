import { useContext, useRef, useEffect, useState } from 'react'
import { ClientDetailsContext } from './ClientDetailsContext'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import { ENDPOINT } from '../../api'

export const ClientDetailsProvider = ({ children }) => {
  const socketIo = useRef(null)
  const [client, setClient] = useState(null)
  const [clientTransactionsData, setClientTransactionsData] = useState([])

  useEffect(() => {
    socketIo.current = io(ENDPOINT)

    socketIo.current.on(
      'client-connected',
      (client) => client && setClient(client)
    )

    socketIo.current.on('market-data', (data) => {
      console.info('dataMarket', data)
      const newTransactions = { data }
      setClientTransactionsData((prevData) => [
        ...prevData,
        newTransactions.data
      ])
    })

    return () => {
      setClient(null)
      setClientTransactionsData([])
      socketIo.current.disconnect()
    }
  }, [])

  useEffect(() => {
    if (client) {
      setClientTransactionsData([])
    }
  }, [client])

  return (
    <ClientDetailsContext.Provider value={{ client, clientTransactionsData }}>
      {children}
    </ClientDetailsContext.Provider>
  )
}

ClientDetailsProvider.propTypes = {
  children: PropTypes.element
}

export const useClientDetailsProvider = () => useContext(ClientDetailsContext)

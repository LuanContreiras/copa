import { VStack, useToast, HStack } from 'native-base'
import {Share} from 'react-native'
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'

import { api } from '../services/api'

import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { Guesses } from '../components/Guesses'
import { PoolCardProps } from '../components/PoolCard'
import { PoolHeader } from '../components/PoolHeader'
import { EmptyMyPoolList } from '../components/EmptyMyPoolList'
import { Option } from '../components/Option'

interface RouteParams {
  id: string
}

export function Details() {
  const [optionSelected, setOptionSelected] = useState<'Palpites' | 'Ranking'>(
    'Palpites'
  )
  const [isLoading, setIsLoading] = useState(true)
  const [poolDetails, setPoolDetails] = useState<PoolCardProps>(
    {} as PoolCardProps
  )

  const toast = useToast()
  const route = useRoute()

  const { id } = route.params as RouteParams

  async function fetchPoolDetails() {
    try {
      setIsLoading(true)

      const response = await api.get(`/pools/${id}`)
      setPoolDetails(response.data.pool)
    } catch (error) {
      console.log(error)

      toast.show({
        title: 'Não foi possível carregar as informações do bolão',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchPoolDetails()
  }, [id])

  if (isLoading) {
    return <Loading />
  }

  async function handleShare() {
    await Share.share({
      message: poolDetails.code
    })
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title={poolDetails.title} showBackButton showShareButton onShare={handleShare}/>
      {poolDetails._count?.participants > 0 ? (
        <VStack px={5} flex={1}>
          <PoolHeader data={poolDetails} />
          <HStack bgColor="gray.800" p={1} rounded="sm" mb={5}>
            <Option
              title="Seus palpites"
              isSelected={optionSelected === 'Palpites'}
              onPress={() => setOptionSelected('Palpites')}
            />
            <Option
              title="Ranking do grupo"
              isSelected={optionSelected === 'Ranking'}
              onPress={() => setOptionSelected('Ranking')}
            />
          </HStack>

          <Guesses poolId={poolDetails.id} code={poolDetails.code}/>


        </VStack>
      ) : (
        <EmptyMyPoolList code={poolDetails.code} />
      )}
    </VStack>
  )
}

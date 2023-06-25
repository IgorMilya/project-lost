import { FC, useState } from 'react'
import { IndicatorsGroup, RadioGroupCard, ActionsButton } from 'components'
import { PageActionsBar, Pagination } from 'UI'
import { RadioButtonCardContentItemType } from 'types'
import { deliveryIndicatorItems } from './deliveryHomePage.utils'
import { useNavigate } from 'react-router-dom'

const mok: RadioButtonCardContentItemType[] = [
  {
    value: 'test',
    clientName: 'Artem',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'red', label: 'Priority' },
    timeToReady: '14min',
  },
  {
    value: 'test2',
    clientName: 'Artem2',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'green', label: 'Flexible' },
    timeToReady: '14min',
  },
  {
    value: 'test3',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    value: 'test4',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    value: 'test5',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    value: 'test6',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
  {
    value: 'test7',
    clientName: 'Artem3',
    deliveryAddress: 'test2, test3',
    orderNumber: 123123,
    status: { type: 'primary', label: 'Timely' },
    timeToReady: '14min',
  },
]

const DeliveryHomePage: FC = () => {
  const [isActiveCard, setIsActiveCard] = useState('')
  const navigate = useNavigate()

  const handleChangeActiveCard = (value: string) => {
    setIsActiveCard(value)
  }

  const handleSubmitCard = () => {
    navigate(isActiveCard)
  }
  return (
    <>
      <PageActionsBar>
        <IndicatorsGroup indicatorData={deliveryIndicatorItems} />
      </PageActionsBar>
      <RadioGroupCard
        isActiveCard={isActiveCard}
        onChange={handleChangeActiveCard}
        cardData={mok}
      />
      <ActionsButton
        titleButton="Detail Info"
        onSubmit={handleSubmitCard}
        disabled={!isActiveCard}
      />
    </>
  )
}

export default DeliveryHomePage

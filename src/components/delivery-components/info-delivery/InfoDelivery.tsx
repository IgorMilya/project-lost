import { FC, PropsWithChildren } from 'react'
import { InfoDeliveryWrapper } from './InfoDelivery.styled'
import { Stack, Typography } from '@mui/material'
import { InfoTag } from 'UI'
import { Icon } from 'assets'

interface InfoDeliveryProps extends PropsWithChildren {
  clientName: string
  deliveryAddress: string
  orderNumber: string
  readyToTime: string | number
}

const InfoDelivery: FC<InfoDeliveryProps> = ({
  clientName,
  deliveryAddress,
  readyToTime,
  orderNumber,
  children,
}) => {
  return (
    <InfoDeliveryWrapper>
      <Stack direction="row" justifyContent="space-between">
        <Stack sx={{ gap: '5px' }}>
          <Typography variant="h1" component="p" color="primary">
            {clientName}
          </Typography>
          <Typography variant="h3" component="p">
            Order # {orderNumber}
          </Typography>
        </Stack>
        <InfoTag label={readyToTime.toString()} icon={<Icon.Clock />} />
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          <Typography variant="h2" component="p" color="secondary" fontWeight="600">
            Delivery Address
          </Typography>
          <Typography variant="h3" component="p">
            {deliveryAddress}
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: '5px' }} alignItems="center">
          {children}
        </Stack>
      </Stack>
    </InfoDeliveryWrapper>
  )
}

export default InfoDelivery

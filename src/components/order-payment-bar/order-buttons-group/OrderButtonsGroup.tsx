import { FC, useState } from 'react'
import { Stack } from '@mui/material'

import { Button } from 'UI'
import { IconAddTipAmount, IconEmail } from 'assets'
import s from './OrderButtonsGroup.module.scss'

interface OrderButtonsGroupProps {
  setTipStatus: () => void
  setEmailStatus: () => void
}

const OrderButtonsGroup: FC<OrderButtonsGroupProps> = ({ setTipStatus, setEmailStatus }) => {
  const [tipActive, setTipActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)

  const handleToggleTipStatus = () => {
    setTipStatus()
    setTipActive((prevState) => !prevState)
  }
  const handleToggleEmailStatus = () => {
    setEmailStatus()
    setEmailActive((prevState) => !prevState)
  }
  return (
    <Stack direction="row" gap={4} sx={{ maxHeight: '86px' }}>
      <Button
        variant="contained"
        size="default"
        color={tipActive ? 'primary' : 'secondary'}
        fullWidth
        icon={<IconAddTipAmount />}
        className={s.button}
        fontWeight={400}
        variantText="h3"
        onClick={handleToggleTipStatus}>
        Add tip amount
      </Button>
      <Button
        variant="contained"
        size="default"
        color={emailActive ? 'primary' : 'secondary'}
        fullWidth
        icon={<IconEmail />}
        className={s.button}
        fontWeight={400}
        variantText="h3"
        onClick={handleToggleEmailStatus}>
        Email
      </Button>
    </Stack>
  )
}

export default OrderButtonsGroup
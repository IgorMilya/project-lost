import { Button, Typography } from '@mui/material/'
import { FC, ReactNode } from 'react'
import { ButtonLoginReturnType } from 'types/ComponentsReturnType/ButtonLoginReturnType'
import s from './BlurButton.module.scss'

interface BlurButtonProps {
  children: ReactNode
  value: ButtonLoginReturnType
  getValue: (value: ButtonLoginReturnType) => void
}

const BlurButton: FC<BlurButtonProps> = ({ children, value, getValue }) => {
  return (
    <Button className={s.button} onClick={() => getValue(value)}>
      <Typography variant="h1" component="span">
        {children}
      </Typography>
    </Button>
  )
}

export default BlurButton

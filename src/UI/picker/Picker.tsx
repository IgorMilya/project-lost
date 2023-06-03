import { FC, useState } from 'react'
import { Button } from 'UI'
import { IconMinus, IconPlus } from 'assets'
import { Typography } from '@mui/material'
import s from './Picker.module.scss'

interface PickerProps {
  onChange: (value: number) => void
  initialValue?: number
  handleDeleteCard: (value: boolean) => void
}

const Picker: FC<PickerProps> = ({ initialValue = 1, onChange, handleDeleteCard }) => {
  const [valuePicker, setValuePicker] = useState<number>(initialValue)

  const handleIncrementValue = () => {
    setValuePicker((prevState) => prevState + 1)
    onChange(valuePicker + 1)
  }

  const handleDecrementValue = () => {
    if (valuePicker === 1) {
      handleDeleteCard(true)
      setValuePicker(1)
    } else {
      setValuePicker((prevState) => prevState - 1)
      onChange(valuePicker - 1)
    }
  }

  return (
    <div className={s.wrapper}>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        icon={<IconMinus />}
        onClick={handleDecrementValue}
      />
      <div className={s.value}>
        <Typography variant="h3" component="p" fontWeight="600" color="text.secondary">
          {valuePicker}
        </Typography>
      </div>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        icon={<IconPlus />}
        onClick={handleIncrementValue}
      />
    </div>
  )
}

export default Picker

import { FC } from 'react'
import { Stack } from '@mui/material'
import { BlurButton } from 'UI/blur-button'
import { BtnLoginValue } from 'types/IEmployee'
import { IconDelete } from 'assets'
import digits from './digitButtonsGroup.utils'

interface DigitButtonsGroupProps {
  getValue: (value: BtnLoginValue) => void
}

const DigitButtonsGroup: FC<DigitButtonsGroupProps> = (props) => {
  const { getValue } = props

  const buttonsD = digits.map((item) => (
    <BlurButton value={item} key={item} getValue={getValue}>
      {item}
    </BlurButton>
  ))

  return (
    <Stack flexDirection="row" flexWrap="wrap" gap="16px" width="404px">
      {buttonsD}
      <BlurButton value="clear" getValue={getValue}>
        C
      </BlurButton>
      <BlurButton value={0} getValue={getValue}>
        O
      </BlurButton>
      <BlurButton value="delete" getValue={getValue}>
        <IconDelete />
      </BlurButton>
    </Stack>
  )
}

export default DigitButtonsGroup

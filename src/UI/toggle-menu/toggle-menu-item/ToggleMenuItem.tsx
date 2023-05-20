import { FC } from 'react'
import { Tab, Typography } from '@mui/material'
import s from './ToggleMenuItem.module.scss'

interface ToggleMenuItemProps {
  label: string
  value: string
  selected: string
  onClick: (value: string) => void
}

const ToggleMenuItem: FC<ToggleMenuItemProps> = ({ label, value, selected, onClick }) => {
  const isSelected = selected ? 'secondary' : 'text.primary'

  const handleChange = () => {
    onClick(value)
  }

  return (
    <Tab
      className={s.tabItem}
      onClick={handleChange}
      label={
        <Typography variant="h3" component="p" color={isSelected}>
          {label}
        </Typography>
      }
      value={value}
      disableRipple
    />
  )
}

export default ToggleMenuItem
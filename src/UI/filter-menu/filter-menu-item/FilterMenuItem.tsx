import { FC } from 'react'
import { Button } from 'UI'
import s from './FilterMenuItem.module.scss'

interface FilterMenuItemProps {
  value: string
  label: string
  onChange: (value: string) => void
  isSelected?: boolean
}

const FilterMenuItem: FC<FilterMenuItemProps> = ({ value, label, onChange, isSelected }) => {
  const handleClick = () => {
    onChange(value)
  }
  return (
    <Button
      variantText="h3"
      fontWeight={400}
      color={isSelected ? 'primary' : 'secondary'}
      className={s.toggleButton}
      onClick={handleClick}
      size="default"
      variant="outlined">
      {label}
    </Button>
  )
}

export default FilterMenuItem

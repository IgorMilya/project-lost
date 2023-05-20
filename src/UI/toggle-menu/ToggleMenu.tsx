import { FC, useState } from 'react'
import { Tabs } from '@mui/material'
import { ToggleMenuItem } from 'UI/toggle-menu/toggle-menu-item'
import { ToggleMenuItemType } from 'types'
import s from './ToggleMenu.module.scss'

interface ToggleMenuProps {
  menuItems: ToggleMenuItemType[]
  onChange: (value: string) => void
}

const ToggleMenu: FC<ToggleMenuProps> = ({ menuItems, onChange }) => {
  const [selectedItem, setSelectedItem] = useState<string>(menuItems[0].value)

  const handleChangeMenuItem = (value: string) => {
    setSelectedItem(value)
    onChange(value)
  }

  return (
    <Tabs value={selectedItem} className={s.wrapper} centered textColor="secondary">
      {menuItems.map(({ label, value }) => (
        <ToggleMenuItem
          key={value}
          label={label}
          value={value}
          selected={selectedItem}
          onClick={handleChangeMenuItem}
        />
      ))}
    </Tabs>
  )
}

export default ToggleMenu
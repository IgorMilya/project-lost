import { Dispatch, FC, MouseEvent, SetStateAction } from 'react'
import { TableRow } from '@mui/material'
import { TableNumberColumn, ColumnText, ColumnInfoChip, ColumnAction } from 'UI'
import { OrderType, OrderTypeOfElement } from 'types'
import { Icon } from 'assets'

interface TableOrdersColumnProps {
  element: OrderType
  active: string | undefined
  setActive: Dispatch<SetStateAction<string | undefined>>
  onClickAction?: (id: string) => void
  onClickLine?: (id: string) => void
}

const TableOrdersLine: FC<TableOrdersColumnProps> = ({
  element,
  active,
  setActive,
  onClickAction,
  onClickLine,
}) => {
  const { table, totalPrice, orderType, orderNumber, id } = element
  const backgroundColor = active === id ? 'rgba(0, 0, 0, 0.04)' : 'initial'

  const handleLineWrapperClick = () => {
    if (onClickLine && id) {
      onClickLine(id)
      setActive(id)
    }
  }

  const handleSendOrder = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (onClickAction && id) {
      onClickAction(id)
    }
  }

  return (
    <TableRow
      hover
      sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer', backgroundColor }}
      onClick={handleLineWrapperClick}>
      <TableNumberColumn table={table} />

      <ColumnText title={`#${orderNumber}`} textFontWeight={600} />

      <ColumnText title={`$${totalPrice}`} textFontWeight={400} />

      <ColumnInfoChip type={orderType as OrderTypeOfElement} />

      <ColumnAction
        title="Close order"
        onClick={handleSendOrder}
        variant="contained"
        size="small"
        startIcon={<Icon.Tip />}
      />
    </TableRow>
  )
}

export default TableOrdersLine

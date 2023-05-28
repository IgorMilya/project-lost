import { FC } from 'react'
import { Table } from 'components/table'
import { IndicatorFilterBar } from 'components/indicator-filter-bar'
import { useCreateBillMutation, useGetAllOrdersQuery } from 'store/api'
import { TableDataOrders, DataTableCellFuncType, TableData } from 'types'
import { tableTitleOrder, dataTableCellOrder } from './tableOrder.utils'

const TableOrders: FC = () => {
  const { data: dataOrders } = useGetAllOrdersQuery('')
  const handleChangeFilter = (value: string[]) => {
    console.log(value)
  }
  const [createBills] = useCreateBillMutation()

  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        indicatorName={['takeAway', 'dineIn']}
        onChange={handleChangeFilter}
      />
      <Table
        data={dataOrders as TableDataOrders[]}
        tableTitles={tableTitleOrder}
        dataTableCell={dataTableCellOrder as DataTableCellFuncType<TableDataOrders>}
        onClick={createBills as (dataOrder: TableData) => void}
      />
    </>
  )
}

export default TableOrders
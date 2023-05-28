import { FC } from 'react'
import { Table } from 'components/table'
import { DataTableCellFuncType, TableData, TableDataBills } from 'types'
import { IndicatorFilterBar } from 'components/indicator-filter-bar'
import { useGetAllBillsQuery } from 'store/api'
import { tableTitleBills, dataTableCellBills } from './tableBills.utils'

const TableBills: FC = () => {
  const handleChangeFilter = (value: string[]) => {
    // eslint-disable-next-line no-console
    console.log(value)
  }

  const { data: dataBills } = useGetAllBillsQuery('')
  return (
    <>
      <IndicatorFilterBar
        filterMenuItems={[
          { value: 'delivery', label: 'Delivery' },
          { value: 'dineIn', label: 'Dine in' },
          { value: 'takeAway', label: 'Take away' },
        ]}
        indicatorName={['delivery', 'takeAway', 'dineIn']}
        onChange={handleChangeFilter}
      />
      <Table
        data={dataBills as TableDataBills[]}
        tableTitles={tableTitleBills}
        dataTableCell={dataTableCellBills as DataTableCellFuncType<TableData>}
      />
    </>
  )
}

export default TableBills
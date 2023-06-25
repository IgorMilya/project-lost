import { FC } from 'react'
import { Stack } from '@mui/material'
import { useParams } from 'react-router-dom'

import { DishesList, SearchFilterBar } from 'components'
import { useGetDishesQuery, useGetSubCategoriesInCategoryQuery } from 'store/api'
import { firstLetterUpperCase, correctionName } from 'utils'
import { FilterMenuItemType } from 'types'
import { useParamsSearchFilter } from 'hooks'
import { Pagination } from 'UI'

const DishesPageContent: FC = () => {
  const { category } = useParams()

  const {
    params: subCategory,
    search,
    page,
    handleFilterTitle,
    handleFilterCategory,
    handlePagination,
  } = useParamsSearchFilter('category')

  const { data } = useGetSubCategoriesInCategoryQuery(firstLetterUpperCase(category || 'pizza'))
  const {
    data: dishes,

    isFetching,
  } = useGetDishesQuery({
    category: subCategory || firstLetterUpperCase(category || 'pizza'),
    search,
    page,
    limit: 12,
  })

  const filterMenu: FilterMenuItemType[] | undefined =
    data &&
    data.map((item) => ({
      label: correctionName(item.title),
      value: item.title,
    }))

  return (
    <Stack sx={{ width: '100%', height: '100%', background: '#F8F9FD' }}>
      <SearchFilterBar
        subcategories={filterMenu}
        changeCategory={handleFilterCategory}
        changeTitle={handleFilterTitle}
        defaultValueFilter={subCategory?.split(',')}
        defaultValueInput={search || ''}
      />
      <DishesList dishes={dishes?.data} isLoading={isFetching} />
      {dishes && dishes.totalCount > 12 && (
        <Pagination
          marginRight="30px"
          count={Math.ceil(dishes.totalCount / 12)}
          onChange={handlePagination}
          page={Number(page)}
        />
      )}
    </Stack>
  )
}

export default DishesPageContent

import { FC } from 'react'
import { SidebarTabsList } from 'components/admin-components'
import { IconDineIn } from 'assets'
import { useParams } from 'react-router-dom'
import { useRelocateDefaultLocation } from 'hooks/useRelocateDefaultLocation.hook'
import { adminRestaurantPageTabs, ROUTES_RESTAURANT } from './adminRestaurantPage.utils'
import { AdminDishesListPage } from './admin-dishes-list-page'
import { AdminCreateDishPage } from './admin-create-dish-page'

const AdminRestaurantPage: FC = () => {
  const { restaurant } = useParams()

  useRelocateDefaultLocation({
    isParams: restaurant,
    relocateTo: adminRestaurantPageTabs[0].linkTo,
  })
  return (
    <>
      <SidebarTabsList
        sidebarTabItems={adminRestaurantPageTabs}
        titleIcon={<IconDineIn width={35} height={35} />}
        title="Restaurant"
      />
      {restaurant === ROUTES_RESTAURANT.DISHES && <AdminDishesListPage />}
      {restaurant === ROUTES_RESTAURANT.CREATE_DISH && <AdminCreateDishPage />}
    </>
  )
}

export default AdminRestaurantPage
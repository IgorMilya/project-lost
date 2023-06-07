import {
  DishesResponseType,
  DishPartialType,
  DishSubCategoriesResponseType,
  DishType,
  SidebarItemType,
} from 'types'
import { api } from './api'
import { API_CONST_DISHES } from './api.utils'

interface DishesRequest {
  category?: string
  search?: string | null
  page?: string
}

interface ParamsProps {
  category?: string
  search?: string
  page?: string
}

export const dishApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDishesByCategoryAndFilter: builder.query<DishesResponseType, DishesRequest>({
      query: ({ category, search, page }) => {
        const params: ParamsProps = {
          page: page || '1',
        }

        if (search) {
          params.search = search
        }
        if (category) {
          params.category = category
        }

        return {
          url: API_CONST_DISHES.DISHES,
          params,
        }
      },
      providesTags: ['Dish'],
    }),
    getDishById: builder.query<DishType, string>({
      query: (id) => ({
        url: `${API_CONST_DISHES.DISHES}/${id}`,
      }),
      providesTags: ['Dish'],
    }),
    updateDish: builder.mutation<DishType, DishPartialType>({
      query: (body) => ({
        url: API_CONST_DISHES.DISHES,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Dish'],
    }),
    getSvg: builder.query<{ svg: string } | undefined, string | undefined>({
      query: (icon) => ({
        url: `${API_CONST_DISHES.STATIC}${icon}`,
      }),
    }),
    getCategories: builder.query<SidebarItemType[], null>({
      query: () => ({
        url: API_CONST_DISHES.CATEGORIES,
      }),
    }),
    getSubCategoriesInCategory: builder.query<DishSubCategoriesResponseType[], string>({
      query: (category) => ({
        url: API_CONST_DISHES.CATEGORIES,
        params: {
          category,
        },
      }),
    }),
  }),
})

export const {
  useGetDishesByCategoryAndFilterQuery,
  useGetDishByIdQuery,
  useLazyGetDishByIdQuery,
  useGetCategoriesQuery,
  useGetSubCategoriesInCategoryQuery,
  useLazyGetSvgQuery,
  useGetSvgQuery,
} = dishApi

import { FC } from 'react'
import { Box } from '@mui/material'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { UserType } from 'types'
import EmployeesItem from './EmployeesItem'
import { responsive, carrouselBGC } from './EmployeesCarrousel.utils'
import s from './EmployeesCarrousel.module.scss'

interface EmployeesCarrouselProps {
  bgc: 'transparent' | 'brown'
  employeesData: UserType[]
  handleSetActiveSlide: (id: string) => void
  chosenEmployee: string
}

const EmployeesCarrousel: FC<EmployeesCarrouselProps> = (props) => {
  const { bgc, employeesData, chosenEmployee, handleSetActiveSlide } = props

  const employeesRender = () => {
    return employeesData.map((item) => {
      const isActive = chosenEmployee === item.id

      return (
        <EmployeesItem key={item.id} {...item} onClick={handleSetActiveSlide} isActive={isActive} />
      )
    })
  }

  return (
    <Box sx={{ bgcolor: carrouselBGC[bgc], display: 'inline-block' }}>
      <Carousel
        arrows={false}
        infinite
        draggable
        responsive={responsive}
        containerClass={s.carrouselWrapper}
        sliderClass={s.carrouselContainer}>
        {employeesRender()}
      </Carousel>
    </Box>
  )
}

export default EmployeesCarrousel

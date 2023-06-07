import { FC } from 'react'

import { ReservationTagGroup } from 'components/reservation-tag-group'
import { PartySize } from './party-size'

const ReservationForm: FC = () => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <PartySize label="Select party size" seats={8} />
      <ReservationTagGroup />
    </div>
  )
}

export default ReservationForm
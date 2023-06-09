import { IconCash, IconMasterCard, IconVisa } from 'assets'
import { PaymentMethodItemType } from 'types'

export const paymentMethodItems: PaymentMethodItemType[] = [
  { value: 'Cash', icon: <IconCash /> },
  { value: 'MasterCard', icon: <IconMasterCard /> },
  { value: 'Visa', icon: <IconVisa /> },
]
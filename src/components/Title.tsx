import clsx from 'clsx'
import { observer } from 'mobx-react-lite'

import { themeState } from '../state/themeState'

const Title = () => (
  <h1
    className={clsx(
      `cursor-default text-2xl md:text-3xl p-4 fixed top-0 left-0 leading-regular`,
      { 'text-black': themeState.theme === 'light' },
      { 'text-white': themeState.theme === 'dark' },
    )}
  >
    Icca
  </h1>
)

export default observer(Title)

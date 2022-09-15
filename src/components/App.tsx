import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { themeState } from '../state/themeState'
import Chance from './Chance'
import Direction from './Direction'
import Main from './Main/Main'
import Result from './Result'
import Stage from './Stage'
import Title from './Title'
import Toggle from './Toggle'

const App = () => {
  return (
    <div
      className={clsx(
        `transition-bg w-screen h-screen flex flex-col justify-center`,
        { 'bg-light': themeState.theme === 'light' },
        { 'bg-black': themeState.theme === 'dark' },
      )}
    >
      <Title />
      <Stage />
      <Toggle />
      <Main />
      <Result />
      <Direction />
      <Chance />
    </div>
  )
}

export default observer(App)

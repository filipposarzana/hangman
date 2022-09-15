import { observer } from 'mobx-react-lite'
import { keyboardState } from '../../state/keyboardState'
import Keyboard from '../Keyboard'
import Hangman from './Hangman'
import Hint from './Hint'
import KeyPress from './KeyPress'

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hint />
      <Hangman />
      <KeyPress />
      {keyboardState.isOpen && <Keyboard />}
    </div>
  )
}

export default observer(Main)

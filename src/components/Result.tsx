import React from 'react'
import { observer } from 'mobx-react-lite'
import Anime from 'react-anime'
import clsx from 'clsx'

import { quizState } from '../state/quizState'

const Result = () => {
  const resultTextClass = 'text-6xl md:text-8xl inline-block'

  const renderResult = () => {
    let resultComponent
    switch (quizState.result) {
      case 'win':
        resultComponent = <span className={`${resultTextClass} text-blue`}>WIN</span>
        break
      case 'lose':
        resultComponent = <span className={`${resultTextClass} text-red`}>LOSE</span>
        break
      default:
        break
    }

    return (
      <Anime easing="easeOutElastic" duration={750} direction="normal" delay={350} translateY={['100vh', '0']}>
        {resultComponent}
      </Anime>
    )
  }

  return (
    quizState.result && (
      <>
        <div
          className="fixed z-20 text-center pointer-events-none flex flex-col md:flex-row"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Anime easing="easeOutElastic" duration={750} direction="normal" translateY={['-100vh', '0']}>
            <span className={resultTextClass}>YOU</span>
          </Anime>{' '}
          {renderResult()}
        </div>
        <div
          className={clsx(
            'fixed w-screen h-screen opacity-75 z-10',
            { 'bg-blue-darkest': quizState.result === 'win' },
            { 'bg-red-darkest': quizState.result === 'lose' },
          )}
          onClick={quizState.reset.bind(quizState)}
        />
      </>
    )
  )
}

export default observer(Result)

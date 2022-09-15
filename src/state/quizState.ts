import { map } from 'lodash-es'
import { action, observable } from 'mobx'
import Quiz from '../class/Quiz'
import { quiz } from '../data/quiz'
import { chanceState } from './chanceState'

class QuizState {
  @observable
  stage: number

  @observable
  quizzes: Quiz[]

  @observable
  currentQuiz: Quiz

  @observable
  result: 'win' | 'lose' | null

  constructor() {
    this.quizzes = this.getQuizzes()
    this.stage = 1
    this.result = null
    this.currentQuiz = this.quizzes[this.stage - 1]
  }

  @action
  getQuizzes() {
    return map(quiz, ({ hint, answers }) => new Quiz(hint, answers))
  }

  @action
  levelUp() {
    this.stage++
    this.currentQuiz = this.quizzes[this.stage - 1]
  }

  @action
  reset() {
    this.quizzes = this.getQuizzes()
    this.stage = 1
    this.result = null
    this.currentQuiz = this.quizzes[this.stage - 1]
    chanceState.chance = 10
  }
}

export const quizState = new QuizState()

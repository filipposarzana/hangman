import { observable } from 'mobx'

class ChanceState {
  @observable
  chance: number = 10

  @observable
  resetChance() {
    this.chance = 10
  }

  @observable
  decreaseChance() {
    this.chance--
  }
}

export const chanceState = new ChanceState()

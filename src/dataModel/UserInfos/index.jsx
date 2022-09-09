/**
 * Data model for Welcome, Score and Metabolism
 */
export class UserInfos {
  /**
   *
   * @param {json} data format: Cf. USER_MAIN_DATA in /src/datas/data.js
   */
  constructor(data) {
    this.userId = data.id
    this.userInfos = data.userInfos
    this.score = 0

    if (data.score) {
      this.score += data.score
    }

    if (data.todayScore) {
      this.score += data.todayScore
    }

    this.metabolism = [
      {
        label: "calories",
        value: this.calorieFormat(data.keyData.calorieCount),
        icon: "Calories.png",
        className: "cal",
      },
      {
        label: "Proteines",
        value: data.keyData.proteinCount + "g",
        icon: "Protein.png",
        className: "prot",
      },
      {
        label: "Glucides",
        value: data.keyData.carbohydrateCount + "g",
        icon: "Glucides.png",
        className: "gluc",
      },
      {
        label: "Lipides",
        value: data.keyData.lipidCount + "g",
        icon: "LipidesFull.png",
        className: "lipi",
      },
    ]
  }

  calorieFormat(calorie) {
    return ((calorie / 1000).toFixed(3) + "kCal").replace(".", ",")
  }
}

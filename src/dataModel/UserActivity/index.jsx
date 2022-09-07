export class UserActivity {
  constructor(data) {
    this.sessions = []
    data.sessions.map((sess, index) =>
      this.sessions.push({
        ind: index + 1,
        kilogram: sess.kilogram,
        calories: sess.calories,
      })
    )
    this.units = ["kg", "Kcal"]
    this.legends = ["Poids (kg)", "Calories brûlées (kCal)"]
    this.datakeys = ["kilogram", "calories"]
    this.colors = ["#282D30", "#E60000"]
    this.yaxis = 1
  }
}

/**
 * Data model for UserRadarChart
 */
export class UserPerformance {
  /**
   *
   * @param {json} data format: Cf. USER_PERFORMANCE in /src/datas/data.js
   */
  constructor(data) {
    this.kind = data.kind
    this.data = [
      { subject: "Intensité", value: null, kind: 6 },
      { subject: "Vitesse", value: null, kind: 5 },
      { subject: "Force", value: null, kind: 4 },
      { subject: "Endurance", value: null, kind: 3 },
      { subject: "Energie", value: null, kind: 2 },
      { subject: "Cardio", value: null, kind: 1 },
    ]

    this.data.map((d) => {
      d.value = data.data.filter((perf) => perf.kind === d.kind)[0].value
      return 0
    })
  }
}

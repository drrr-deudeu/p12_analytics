export class UserAverageSessions {
  constructor(data) {
    this.sessions = [
      { pointLabel: "L", day: 1, value: 100 },
      { pointLabel: "M", day: 2, value: 200 },
      { pointLabel: "M", day: 3, value: 300 },
      { pointLabel: "J", day: 4, value: 400 },
      { pointLabel: "V", day: 5, value: 500 },
      { pointLabel: "S", day: 6, value: 600 },
      { pointLabel: "D", day: 7, value: 700 },
    ]
    this.sessions.map((d) => {
      d.value = data.sessions.filter((s) => s.day === d.day)[0].sessionLength
      return 0
    })
    this.unit = "min"
  }
}

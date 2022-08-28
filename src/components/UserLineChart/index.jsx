import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts"
function UserLineChart({ averageSessions }) {
  const height_chart = 200
  const margin = 20
  const data1 = [
    { name: "L", day: 1, sessionLength: 400 },
    { name: "M", day: 2, sessionLength: 300 },
    { name: "M", day: 3, sessionLength: 300 },
    { name: "J", day: 4, sessionLength: 200 },
    { name: "V", day: 5, sessionLength: 278 },
    { name: "S", day: 6, sessionLength: 189 },
    { name: "D", day: 7, sessionLength: 189 },
  ]
  data1.map((d) => {
    d.sessionLength = averageSessions.sessions.filter(
      (s) => s.day === d.day
    )[0].sessionLength
    return 0
  })
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='linechart__graph__tooltip'>
          <p className='label'>{`${payload[0].value}min`}</p>
        </div>
      )
    }
  }
  return (
    <div className='container__datas__charts__inline__this linechart'>
      <div className='linechart__comment'>
        <span>Durée moyenne des sessions</span>
      </div>
      <div className='linechart__graph'>
        <ResponsiveContainer width='90%'>
          <LineChart
            height={height_chart}
            data={data1}
            margin={margin}
            syncId='test'>
            <Line
              isAnimationActive={false}
              type='monotone'
              dataKey='sessionLength'
              stroke='#ffffff'
              dot={{ strokeWidth: 0, r: 0 }}
            />
            <Tooltip content={CustomTooltip} cursor={false} />
            <XAxis
              dataKey='name'
              padding={{ left: 12, right: 12 }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#ff7300" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default UserLineChart

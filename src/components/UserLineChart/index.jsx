import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts"
function UserLineChart() {
  const width = 500
  const height = 200
  const margin = 20
  const data1 = [
    { name: "L", uv: 400, pv: 2400, amt: 2400 },
    { name: "M", uv: 300, pv: 4567, amt: 2400 },
    { name: "M", uv: 300, pv: 1398, amt: 2400 },
    { name: "J", uv: 200, pv: 9800, amt: 2400 },
    { name: "V", uv: 278, pv: 3908, amt: 2400 },
    { name: "S", uv: 189, pv: 4800, amt: 2400 },
    { name: "D", uv: 189, pv: 4800, amt: 2400 },
  ]
  return (
    <div
      className='line-chart-wrapper'
      style={{ width: "258px", height: "263px" }}>
      <ResponsiveContainer>
        <LineChart
          width={width}
          height={height}
          data={data1}
          margin={margin}
          syncId='test'>
          <Line
            isAnimationActive={false}
            type='monotone'
            dataKey='uv'
            stroke='#ff7300'
          />
          <Tooltip />
          <XAxis
            dataKey='name'
            padding={{ left: 12, right: 12 }}
            tickLine={false}
            axisLine={false}
          />
          {/* <YAxis /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
export default UserLineChart

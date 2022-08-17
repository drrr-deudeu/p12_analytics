import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"
function UserLineChart() {
  const width = 500
  const height = 200
  const margin = 20
  const data1 = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 4567, amt: 2400 },
    { name: "Page C", uv: 300, pv: 1398, amt: 2400 },
    { name: "Page D", uv: 200, pv: 9800, amt: 2400 },
    { name: "Page E", uv: 278, pv: 3908, amt: 2400 },
    { name: "Page F", uv: 189, pv: 4800, amt: 2400 },
  ]
  return (
    <div className='line-chart-wrapper'>
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
        <XAxis dataKey='name' />
        <YAxis />
      </LineChart>
    </div>
  )
}
export default UserLineChart

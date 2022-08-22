import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts"
function UserLineChart() {
  const height_chart = 200
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
              dataKey='uv'
              stroke='#ff7300'
            />
            <Tooltip />
            <XAxis
              dataKey='name'
              padding={{ left: 12, right: 12 }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "white" }}
            />
            {/* <YAxis /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default UserLineChart

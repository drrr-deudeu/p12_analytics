import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts"

function UserBarchart() {
  const data = [
    { name: 1, x: 21, y: 23 },
    { name: 2, x: 22, y: 12 },
    { name: 3, x: 32, y: 15 },
    { name: 4, x: 14, y: 35 },
    { name: 5, x: 51, y: 45 },
    { name: 6, x: 16, y: 25 },
    { name: 7, x: 7, y: 17 },
    { name: 8, x: 8, y: 32 },
    { name: 9, x: 9, y: 43 },
    { name: 10, x: 24, y: 32 },
  ]
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='barchart__graph__tooltip'>
          <p className='label'>{`${payload[0].value}g`}</p>
          <p className='label'>{`${payload[1].value}Kcal`}</p>
        </div>
      )
    }
  }
  return (
    <div className='barchart'>
      <div className='barchart__legend'>
        <div className='barchart__legend__titre'>Activité quotidienne</div>
        <div className='barchart__legend__xy'>
          <div className='barchart__legend__xy__x'>
            <div className='barchart__legend__xy__x__circle'></div>
            <div className='barchart__legend__xy__x__label'>Poids (kg)</div>
          </div>
          <div className='barchart__legend__xy__y'>
            <div className='barchart__legend__xy__y__circle'></div>
            <div className='barchart__legend__xy__y__label'>
              Calories brûlées (kCal)
            </div>
          </div>
        </div>
      </div>
      <div className='barchart__graph'>
        <ResponsiveContainer>
          <BarChart
            data={data}
            barGap={8}
            // margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke='#DEDEDE'
              // x={30}
              // width={770}
            />
            <XAxis
              interval={0}
              tickCount={10}
              type='number'
              domain={["dataMin", "dataMax"]}
              dataKey='name'
              padding={{ left: 10, right: 10 }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9B9EAC" }}
              height={30}
            />
            <YAxis
              orientation='right'
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9B9EAC" }}
              width={60}
              tickMargin={20}
            />
            <Tooltip content={CustomTooltip} />
            <Bar dataKey='x' fill='#282D30' barSize={7} />
            <Bar dataKey='y' fill='#E60000' barSize={7} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default UserBarchart

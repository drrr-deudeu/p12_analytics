import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

function UserBarchart(props) {
  const sessions = props.sessions
  // const data = [
  //   { name: 1, x: 21, y: 23 },
  //   { name: 2, x: 22, y: 12 },
  //   { name: 3, x: 32, y: 15 },
  //   { name: 4, x: 14, y: 35 },
  //   { name: 5, x: 51, y: 45 },
  //   { name: 6, x: 16, y: 25 },
  //   { name: 7, x: 7, y: 17 },
  //   { name: 8, x: 8, y: 32 },
  //   { name: 9, x: 9, y: 43 },
  //   { name: 10, x: 24, y: 32 },
  // ]
  const data = []
  sessions.map((sess, index) =>
    data.push({
      ind: index + 1,
      kilogram: sess.kilogram,
      calories: sess.calories,
    })
  )

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='barchart__graph__tooltip'>
          <p className='label'>{`${payload[0].value}kg`}</p>
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
          <BarChart data={data} barGap={8}>
            <CartesianGrid vertical={false} stroke='#DEDEDE' />
            <XAxis
              interval={0}
              tickCount={data.length}
              type='number'
              domain={["dataMin", "dataMax"]}
              // dataKey='day'
              dataKey='ind'
              padding={{ left: 10, right: 10 }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9B9EAC" }}
              height={30}
            />
            <YAxis
              yAxisId='0'
              dataKey='calories'
              hide={true}
              orientation='left'
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9B9EAC" }}
              width={60}
              tickMargin={20}
            />
            <YAxis
              yAxisId='1'
              hide={false}
              allowDecimals={false}
              dataKey='kilogram'
              // domain={["dataMin" - 5, "auto"]}
              domain={["auto", "auto"]}
              orientation='right'
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9B9EAC" }}
              width={60}
              tickMargin={20}
              tickCount={3}
            />
            <Tooltip content={CustomTooltip} />
            <Bar
              dataKey='kilogram'
              fill='#282D30'
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey='calories'
              fill='#E60000'
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default UserBarchart

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  Radar,
} from "recharts"
function UserRadarChart() {
  function customTick({ payload, x, y, textAnchor, stroke, radius }) {
    return (
      <g className='recharts-layer recharts-polar-angle-axis-tick'>
        <text
          radius={radius}
          stroke='#FFFFFF'
          x={x}
          y={y}
          className='r-polar-angle-axis-tick-value'
          textAnchor={textAnchor}>
          <tspan x={x} dy='0em'>
            {payload.value}
          </tspan>
        </text>
      </g>
    )
  }
  const data = [
    { subject: "Intensité", A: 120, B: 110, C: [80, 120] },
    { subject: "Vitesse", A: 98, B: 130, C: [90, 113] },
    { subject: "Force", A: 86, B: 130, C: [70, 134] },
    { subject: "Endurance", A: null, B: 100, C: [88, 130] },
    { subject: "Energie", A: 85, B: 90, C: [55, 110] },
    { subject: "Cardio", A: 65, B: 85, C: [60, 120] },
  ]

  return (
    <div className='container__datas__charts__inline__this radarchart'>
      <ResponsiveContainer width='95%'>
        <RadarChart data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey='subject'
            stroke='#FFFFFF'
            axisLine={false}
            tickLine={false}
            tick={customTick}
          />
          <Tooltip />
          <Radar
            name='Mike'
            dataKey='A'
            stroke='#FF0101'
            fill='#FF0101'
            fillOpacity={0.7}
            connectNulls></Radar>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UserRadarChart

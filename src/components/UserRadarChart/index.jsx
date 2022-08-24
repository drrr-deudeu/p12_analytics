import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  Radar,
} from "recharts"
function UserRadarChart() {
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
        <RadarChart data={data} outerRadius={80}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey='subject'
            stroke='#FFFFFF'
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Radar
            name='Thomas'
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

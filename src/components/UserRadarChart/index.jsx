import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  Radar,
} from "recharts"
function UserRadarChart({ firstName, performance }) {
  const data = [
    { subject: "Intensité", value: null, kind: 6 },
    { subject: "Vitesse", value: null, kind: 5 },
    { subject: "Force", value: null, kind: 4 },
    { subject: "Endurance", value: null, kind: 3 },
    { subject: "Energie", value: null, kind: 2 },
    { subject: "Cardio", value: null, kind: 1 },
  ]

  data.map((d) => {
    d.value = performance.data.filter((perf) => perf.kind === d.kind)[0].value
    return 0
  })

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
            name={firstName}
            dataKey='value'
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

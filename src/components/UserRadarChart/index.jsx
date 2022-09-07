import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  Radar,
} from "recharts"

function UserRadarChart({ performance }) {
  return (
    <div className='container__datas__charts__inline__this radarchart'>
      <ResponsiveContainer width='95%'>
        <RadarChart data={performance} outerRadius={80}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey='subject'
            stroke='#FFFFFF'
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Radar
            name='valeur'
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

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  Radar,
  LabelList,
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
    <div style={{ width: "258px", height: "263px" }}>
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid radialLines={true} />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar
            name='Mike'
            dataKey='A'
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.6}
            connectNulls>
            <LabelList />
          </Radar>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UserRadarChart

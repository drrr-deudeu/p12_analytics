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
    { subject: "Math", A: 120, B: 110, C: [80, 120] },
    { subject: "Chinese", A: 98, B: 130, C: [90, 113] },
    { subject: "English", A: 86, B: 130, C: [70, 134] },
    { subject: "Geography", A: null, B: 100, C: [88, 130] },
    { subject: "Physics", A: 85, B: 90, C: [55, 110] },
    { subject: "History", A: 65, B: 85, C: [60, 120] },
  ]

  return (
    <div>
      <div style={{ width: "500px", height: "500px" }}>
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
    </div>
  )
}

export default UserRadarChart

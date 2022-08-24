import PropTypes from "prop-types"
import { Label, Pie, PieChart, ResponsiveContainer, Text } from "recharts"

function Score(props) {
  const { score, todayScore } = props
  const scores = [
    { name: "todayScore", value: todayScore, fill: "blue" },
    { name: "score", value: score, fill: "green" },
  ]

  return (
    <div className='container__datas__charts__inline__this'>
      <ResponsiveContainer>
        <PieChart outerRadius={50}>
          <Pie
            data={scores}
            dataKey='value'
            nameKey='name'
            cx='50%'
            cy='50%'
            innerRadius={60}
            outerRadius={80}
            fill='#82ca9d'>
            <Label position='center'>Coucou</Label>
          </Pie>
          <text x={50} y={50} dy={0} textAnchor='start' fill={"#20253A"}>
            Score
          </text>
          <Text textAnchor='middle'>Text1</Text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
Score.propsTypes = {
  score: PropTypes.number.isRequired,
  todayScore: PropTypes.number.isRequired,
}
Score.defaultProps = {
  score: 12,
  todayScore: 12,
}

export default Score

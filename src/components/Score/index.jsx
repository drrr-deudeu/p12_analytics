import PropTypes from "prop-types"
import { Pie, PieChart } from "recharts"
const renderActiveShape = () => {
  return (
    <g>
      <text x={250} y={250} dy={8} textAnchor='middle' fill={"red"}>
        {"hello"}
      </text>
    </g>
  )
}
function Score(props) {
  const { score, todayScore } = props
  const scores = [
    { name: "todayScore", value: todayScore, fill: "blue" },
    { name: "score", value: score, fill: "green" },
  ]
  const sectors = [
    // {
    //   cx: 250,
    //   cy: 250,
    //   startAngle: 180,
    //   endAngle: 60,
    //   innerRadius: 100,
    //   outerRadius: 112,
    // },
    // {
    //   cx: 250,
    //   cy: 250,
    //   startAngle: 60,
    //   endAngle: 40,
    //   innerRadius: 100,
    //   outerRadius: 112,
    // },
  ]
  return (
    <PieChart width={258} height={263}>
      <Pie
        cx={150}
        cy={250}
        endAngle={100}
        startAngle={180 - todayScore}
        outerRadius={200}
        innerRadius={190}
        data={scores}
        sectors={sectors}
        paddingAngle={0}
        dataKey='value'
        fill='#fff'
        stroke='#000'
        activeShape={renderActiveShape}
      />
    </PieChart>
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

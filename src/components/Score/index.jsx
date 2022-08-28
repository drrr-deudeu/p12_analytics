import PropTypes from "prop-types"
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts"

function Score(props) {
  const { score, todayScore } = props
  const scores = [
    {
      name: "todayScore",
      value: (todayScore + score) * 100,
      fill: "#FF0000",
    },
  ]

  return (
    <div className='container__datas__charts__inline__this piechart'>
      <div className='piechart__title'>Score</div>
      <div className='piechart__graph'>
        <ResponsiveContainer>
          <PieChart outerRadius={90}>
            <Pie
              data={scores}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='42%'
              innerRadius={80}
              outerRadius={92}
              startAngle={210}
              endAngle={80}
              cornerRadius={10}
              paddingAngle={5}
              fill='#FF0000'>
              <Label
                position='center'
                dy={-15}
                style={{ fontSize: "100%", fill: "#282D30" }}>
                {(todayScore + score) * 100 + "%"}
              </Label>
              <Label
                position='center'
                dy={15}
                style={{ fontSize: "61.5%", fill: "#74798C" }}>
                {"de votre"}
              </Label>
              <Label
                position='center'
                dy={40}
                style={{ fontSize: "61.5%", fill: "#74798C" }}>
                {"objectif"}
              </Label>
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
Score.propsTypes = {
  score: PropTypes.number.isRequired,
  todayScore: PropTypes.number.isRequired,
}
// Score.defaultProps = {
//   todayScore: 12,
// }

export default Score

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
  Radar,
} from "recharts"
import PropTypes from "prop-types"

function UserRadarChart(props) {
  const { performance } = props
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

UserRadarChart.propsTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
}

export default UserRadarChart

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts"
import PropTypes from "prop-types"
/**
 *
 * UserLineChart(props)
 * const { serie, unit } = props
 *
 * @param {Object[]} serie array of collections
 * @param {string} serie[].pointLabel label on x-axis
 * @param {number} serie[].value value on y-axis
 * @param {string[]} unit unit displayed in the Tool Tip
 *
 * @returns {JSX.Element} User's average sessions duration displayed in a Line chart
 */
function UserLineChart(props) {
  const { serie, unit } = props
  const height_chart = 200
  const margin = 20
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='linechart__graph__tooltip'>
          <p className='label'>{`${payload[0].value} ${unit}`}</p>
        </div>
      )
    }
  }
  return (
    <div className='container__datas__charts__inline__this linechart'>
      <div className='linechart__comment'>
        <span>Durée moyenne des sessions</span>
      </div>
      <div className='linechart__graph'>
        <ResponsiveContainer width='90%'>
          <LineChart
            height={height_chart}
            data={serie}
            margin={margin}
            syncId='test'>
            <Line
              isAnimationActive={false}
              type='monotone'
              dataKey='value'
              stroke='#ffffff'
              dot={{ strokeWidth: 0, r: 0 }}
            />
            <Tooltip content={CustomTooltip} cursor={false} />
            <XAxis
              dataKey='pointLabel'
              padding={{ left: 12, right: 12 }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#ff7300" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
/**
 *
 */
UserLineChart.propTypes = {
  serie: PropTypes.arrayOf(
    PropTypes.shape({
      pointLabel: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  unit: PropTypes.string.isRequired,
}
export default UserLineChart

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import PropTypes from "prop-types"

function UserBarchart(props) {
  const { series, units, legends, datakeys, colors, yaxis } = props

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='barchart__graph__tooltip'>
          {units.map((unit, ind) => (
            <p key={unit} className='label'>{`${payload[ind].value}${unit}`}</p>
          ))}
        </div>
      )
    }
  }
  return (
    <div className='barchart'>
      <div className='barchart__legend'>
        <div className='barchart__legend__titre'>Activité quotidienne</div>
        <div className='barchart__legend__xy'>
          {legends.map((legend, index) => (
            <div key={index} className={"barchart__legend__xy__" + index}>
              <div
                className={"barchart__legend__xy__" + index + "__circle"}></div>
              <div className={"barchart__legend__xy__" + index + "__label"}>
                {legend}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='barchart__graph'>
        <ResponsiveContainer>
          <BarChart data={series} barGap={8}>
            <CartesianGrid vertical={false} stroke='#DEDEDE' />
            <XAxis
              interval={0}
              tickCount={series.length}
              type='number'
              domain={["dataMin", "dataMax"]}
              dataKey='ind'
              padding={{ left: 10, right: 10 }}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9B9EAC" }}
              height={30}
            />
            <YAxis
              yAxisId='0'
              dataKey={datakeys[yaxis]}
              domain={[0, "auto"]}
              hide={false}
              orientation='right'
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9B9EAC" }}
              width={60}
              tickMargin={20}
            />
            <Tooltip content={CustomTooltip} />
            {datakeys.map((key, ind) => (
              <Bar
                key={key}
                dataKey={key}
                fill={colors[ind]}
                barSize={7}
                radius={[3, 3, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

UserBarchart.propsTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      ind: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  units: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  legends: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  datakeys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  yaxis: PropTypes.number.isRequired,
}
export default UserBarchart

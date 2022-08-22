import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts"

function UserBarchart() {
  const data = [
    { name: "1", x: 21, y: 23 },
    { name: "2", x: 22, y: 12 },
    { name: "3", x: 32, y: 15 },
    { name: "4", x: 14, y: 35 },
    { name: "5", x: 51, y: 45 },
    { name: "6", x: 16, y: 25 },
    { name: "7", x: 7, y: 17 },
    { name: "8", x: 8, y: 32 },
    { name: "9", x: 9, y: 43 },
    { name: "10", x: 24, y: 32 },
  ]

  return (
    <div style={{ height: "320px" }}>
      <ResponsiveContainer>
        <BarChart width={835} height={500} data={data}>
          <CartesianGrid />
          <XAxis dataKey='name' />
          <YAxis orientation='right' />
          <Tooltip />
          <ReferenceLine y={0} stroke='gray' />
          {/* <Brush dataKey='name' height={30} stroke='green' /> */}
          <Bar dataKey='x' fill='#282D30' barSize={7} />
          <Bar dataKey='y' fill='#E60000' barSize={7} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UserBarchart

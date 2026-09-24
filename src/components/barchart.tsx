import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell} from "recharts";
import "../dist/style.css"; import "../App.css"; import "../css/about.css"
const data = [
  { skills: "UI Design", percentage: 950, color: "black" },
  { skills: "Coding (React.js)", percentage: 700, color: "gray" },
  { skills: "Eating", percentage: 300, color: "lightgray" }
];
function chart() {
 return (
  <ResponsiveContainer width="80%" className="chart-x">
    <BarChart data={data}>
      <XAxis dataKey="skills"/>
      <YAxis />
      <Tooltip />
      <Bar dataKey="percentage">
        {data.map((entry, index)=>(
          <Cell key={index} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
 );
}

export default chart;

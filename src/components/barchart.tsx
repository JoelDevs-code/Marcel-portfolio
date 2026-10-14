import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell} from "recharts";
import "../dist/style.css"; import "../App.css"; import "../css/about.css"
const data = [
  { skills: "HTML & CSS", percentage: 950, color: "maroon" },
  { skills: "Javascript", percentage: 600, color: "yellow" },
  { skills: "React.JS", percentage: 700, color: "lightblue" },
  { skills: "Figma", percentage: 750, color: "navy" },
  { skills: "Adobe (AI & PS)", percentage: 800, color: "red"},
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

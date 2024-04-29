import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

type Props = {
  data: { "time": string, "temprature": number, "precipitation": number, "wind speed": number }[]
}

export default function WeatherGraph(props: Props) {
  const [Key, setKey] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setKey(window.innerWidth);
    })
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%" key={Key}>
      <LineChart data={props.data} margin={{top: 30, right: 50, left: 0, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temprature" stroke="red" strokeWidth={3} />
        <Line type="monotone" dataKey="precipitation" stroke="blue" strokeWidth={3} />
        <Line type="monotone" dataKey="wind speed" stroke="gray" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}

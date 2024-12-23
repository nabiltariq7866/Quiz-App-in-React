import React, { useContext, useEffect, useState,PureComponent } from "react";
import AppContext from "../../context/AuthContext";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const ChartBar = ({ data }) => {
  console.log(data);
  const context = useContext(AppContext);
  const [optionCounts, setOptionCounts] = useState({});
    useEffect(() => {
      const countOptions = () => {
         let counts = {};
{ data.option && data.option.map((data)=>{
    console.log(data);
    counts={
      ...counts,
      [data]:0
    }
  })}
        
        // Loop through each user in the context quizData
        context.quizData.forEach((user) => {
          // Loop through each quiz of the user
          user.quizzes.forEach((quiz) => {
            // Loop through each question in the quiz
            quiz.Questions.forEach((question) => {
              // Check if the current question matches the data prop (Question ID)
              if (question.questionId === data.id) {
                const selectedOption = question.selectedAnswer;
                
                // Count the selected option only if it exists in the question options
                if (selectedOption !== undefined && data.option.includes(selectedOption)) {
                  counts[selectedOption] = (counts[selectedOption] || 0) + 1;
                }
              }
            });
          });
        });
  
        // Update the state with the option counts
        setOptionCounts(counts);
      };

      if (context.quizData) {
        countOptions();
      }
    }, [context.quizData,data]);
   
    const chartData = Object.entries(optionCounts).map(([name, value]) => ({
      name,
      value
    }));
    console.log(chartData)
    // const data2 = [
    //   {  value: 9 },
    //   {  value: 3 },
    //   {  value: 3 },
    //   {  value: 2 },
    // ]; 

  return <>
    <h3 className="">{data.Question}</h3>
    <div className="flex items-center ">
      
   <PieChart width={300} height={300} >
  <Pie
    data={chartData}
    cx="50%"
    cy="50%"
    labelLine={false}
    label={renderCustomizedLabel}
    outerRadius={80}
    fill="#8884d8"
    dataKey="value"
  >
    {chartData.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
</PieChart>
<div>
        {chartData.map((item,index)=>{
          return <div className="flex gap-2 mb-1">
            <span className="block w-5 h-5 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
            <h3>{item.name}</h3>
          </div>
        })}
      </div>
</div>
</>
};

export default ChartBar;
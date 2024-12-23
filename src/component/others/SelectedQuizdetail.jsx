import React from "react";
import AllTask from "./AllTask";

const SelectedQuizdetail = ({ selectedQuiz }) => {
  return (
    <div className="h-[600px] w-[90vw]  p-4 rounded-md overflow-y-auto  login-bg">
      <h1 className="text-[30px] font-semibold text-[#a8eb12] underline">
        Score:{selectedQuiz.scoreCard}
      </h1>
      <div className="flex justify-between flex-wrap">
        {selectedQuiz.Questions.map((quiz, index) => (
          <AllTask
            key={quiz.questionId}
            index={index}
            data={quiz}
            finalResult={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedQuizdetail;

import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AuthContext";
import SelectedQuizdetail from "./SelectedQuizdetail";
import Modal from "./Modal";

const QuizDetails = ({ selectedQuiz
  ,setSelectedQuiz
 }) => {
  const context = useContext(AppContext);
  const [selectedQuizdetail, setselectedQuizdetail]= useState(null);
  useEffect(() => {

    setselectedQuizdetail(null)
  }, [selectedQuiz]);
  function handleSetReault(quizDetails) {
    setselectedQuizdetail(quizDetails);
    context.setIsOpen(true);
  }
  return (
    <div className="mt-4 bg-[#2b5f81] p-4 rounded-md">
      <h2 className="text-xl font-bold bg-[#21888e] p-4 rounded-md mb-3">
        Quiz Details for {selectedQuiz.email}
      </h2>
      <ul>
        {selectedQuiz.quizzes.map((quiz, index) => {
          return (
            <ul key={index}>
              <p className="my-2">
                <strong className="text-xl font-bold bg-[#21888e] p-1 rounded-md">
                  Quiz Time:
                </strong>{" "}
                {quiz.quizTime}
              </p>
              <p className="text-gray-800">Score : {quiz.scoreCard}</p>
              <button
                type="button"
                className="bg-[#21888e] my-1 text-white px-3 py-2 rounded-md text-[12px] font-semibold"
                onClick={() => handleSetReault(quiz)}
              >
                See result
              </button>
              {selectedQuizdetail && (
                <Modal setSelectedQuiz={setSelectedQuiz} 
                setselectedQuizdetail={setselectedQuizdetail}
                >
                  <SelectedQuizdetail
                    selectedQuiz={selectedQuizdetail}
                  />
                </Modal>
              )}
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizDetails;

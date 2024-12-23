import React, { useContext, useState, useEffect } from "react";
import { IoEye } from "react-icons/io5";
import AppContext from "../../context/AuthContext";
import CreateTask from "./CreateTask";
import Modal from "./Modal";
import EditAdminQuestion from "./EditAdminQuestion";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import PieChartIcon from "@mui/icons-material/PieChart";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
const AllTask = ({
  index,
  data,
  finalResult,
  handleChartItem,
  setActiveModal,
  activeModal,
}) => {
  // console.log(data);
  // console.log(finalResult);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  // const [activeModal, setActiveModal] = useState(null);
  const context = useContext(AppContext);
  function handleEditfun(data) {
    context.setEditAddInput(data);
    context.setaddInput(data.option);
    setActiveModal("edit");
    context.setIsOpen(true);
  }
  function handleDelete(id) {
    const newADminQuestion = context.adminQuestionCollection.filter(
      (data) => data.id !== id
    );
    context.setAdminQuestionCollection(newADminQuestion);
  }

  const handleAnswerClick = (userAns) => {
    if (context.userData.role === "user" && !finalResult) {
      const isCorrect = userAns === data.correctAnswer;
      const questionHistory = {
        questionId: data.id,
        question: data.Question,
        option: data.option,
        selectedAnswer: userAns,
        correctAnswer: data.correctAnswer,
        QuestionType: data.QuestionType,
        isCorrect,
      };

      if (context.userHistoryIndex !== -1) {
        const updatedHistory = [...context.userHistoryData];
        const userEntry = updatedHistory[context.userHistoryIndex];

        const questionExists = userEntry.questions?.some(
          (q) => q.questionId === data.id
        );

        if (questionExists) {
          userEntry.questions = userEntry.questions.map((q) =>
            q.questionId === data.id ? questionHistory : q
          );
        } else {
          userEntry.questions = [...userEntry.questions, questionHistory];
        }

        context.setUserHistoryData(updatedHistory);
      }
      setSelectedAnswer(userAns);
      setIsAnswered(true);
    }
  };
  return (
    <div className="bg-[#125157] panel py-5 rounded flex items-start shrink-0 w-[30%] mt-5">
      <div className=" py-2 mb-3 w-full  px-4 mx-3 flex flex-col justify-between rounded">
        <div className="flex justify-between items-center">
          <h2 className="bg-emerald-700 py-3 px-4 rounded-md text-xl font-semibold w-[80%] mb-2">
            <span className="text-2xl font-semibold">Q-{index + 1}: </span>
            {data.Question || data.question}
          </h2>
          {context.userData.role === "admin" && finalResult !== true && (
            <div className="flex w-[20%] justify-evenly">
              <CreateIcon
                onClick={() => handleEditfun(data)}
                className="text-[2.9rem] text-green-500 hover:text-red-700 cursor-pointer"
              />
              {activeModal === "edit" && (
                <Modal>
                  <EditAdminQuestion />
                </Modal>
              )}
              <DeleteIcon
                onClick={() => handleDelete(data.id)}
                className="text-[2.9rem] text-green-500 hover:text-red-700 cursor-pointer"
              />
              <PieChartIcon
                className="text-[2.9rem] text-green-500 hover:text-red-700 cursor-pointer"
                style={{ color: "red" }}
                onClick={() => handleChartItem(data)}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col flex-wrap justify-between items-start">
          {data.option.map((value, indexo) => {
            let backgroundColor = "";
            if (
              finalResult &&
              (context.userData.role === "user" ||
                context.userData.role === "admin")
            ) {
              if (value === data.selectedAnswer) {
                backgroundColor =
                  value === data.correctAnswer ? "bg-green-500" : "bg-red-500";
              }
              if (
                value === data.correctAnswer &&
                value !== data.selectedAnswer
              ) {
                backgroundColor = "bg-green-500";
              }
            }

            return (
              <label
                className={`${
                  context.userData.role === "admin" && finalResult !== true
                    ? "border-2 border-gray-500 w-[90%] mb-2 p-2 rounded-full"
                    : `shrink-0 ${
                        backgroundColor ? backgroundColor : "bg-slate-700"
                      }   cursor-pointer mr-4 p-2 w-full flex gap-3 rounded-md mb-2`
                }`}
              >
                <input
                  type="radio"
                  name={`selectedAns+${index}`}
                  className={` ${backgroundColor} ${
                    context.userData.role === "admin" || finalResult
                      ? "hidden"
                      : " "
                  }`}
                  onClick={() => handleAnswerClick(value)}
                />
                <div className="flex gap-4 items-center">
                  <p className={`w-9 h-9 border-2 flex items-center justify-center border-gray-500 rounded-full`}>
                   {backgroundColor==="bg-green-500"&& <CheckIcon />} 
                   {backgroundColor==="bg-red-500"&& <CloseIcon/>} 
                   {backgroundColor===""&&indexo+1}
                  </p>
                  <p>{value}</p>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;

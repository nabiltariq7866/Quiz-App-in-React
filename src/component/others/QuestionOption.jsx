import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../context/AuthContext";

const QuestionOption = ({ data }) => {
  const context = useContext(AppContext);
  console.log(context.addInput);
  useEffect(() => {
    if (data && data.option) {
      const correctIndex = data.option.indexOf(data.correctAnswer);
      context.setCorrectAnswer(correctIndex);
    }
  }, [data, context]);
  function handlePlusButton() {
    context.setaddInput((prev) => [...prev, ""]);
  }
  function handleCorrectAnswerChange(index) {
    
    console.log('option change');
    console.log(index);
    context.setCorrectAnswer(index);
  }
  function handleDeleteOption(index) {
    const newAddInput = context.addInput.filter((_, i) => i !== index);
    context.setaddInput(newAddInput);
    if (index === context.correctAnswer) {
      context.setCorrectAnswer(null); 
    } else if (index < context.correctAnswer) {
      context.setCorrectAnswer((prev) => prev - 1); 
    }
  }
  function handleOptionChange(e, index) {
    const newAddInput = [...context.addInput];
    newAddInput[index] = e.target.value;
    context.setaddInput(newAddInput);
  }

  return (
    <div className="bg-black rounded-md w-2/3 m-auto  mt-3 p-4 ">
      <div className="flex items-center justify-end mb-2">
        <button
          type="button"
          onClick={handlePlusButton}
          className="bg-[#d92732] text-white w-[30px] flex items-center justify-center h-[30px] text-lg font-medium rounded-[50%]"
        >
          +
        </button>
      </div>
      {context.addInput.map((item, index) => {
        console.log(index)
        return (
          <div
            className="flex gap-3 mb-2 items-center justify-center"
            key={index}
          >
            <p>{index + 1}</p>
            <input
              type="text"
             value={item || ""}
              name="option"
              onChange={(e) => handleOptionChange(e, index)}
              className="bg-gray-800 w-3/4 p-2 rounded-md"
              placeholder="Question option.."
              required
            />
            <label className="flex items-center justify-center gap-2">
              <input
                type="radio"
                name="correctAnswer"
                value={index}
                checked={context.correctAnswer === index}
                onChange={() => handleCorrectAnswerChange(index)}
                className="ml-2"
                required
              />
              Correct
            </label>
            <button
              type="button"
              className="bg-[#d92732] text-white h-[25px]  px-1 rounded-sm text-[12px] leading-none "
              onClick={() => handleDeleteOption(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
  
    </div>
  );
};
// edit the question option
export default QuestionOption;

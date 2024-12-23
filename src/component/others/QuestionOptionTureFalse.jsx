import React, { useContext } from "react";
import AppContext from "../../context/AuthContext";

const QuestionOptionTureFalse = () => {
  const context = useContext(AppContext);
  function handleCorrectAnswerChange(e) {
    context.setCorrectAnswer(e.target.value);
  }
  return (
    <div className="bg-black w-1/3 p-2 rounded-md  flex flex-col mt-3 gap-3">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold bggre">Option</h1>
        <h1 className="text-xl font-semibold bggre">Select</h1>
      </div>
      <div className="flex justify-between">
      <div>
        <div>
          <label>
            <input
              className="mr-2"
              type="checkbox"
              value="true"
              name="option"
              checked
            />
            True
          </label>
        </div>
        <div>
          <label>
            <input
              className="mr-2"
              type="checkbox"
              value="false"
              name="option"
              checked
            />
            False
          </label>
        </div>
      </div>
      <div>
        <div>
          <label>
            <input
              className="mr-2"
              type="radio"
              value="true"
              name="correctAnswer"
              onChange={handleCorrectAnswerChange}
              readOnly 
              required

            />
            correct
          </label>
        </div>
        <div>
          <label>
            <input
              className="mr-2"
              type="radio"
              value="false"
              name="correctAnswer"
              onChange={handleCorrectAnswerChange}
              required
            />
            Correct
          </label>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QuestionOptionTureFalse;

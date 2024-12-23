import React, { useContext, useEffect } from "react";
import QuestionOption from "./QuestionOption";
import QuestionOptionTureFalse from "./QuestionOptionTureFalse";
import AppContext from "../../context/AuthContext";
const EditAdminQuestion = () => {
  const context = useContext(AppContext);
  let data = context.editAddInput;

  useEffect(() => {
    if (data && data.option) {
     
      context.setCorrectAnswer(data.option.indexOf(data.correctAnswer));
    }
  }, [data, context]);

  function handleSubmitQuestinAdmin(e) {
    e.preventDefault();
    console.log("Update clicked");

    const form = e.target;
    const formData = new FormData(form);
    let option = formData.getAll("option");

    let editData = Object.fromEntries(formData.entries());
    console.log(editData);

    let correctAnswer;
    if (data.QuestionType === "boolvalue") {
      correctAnswer = context.correctAnswer; 
    } else {
      correctAnswer = option[context.correctAnswer]; 
    }
    console.log(correctAnswer);

  
    editData = {
      ...data,
      ...editData,
      correctAnswer,
      option,
    };

   
    const updatedQuestions = context.adminQuestionCollection.map((dataPass) => {
      if (editData.id === dataPass.id) {
        return editData; 
      }
      return dataPass;
    });

    console.log(updatedQuestions);
    context.setAdminQuestionCollection(updatedQuestions);

    
    context.setEditAddInput([""]);
    context.setaddInput([""]);
    context.setIsOpen(false);
    form.reset();
  }

  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] m-auto mt-7 w-full rounded">
        <form
          onSubmit={handleSubmitQuestinAdmin}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="w-full">
            <div>
              <h3 className="text-xl font-semibold amibold text-gray-300 mb-5">
                Update Question
              </h3>
              <input
                name="Question"
                className="text-2xl py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-t-gray-400 border-gray-400 mb-4"
                defaultValue={data.Question} // Default value should come from the context
                type="text"
                placeholder="Update Question .."
                required
              />
            </div>

            {/* Render different components based on Question Type */}
            {data.QuestionType === "boolvalue" && <QuestionOptionTureFalse />}
            {data.QuestionType === "mcqs" && <QuestionOption data={data} />}

            {/* Submit button */}
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Update Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditAdminQuestion;

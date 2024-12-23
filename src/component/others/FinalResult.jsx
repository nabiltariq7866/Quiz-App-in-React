import React, { useContext } from "react";
import AppContext from "../../context/AuthContext";
import AllTask from "./AllTask";

const FinalResult = () => {
  const context = useContext(AppContext);
const data = context.userHistoryData?.[context.userHistoryIndex];
  console.log(data);
  if (!data || !data.questions) {
    return <div className="text-center">No Results Yet</div>;
  }
  return (
    <>
      {data.questions.length !== 0 ? (
        <div>
          <h1 className="text-center my-5 text-7xl text-yellow-600">
            Final result
          </h1>
          <h1 className="text-center my-5 text-7xl p-4 rounded-md  inline-block text-green-600">
            Score:{data.scoreCard}
          </h1>
          <div className="flex  flex-wrap w-full   justify-evenly">
            {data?.questions &&
              data?.questions.map((value, index) => (
                <AllTask
                  key={value.id}
                  index={index}
                  data={value}
                  finalResult={true}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className="text-center">No Reuslt Yet</div>
      )}
    </>
  );
};

export default FinalResult;

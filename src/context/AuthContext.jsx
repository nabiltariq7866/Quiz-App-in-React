import React, { createContext, useState, useContext, useEffect } from "react";
import { IoContractOutline } from "react-icons/io5";

const AppContext = createContext({
  userData: [],
  setUserData: () => {},
  correctAnswer: "",
  setLocalStorage: () => {},
  getLocalStorage: () => {},
  setCorrectAnswer: () => {},
  setAdminQuestionCollection: () => {},
  adminQuestionCollection: [],
  setaddInput: () => {},
  addInput: [],
  editAddInput: [],
  isOpen: false,
  setIsOpen: () => {},
  setEditAddInput: () => {},
  setUserHistoryData: () => {},
  userHistoryData: [],
  setUserHistoryIndex:()=>{},
  userHistoryIndex:"",
  setQuizData:()=>{},
  quizData:[]
});
function setLocalStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}

function getLocalStorage(name) {
  const localTodos = localStorage.getItem(name);
  return JSON.parse(localTodos) || [];
}

export const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState(getLocalStorage("login"));
  const [userHistoryData, setUserHistoryData] = useState(
    getLocalStorage("userHistory")
  );
  const [userHistoryIndex, setUserHistoryIndex] = useState("");
  const [quizData, setQuizData] =useState(getLocalStorage("quizData"));
  console.log(userHistoryIndex)
  const [isOpen, setIsOpen] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  console.log(userHistoryData);
  const [adminQuestionCollection, setAdminQuestionCollection] = useState(
    getLocalStorage("AdminQuestionCollectin")
  );
  const [addInput, setaddInput] = useState([""]);
  console.log(addInput);
  const [editAddInput, setEditAddInput] = useState([""]);
  useEffect(() => {
    setLocalStorage("AdminQuestionCollectin", adminQuestionCollection);
  }, [adminQuestionCollection]);
  useEffect(() => {
    setLocalStorage("login", userData);
    console.log(userHistoryData)
    const userHistoryIndex = userHistoryData.findIndex(
      (entry) => entry.email === userData.email
    );
    console.log(userHistoryIndex);
   setUserHistoryIndex(userHistoryIndex)
  }, [userData]);
  useEffect(() => {
    setLocalStorage("userHistory", userHistoryData);

  }, [userHistoryData]);
  useEffect(() => {
    setLocalStorage("quizData", quizData);

  }, [quizData]);

  const setUser = (data) => {
    setUserData(data);
  };

  const passData = {
    userData,
    setUserData,
    setLocalStorage,
    getLocalStorage,
    setCorrectAnswer,
    correctAnswer,
    setAdminQuestionCollection,
    adminQuestionCollection,
    addInput,
    setaddInput,
    isOpen,
    setIsOpen,
    editAddInput,
    setEditAddInput,
    setUserHistoryData,
    userHistoryData,
    userHistoryIndex,
    setUserHistoryIndex,
    quizData,
    setQuizData
  };

  return <AppContext.Provider value={passData}>{children}</AppContext.Provider>;
};

export default AppContext;
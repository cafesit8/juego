import { useState, useEffect } from "react";
import { question } from "../data/data";

export function Questions() {
  const [points, setPoints] = useState(0);
  const [position, setPosition] = useState(0);
  const [quiz, setQuiz] = useState({});

  useEffect(() => {
    setQuiz(question[position]);
  }, [position]);

  const add = (option, answer) => {
    setPosition(position + 1);
    option === answer ? setPoints(points + 1) : points;
  };

  return (
    <div className="m-auto p-5 rounded-lg bg-[#7dd52d] flex flex-col justify-center items-center text-green-900 w-[500px] max-[550px]:w-[90%]">
      {position > 6 ? (
        <h1 className="text-[20px] text-center font-bold">Tu puntaje es: {points}</h1>
      ) : (
        <>
          <h3 className="text-center font-bold text-[25px] max-[400px]:text-[20px]">{quiz.question}</h3>
          <div className="w-full flex flex-col items-center gap-3 py-3">
            <p className="bg-[#537732] text-white w-full text-center rounded-md py-2 cursor-pointer" onClick={() => add(quiz.option1, quiz.answer)}>{quiz.option1}</p>
            <p className="bg-[#537732] text-white w-full text-center rounded-md py-2 cursor-pointer" onClick={() => add(quiz.option2, quiz.answer)}>{quiz.option2}</p>
            <p className="bg-[#537732] text-white w-full text-center rounded-md py-2 cursor-pointer" onClick={() => add(quiz.option3, quiz.answer)}>{quiz.option3}</p>
            <p className="bg-[#537732] text-white w-full text-center rounded-md py-2 cursor-pointer" onClick={() => add(quiz.option4, quiz.answer)}>{quiz.option4}</p>
          </div>
        </>
      )}
    </div>
  );
}

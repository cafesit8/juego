import { useState, useEffect } from "react";
import { question } from "../data/data";
import { Options } from "./Options";
import { Score } from "./Score";

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
      {position > 9 ? (
        <Score points={points} />
      ) : (
        <>
          <h3 className="text-center font-bold text-[25px] max-[400px]:text-[20px]">{quiz.question}</h3>
          <div className="w-full flex flex-col items-center gap-3 py-3">
            <Options add={add} option={quiz.option1} answer={quiz.answer}/>
            <Options add={add} option={quiz.option2} answer={quiz.answer}/>
            <Options add={add} option={quiz.option3} answer={quiz.answer}/>
            <Options add={add} option={quiz.option4} answer={quiz.answer}/>
          </div>
        </>
      )}
    </div>
  );
}

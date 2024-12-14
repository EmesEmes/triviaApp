/* eslint-disable react/prop-types */

import Button from "./Button"
// import { questions } from '../constants';
const Question = ({questions,currentQuestion, handleAnswerOptionClick}) => {
  return (
    <>
    <p className='mb-10'>{`${questions[currentQuestion].question}`}</p>
    <div className='flex flex-col p-2 gap-4 mb-4'>
        {questions[currentQuestion].options.map((option) => (
            <Button option={option} handleAnswerOptionClick={handleAnswerOptionClick} key={option} />
        ))}
    </div>
    </>
  )
}

export default Question
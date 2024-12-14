/* eslint-disable react/prop-types */
import { Button as PrimeButton } from "primereact/button"

const Button = ({option, handleAnswerOptionClick}) => {
  return (
    <PrimeButton className='border-2 border-black p-2 ml-4 rounded-xl w-[400px] hover:bg-black hover:text-white transition duration-500' onClick={() => handleAnswerOptionClick(option)} key={option}>
        {option}
    </PrimeButton>
  )
}

export default Button
import { Button } from "primereact/button"
import { Slider } from "primereact/slider"
import Table from "./Table"
/* eslint-disable react/prop-types */
const InitialForm = ({nickname, setNickname, handleNicknameSubmit, handleChangeSlider, value}) => {
  

  
  
  console.log(value)
  return (
    <div className=" flex flex-col gap-4 justify-between">
        <Table />
        <div className="mx-auto mt-10">
          <input
              type="text"
              placeholder="Enter your nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="h-full p-2 border-2 border-black rounded-xl"
          />
          <Button label="Start Trivia" onClick={handleNicknameSubmit} className='border-2 border-black p-2 ml-4 rounded-xl hover:bg-black hover:text-white transition duration-300'/>
          <div className="flex flex-col gap-6 mt-10">
            <Slider value={value} onChange={handleChangeSlider} className="w-full" min={1} max={30} step={2} />
            <p className="mt-6">{value} Questions</p>
          </div>
        </div>
        
    </div>
  )
}

export default InitialForm
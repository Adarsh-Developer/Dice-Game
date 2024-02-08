import { useState } from "react";
import Swal from 'sweetalert2'
import { dice1, dice2, dice3, dice4, dice5, dice6 } from '../assets/images'

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState()

  const [currentScore, setCurrentScore] = useState(0)

  const [showRule, setShowRule] = useState(false)

  // This is to generate all the buttons...
  const totalDiceNum = [1, 2, 3, 4, 5, 6];

  const [error, setError] = useState('')

  const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6]

  // Below code is to generate a random dice number and show in to the dice Image
  const [currentDice, setCurrentDice] = useState(dice1)

  const diceImage = () => {
    if (!selectedNumber) {
      setError('You have not selected any number')
    } else {
      // Generate a random number between 0 and 5 (for diceArray index)
      let randomIndex;

      // Start scrolling animation for 2 seconds
      const roller = setInterval(() => {
        randomIndex = Math.floor(Math.random() * diceArray.length);
        setCurrentDice(diceArray[randomIndex]);
      }, 20);

      // Stop scrolling after 2 seconds and check result
      setTimeout(() => {
        clearInterval(roller);
      }, 2000)

      // Show the result
      setTimeout(() => {
        const finalDiceNumber = randomIndex + 1; // Adding 1 to match dice number
        if (selectedNumber === finalDiceNumber) {
          Swal.fire({
            icon: 'success',
            title: 'Congratulations!',
            html: '<span style="font-weight: bold; font-size: 30px">You won!</span>',
            timer: 2000
          });
          setCurrentScore(currentScore + 2);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            html: '<span style="font-weight: bold; font-size: 30px">You loose!</span>',
            timer: 2000
          });
          setCurrentScore(currentScore - 1);
        }
      }, 2200);

      setError(''); // Clear any previous errors
      setSelectedNumber(''); // Clear selected number after rolling
    }
  }
  return (
    <div className="relative w-full max-w-[100vw] flex flex-col items-center p-[50px]" >
      <div className="flex justify-between items-center h-[150px] w-full px-[50px] custombg">
        <div className="flex flex-col items-center">
          <div className="font-poppins text-[100px] leading-none font-semibold">{currentScore}</div>
          <div className="font-poppins text-2xl font-semibold">Total Score</div>
        </div>
        <div className="cvtop flex flex-col items-end h-full justify-center gap-[10px]">
          <h4 className="text-[red] text-2xl font-medium errorMsg" >{error}</h4>
          <div className="boxGap flex gap-[24px]">
            {
              totalDiceNum.map((value, index) => (
                <button
                  key={index}
                  className={`numBox diceBtnStyle ${value === selectedNumber
                    ? 'bg-black text-white'
                    : ''

                    } `}
                  onClick={() => { setSelectedNumber(value), setError('') }}
                >{value}</button>
              ))
            }
          </div>
          <div className="font-poppins font-semibold text-[24px] numBoxTxt">Select Number</div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-[30px] mt-[150px] dicemt'>
        {/* Here is the html code to show the dice image */}
        <div className='flex flex-col items-center' >
          {
            diceArray.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="Dice Img"
                className={`cursor-pointer ${currentDice === item ? 'block' : 'hidden'}`}
                onClick={diceImage}
              />
            ))
          }
          <h3 className='font-poppins text-2xl font-medium' >Click on Dice to roll</h3>
        </div>
        <button
          className="abNormalBtnStyle"
          onClick={() => setCurrentScore(0)}
        >Reset Score</button>
        <button
          className="normalBtnStyle"
          onClick={() => setShowRule(!showRule)}
        >{showRule ? 'Hide' : 'Show'} Rules</button>
      </div>

      {/* Code to create the Rule Book */}
      <div className={`flex flex-col bg-[#FBF1F1] gap-[15px] p-[20px] font-poppins rounded-sm mt-[50px] max-w-[700px]
          ${showRule ? 'visible' : 'hidden'}
          `}>
        <h1 className="font-bold text-2xl" >How to play Dice game :-</h1>
        <div className="font-medium text-[16px] flex flex-col gap-[15px]">
          <p className="" >1. Select any number.</p>
          <p className="" >2. Click on dice image.</p>
          <p className="" >3. After click on the dice if the selected number is equal to dice number than your score increased by Two.</p>
          <p className="" >4. But if you select the wrong number than your score decreased by One.</p>
        </div>
      </div>
    </div>
  )
}

export default GamePlay
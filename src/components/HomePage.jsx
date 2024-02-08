import { MainDice } from '../assets/images'

const HomePage = ({ onClick }) => {
  return (
    <div className="homeC w-full max-w-[100vw] max-h-[100vh] min-h-[100vh] flex justify-center items-center px-[50px]">
      <div className="container max-w-[1180px] max-h-[530px] flex justify-between m-auto items-center">
        <img
          src={MainDice}
          alt='Dice Image'
          className='mainImg max-w-[649px] max-h-[530px]'
        />
        <div className="startBtn max-w-[528px] max-h-[188px] flex flex-col items-end">
          <h1 className='diceGame font-poppins font-extrabold text-[95px] leading-[120px]' >DICE GAME</h1>
          <button
            className='normalBtnStyle plyBtn'
            onClick={onClick}
          >Play Now</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage

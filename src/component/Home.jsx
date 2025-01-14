import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const nav = useNavigate();

    const play = () =>{
        nav('/dice-game');
        console.log("paly button is click")
    }


  return (
    <div>
        <div className='MainBody bg-white h-screen w-screen flex justify-center items-center'>
            <div className='subBody h-[70%] w-[85%] flex justify-center items-center'>
                <div className='left bg-[url("./src/image/group_dice.png")] h-[80%] w-[50%] bg-no-repeat bg-cover bg-center'>
                </div>

                <div className="flex justify-center right h-full w-[50%]">
                    <div className="flex justify-center items-end flex-col">
                        <div className="text-8xl font-mono">DICE GAME</div>
                        <div onClick={play} className="h-[50px] w-[180px] bg-black cursor-pointer rounded-md text-white flex justify-center items-center">Play Now</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;
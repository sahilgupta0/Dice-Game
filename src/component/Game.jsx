import React, {useState, useEffect} from 'react'

function Game() {

    const [visible, setVisible] = useState(false);
    const [remainderToChooseNumber, setReminderToChooseNumber] = useState(false);
    const [score , setScore] = useState(0);
    const [selected, setSelected] = useState(0);
    const [numberChoosen, setnumberChoosen] = useState(false);
    const [generated , setGenerated] = useState(1);

    const showRules = () =>{
        setVisible(!visible);
        console.log("hi");
    }

    const clearScore = () =>{
        setScore(0);
    }

    const choose = (e)=>{
        if(numberChoosen == true && Number(e.target.innerText) == selected ){
            setnumberChoosen(false);
            return;
        }
        setSelected(Number(e.target.innerText));
        setnumberChoosen(true);
    }

    useEffect(()=>{
        console.log("working")
        setReminderToChooseNumber(!numberChoosen)
    },[numberChoosen])

    useEffect(()=>{
        setSelected(selected)
        console.log("the selected number is : ", selected)
    },[selected])

    const computerGuess = ()=>{
        if(remainderToChooseNumber == true){
            window.alert("Please choose a number")
            return;
        }
        const guess = Math.floor(Math.random(60)*6 + 1);
        console.log("Generated number is : ", guess)
        setGenerated(guess)

        if(guess == selected){
            setScore(score+10)
        }
        else{
            setScore(score-2)
        }
    }


  return (
    <div>
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center h-[85%] w-[85%] ">
                <div className="nav flex justify-between items-center h-[20%] w-full ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-6xl font-bold">{score}</div>
                        <div className="font-normal">Total Score</div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div id="warning1" className={`mr-44 text-red-600 ${remainderToChooseNumber ? "block" : "hidden"} `}>* Please choose number</div>
                        
                        <div className="flex justify-center items-center">
                            <div onClick={choose} className={`h-12 w-12 border-black border-2 flex justify-center items-center m-[5px] font-bold cursor-pointer hover:bg-black hover:text-zinc-50 ${selected === 1 && numberChoosen? "bg-black text-zinc-50" : ""}`}>1</div>
                            <div onClick={choose} className={`h-12 w-12 border-black border-2 flex justify-center items-center m-[5px] font-bold cursor-pointer hover:bg-black hover:text-zinc-50 ${selected === 2 && numberChoosen? "bg-black text-zinc-50" : ""}`}>2</div>
                            <div onClick={choose} className={`h-12 w-12 border-black border-2 flex justify-center items-center m-[5px] font-bold cursor-pointer hover:bg-black hover:text-zinc-50 ${selected === 3 && numberChoosen? "bg-black text-zinc-50" : ""}`}>3</div>
                            <div onClick={choose} className={`h-12 w-12 border-black border-2 flex justify-center items-center m-[5px] font-bold cursor-pointer hover:bg-black hover:text-zinc-50 ${selected === 4 && numberChoosen? "bg-black text-zinc-50" : ""}`}>4</div>
                            <div onClick={choose} className={`h-12 w-12 border-black border-2 flex justify-center items-center m-[5px] font-bold cursor-pointer hover:bg-black hover:text-zinc-50 ${selected === 5 && numberChoosen? "bg-black text-zinc-50" : ""}`}>5</div>
                            <div onClick={choose} className={`h-12 w-12 border-black border-2 flex justify-center items-center m-[5px] font-bold cursor-pointer hover:bg-black hover:text-zinc-50 ${selected === 6 && numberChoosen? "bg-black text-zinc-50" : ""}`}>6</div>
                        </div>
                        <div className="font-bold mt-2 mr-1">Select Number</div>
                    </div>
                </div>
                <div className="w-full h-[80%]  flex justify-center items-center">
                    <div className=" flex flex-col justify-center items-center">
                        <div onClick={computerGuess} className={`mt-5 bg-[url('./image/dice_${String(generated)}.png')] h-[170px] w-[170px] bg-cover bg-no-repeat`}></div>
                        <div className="mt-5 font-bold">Click on Dice to Roll</div>
                        <div onClick={clearScore} className="mt-5 p-[6px] flex justify-center items-center border-black border-2 w-[155px] rounded-[4px] cursor-pointer">Reset Score</div>
                        <div onClick={showRules} className="rules mt-5 p-[6px] flex justify-center items-center bg-black text-zinc-50 w-[155px] rounded-[4px] cursor-pointer">Show Rules</div>
                    </div>
                    

                </div>  

                <div className={`rule p-1 h-[40%]  w-[60%] border-black border-2 bg-red-300 flex justify-center items-center flex-col rounded-md ${visible ? "block" : "hidden"} `}>
                    <div className="text-xl font-bold ">How to Play Dice Game</div>
                    <div className="pl-4">
                        <ul className='list-disc  list-inside '>
                            <li>Select any number</li>
                            <li>Click on the image</li>
                            <li>After clicking on the dice if the selected number is same as dice you will get some point</li>
                            <li>if you get wrong guess 2 point will will deducted</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Game;
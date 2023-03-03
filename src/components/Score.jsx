import React from 'react'
import { IoHeart } from "react-icons/io5";

export function Score({points}) {

    const BadScore=()=>{
        return(
            <div className='text-center flex flex-col items-center'>
                <h4 className='text-[20px] font-bold'>Mejor suerte la próxima vez :(</h4>
                <p>Puntaje: {points}</p>
            </div>
        )
    }

    const MoreAndLessScore=()=>{
        return(
            <div className='text-center flex flex-col items-center'>
                <h4 className='text-[20px] font-bold'>Lo puedes hacer mejor</h4>
                <p>Puntaje: {points}</p>
            </div>
        )
    }

    const Good=()=>{
        return(
            <div className='text-center flex flex-col items-center'>
                <h4 className='text-[20px] font-bold'>Me conoces bien</h4>
                <p>Puntaje: {points}</p>
            </div>
        )
    }

    const Excelent=()=>{
        return(
            <div className='text-center flex flex-col items-center'>
                <h4 className='text-[20px] font-bold'>Eres la mejor, sabes todo sobre mi</h4>
                <IoHeart className='text-red-600 text-[25px]'/>
                <p>Puntaje: {points}</p>
            </div>
        )
    }

    const FinalScore=()=>{
        if (points >= 0 && points <= 3) {
            return <BadScore />
        }else if(points >= 4 && points <= 6){
            return <MoreAndLessScore />
        }else if(points >= 7 && points <= 9){
            return <Good />
        }else if (points === 10){
            return <Excelent />
        }
    }

  return (
    <FinalScore />
  )
}

import React from 'react'

export function Options({option, answer, add}) {
  return (
    <p 
    className="bg-[#537732] text-white w-full text-center rounded-md py-2 cursor-pointer" 
    onClick={() => add(option, answer)}>
    {option}
    </p>
  )
}

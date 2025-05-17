'use client'

import React, { useState } from 'react'

const Slider = () => {
  const [toolRange, setToolRange] = useState(100)

  const calculatePrice = () => {
    const basePrice = 42000

    const brackets = [
      { min: 101, max: 250, perStep: 1750 },
      { min: 251, max: 500, perStep: 750 },
      { min: 501, max: 750, perStep: 625 },
      { min: 751, max: 1000, perStep: 500 },
    ]

    if (toolRange <= 100) return basePrice

    let extra = 0

    for (const bracket of brackets) {  // changed 'let' to 'const' here
      if (toolRange > bracket.min) {
        const cappedMax = Math.min(toolRange, bracket.max)
        const steps = Math.floor((cappedMax - bracket.min) / 25) + 1
        extra += steps * bracket.perStep
      }
    }

    return basePrice + extra
  }

  return (
    <div className='container px-32 mx-auto py-8'>
      <h1 className='text-xl font-semibold mb-4'>Instrument: {toolRange}</h1>

      <input
        type='range'
        min={100}
        max={1000}
        step={25}
        value={toolRange}
        onChange={(e) => setToolRange(Number(e.target.value))}
        className='w-full accent-violet-500'
      />

      <h2 className='mt-4 text-lg font-medium'>Price: ₹{calculatePrice()}</h2>
    </div>
  )
}

export default Slider

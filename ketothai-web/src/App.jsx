import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
	return (
		<div className='h-screen w-full bg-[#0f0f0f] flex flex-col items-center justify-center'>
			<h1 className='text-6xl font-black text-[#D9F99D] italic uppercase tracking-tighter'>KetoThai</h1>
			<p className='text-gray-400 mt-4 font-medium'>Modern Muay Thai & Nutrition</p>
			<div className='mt-8 px-6 py-2 border border-[#D9F99D] text-[#D9F99D] hover:bg-[#D9F99D] hover:text-black transition-all cursor-pointer font-bold'>
				STRONA W BUDOWIE
			</div>
		</div>
	)
}

export default App

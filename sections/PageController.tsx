import React from 'react'

const PageController = () => {
  return (
    <div className="w-full flex justify-between items-center mt-16 pl-8">
      <div className="flex items-center text-[#667085] font-medium gap-x-2">
        <p>{'<'}-</p>
        <p className="text-sm">Previous</p>
      </div>

      <div className='flex gap-x-2'>
        <button className='w-10 h-10 rounded-lg font-medium text-[#7F56D9] bg-[#7F56D9] bg-opacity-10'>
            1
        </button>
        <button className='w-10 h-10 rounded-lg text-[#667085]  font-medium hover:text-[#7F56D9] hover:bg-[#7F56D9] hover:bg-opacity-10'>
            2
        </button>
        <button className='w-10 h-10 rounded-lg text-[#667085]  font-medium hover:text-[#7F56D9] hover:bg-[#7F56D9] hover:bg-opacity-10'>
            3
        </button>
        <button className='w-10 h-10 rounded-lg text-[#667085]  font-medium hover:text-[#7F56D9] hover:bg-[#7F56D9] hover:bg-opacity-10'>
            4
        </button>
      </div>
      <div className="flex items-center text-[#667085] font-medium gap-x-2">
        <p className="text-sm">Next</p>
        <p>-{'>'}</p>
      </div>
    </div>
  )
}

export default PageController

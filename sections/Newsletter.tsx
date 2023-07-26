import React from 'react'

const Newsletter = () => {
  return (
    <div className="mt-10">
      <h3 className="text-base font-semibold text-[#7F56D9] text-center">
        Newlatters
      </h3>
      <h1 className="mt-3 text-5xl font-semibold text-black dark:text-white text-center">
        Stories and interviews
      </h1>
      <p className="mt-6 text-xl text-[#C0C5D0] text-center max-w-3xl mx-auto">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <div className="max-w-[500px] mx-auto flex mt-10 justify-center gap-x-4">
        <div className="">
          <input
            className="bg-gray-100 dark:bg-white rounded-lg text-black dark:text-[#667085] py-3 px-4 w-full"
            placeholder="Enter your email"
          />
          <p className="text-[#adb1b9] dark:text-[#C0C5D0] text-sm mt-2">
            We care about your data in our privacy policy
          </p>
        </div>
        <button className='bg-[#7F56D9] rounded-lg text-base py-3 px-5 h-fit text-white'>
        Subscribe
        </button>
      </div>
    </div>
  )
}

export default Newsletter

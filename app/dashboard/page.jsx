import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='p-10'>

      <h2 className='px-3 py-3 font-bold text-3xl text-primary'>Create New Interview</h2>
      {/* <h2 className='p-2 font-bold text-3xl text-primary'>A New Interview</h2> */}
      <h2 className='px-3 pb-4 text-xl text-gray-500'>create your own personalized AI-Powered mock Interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-5 gap-5'>
        <AddNewInterview/>
      </div>

      {/* Previous Interview List  */}
      <InterviewList/>
    </div>
  )
}

export default Dashboard
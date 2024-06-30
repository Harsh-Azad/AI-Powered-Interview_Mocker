import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {

    const router=useRouter();

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }

    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview.mockId+"/feedback")
    }
    
  return (
    <div className='bg-secondary border shadow-md rounded-lg p-6'>
        <h2 className='font-bold text-primary p-1 text-lg'>{interview?.jobPosition}</h2>
        <h2 className='text-base text-gray-600 p-1'>{interview?.jobExperience} Years of Experience</h2>
        <h2 className='text-sm text-gray-400 p-1'>Created At:{interview.createdAt}</h2>
        <div className='flex justify-between mt-2 gap-5'>
            <Button size="sm" variant="outline" className="w-full border-2"
            onClick={onFeedbackPress}
            >Feedback</Button>
            <Button size="sm" className="w-full"
            onClick={onStart}
            >Start</Button>

        </div>
    </div>
  )
}

export default InterviewItemCard
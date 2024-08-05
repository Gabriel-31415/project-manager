'use client'

import Button from './button'

import { saveTask } from '../lib/actions'
import {  useRef } from 'react'


export default function NewTask({project}) {
  const ref = useRef(null)

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await saveTask(formData)
        ref.current?.reset()
      }}
      className='flex justify-between'
    >
      <input type="hidden" name="authoId" value={project.id} />
      <input
        className='w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
        name="content"
        required
      />

      <Button classes='font-bold flex-none'>Add Task</Button>
    </form>
  )
}
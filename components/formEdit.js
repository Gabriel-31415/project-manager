'use client';
import Link from 'next/link'
import Button from './button'
import ProjectSubmitForm from './project-submit-form'
import Input from './input'
import { updateProject } from '../lib/actions';
import { useState } from 'react';
import { formatDate } from '../src/helper/formatDate'

export function FormEdit({project}) {
  const [ formData, setFormData ] = useState({
    title: project.title,
    description: project.description,
    dueDate: project.dueDate,
  });

  function handleChangeInput(e) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    });
  }
  
  return (
    <form action={updateProject}>
      <p className='flex flex-column justify-end'>
        <Link href="/">
          <Button >
            Cancel
          </Button>
        </Link>
        <ProjectSubmitForm>
        </ProjectSubmitForm>
      </p>
      <div>
        <input type="hidden" name="projectId" value={project.id} />
        <Input type="text" label="Title" name="title" value={formData.title} onChange={handleChangeInput} />
        <Input label="Description" textarea name="description" value={formData.description}  onChange={handleChangeInput} />
        <Input type="date" label="Due Date" name="dueDate" value={formatDate(formData.dueDate)}  onChange={handleChangeInput} />
      </div>
    </form>
  )
}
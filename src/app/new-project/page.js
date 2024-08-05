import Link from 'next/link'
import Button from '@/components/button'
import ProjectSubmitForm from '@/components/project-submit-form'
import Input from '@/components/input'
import { saveProject } from '@/lib/actions';

function NewProject() {
  return (
    <div className="w-1/2 mx-8 ">
      <form action={saveProject}>
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
          <Input type="text" label="Title" name="title" required />
          <Input label="Description" textarea name="description" required />
          <Input type="date" label="Due Date" name="dueDate" required />
        </div>
      </form>
    </div>
  )
}

export default NewProject
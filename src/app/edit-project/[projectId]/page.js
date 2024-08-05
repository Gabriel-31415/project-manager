import { getProject } from '@/lib/actions'
import { FormEdit } from '@/components/formEdit'

async function EditProject({params}) {
  const project = await getProject(params.projectId);

  return (
    <div className="w-1/2 mx-8 ">
      <FormEdit project={project} />
    </div>
  )
}

export default EditProject
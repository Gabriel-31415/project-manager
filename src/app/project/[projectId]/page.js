import { getProject, getTasks } from '@/lib/actions'
import ProjectShow from '@/components/projectShow'

export default async function Project({params}) {
  const project = await getProject(params.projectId);
  const tasks = await getTasks(params.projectId);

  return (
    <ProjectShow project={project} tasks={tasks} />
  )

}
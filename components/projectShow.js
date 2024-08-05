'use client';

import { deleteProject, deleteTask } from '../lib/actions'
import Button from '../components/button'
import NewTask from '../components/new-task'
import Link from 'next/link';

export default function ProjectShow({project, tasks}) {
  const formattedDate = new Date(project.dueDate.substring(0, 10).replaceAll('-', '/')).toLocaleDateString();

  return (
    <div className="w-[35rem] mt-16 mx-8">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={() => deleteProject(project.id)}
          >
            Delete
          </button>
          <Link href={`/edit-project/${project.id}`}>
            <Button classes="bg-stone-900 text-stone-50 hover:">
              Edit
            </Button>
          </Link>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <h1>Tasks</h1>
      <section>
        <NewTask project={project} />
      </section>
      <ul>
        {tasks.map( task => {
          return (
            <li key={task.id} className='px-2 py-1 my-1  flex justify-between align-middle'>
              <span className='self-center'>
                {task.content}
              </span>
              <Button classes="bg-red-500 text-white"  onClick={() => deleteTask(task.id, project.id)}>
                Delete
              </Button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
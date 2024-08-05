import Link from "next/link"

function SideBar({projects}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="uppercase py-4 px-2 font-bold mb-8 md:text-xl" >Your Projects</h2>
      <div>
        <Link href="/new-project">
          <button className="px-4 py-2 rounded-md bg-stone-700 text-stone-400 md:text-base hover:bg-stone-600 hover:text-stone-100">
            + Add Project
          </button>
        </Link>
      </div>
      <div>
        <ul className="mt-4">
          {projects && projects.map(project => {
            return (
              <Link href={`/project/${project.id}`} key={project.id}>
                <li  className="px-4 py-2 text-start text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                    {project.title}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
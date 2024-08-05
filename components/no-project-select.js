import Image from 'next/image'
import imageProject from '../src/assets/project.png'
import Link from "next/link"

export default function NoProjectSelect() {
  return (
    <div className=''>
      <div className='flex flex-col justify-center gap-4'>
        <div className='self-center'>
          <Image
            src={imageProject}
            width={100}
            height={100}
            alt="Picture of the document"
          />
        </div>
        <div>
          <h1>No Project Selected</h1>
        </div>
        <div className='self-center'>
          <Link href="/new-project">
            <button className="px-4 py-2 rounded-md bg-stone-700 text-stone-400 md:text-base hover:bg-stone-600 hover:text-stone-100">
              + Add Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  )

}
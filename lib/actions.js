'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveProject(formData) {
  const project = {
    title: formData.get('title'),
    description: formData.get('description'),
    dueDate: formData.get('dueDate'),
  }
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const response = await fetch("http://localhost:3001/projects", {
    method: "POST",
    body: JSON.stringify(project),
    headers: myHeaders,
  });
  revalidatePath('/');
  redirect('/');
}

export async function getProjects() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const response = await fetch("http://localhost:3001/projects", {
    method: "GET",
    headers: myHeaders,
  })

  return response.json();
}

export async function getProject(id) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const response = await fetch("http://localhost:3001/projects/"+id, {
    method: "GET",
    headers: myHeaders,
  })

  return response.json();
}

export async function updateProject(formData) {
  const id = formData.get('projectId');
  const project = {
    title: formData.get('title'),
    description: formData.get('description'),
    dueDate: new Date(formData.get('dueDate')),
  }
  
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const response = await fetch("http://localhost:3001/projects/"+id, {
    method: "PATCH",
    body: JSON.stringify(project),
    headers: myHeaders,
  });
  revalidatePath('/');
  redirect('/');
}

export async function deleteProject(id) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const response = await fetch("http://localhost:3001/projects/"+id, {
    method: 
    "DELETE",
    headers: myHeaders,
  })

  revalidatePath('/');
  redirect('/');
}

export async function getTasks(id) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const response = await fetch("http://localhost:3001/tasks/"+id, {
    method: "GET",
    headers: myHeaders,
  })

  return response.json();
}

export async function saveTask(formData) {
  const task = {
    content: formData.get('content'),
    authorId: formData.get('authoId'),
  }
  

  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: myHeaders,
    });
  
    const json = await response.json();
  } catch (error) {
    console.error(error.message);
  }

  revalidatePath('/project/'+task.authorId);

}

export async function deleteTask(id, projectId) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const response = await fetch("http://localhost:3001/tasks/"+id, {
    method: 
    "DELETE",
    headers: myHeaders,
  })

  revalidatePath('/project/'+projectId);
  redirect('/project/'+projectId);
}

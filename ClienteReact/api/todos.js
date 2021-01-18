import {  BASE_PATH2  } from "../utils/constants";
import { authFetch } from "../utils/fetch";






  export async function getTodosApi(limit) {
    try {
       
        const url = `${BASE_PATH2}/todos`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
        
    } catch (error) {
        console.log(error);
        return null;
    }
}
export async function getTodosByUrlApi(path) {
  try {
    const url = `${BASE_PATH2}/todos?url=${path}`;
    const response = await fetch(url);
    const result = await response.json();
    return result[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createTodoApi(todo) {
  try {
    const url = `${BASE_PATH2}/todos`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
     
    };
    const result = await fetch(url, params);
    console.log(params)
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteTodosApi(id) {
  console.log(id)
  try {
    const url = `${BASE_PATH2}/todos/${id}`;
    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await fetch(url, params);
    if (result.statusCode === 500) throw "Error del servidor";
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function updateTodoApi(id, todo, logout) {
  console.log("los datos que resive la api son");
  console.log(todo);
  try {
    const url = `${BASE_PATH2}/todos/${id}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    };
    console.log("Los datos para la api son");
    console.log(params);
    const result = await fetch(url, params);
    
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function searchTodoApi(title) {
  try {
    const url = `${BASE_PATH2}/todos?_q=${title}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null; 
  }
}

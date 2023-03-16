
export const createTodo = async (todo) => {
  try {
    const response = await fetch('http://localhost:4000/v1/to-do', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: todo.text,
        description: todo.description,
        is_done: todo.is_done
      })
    });
    const data = await response.json();


    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateToDo = async (id, updatedTodo) => {
  try {
    const respuesta = await fetch(`http://localhost:4000/v1/to-do/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: updatedTodo.text,
        description: updatedTodo.description,
        is_done: updatedTodo.is_done
      })
    });
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
};


export const deleteTodo = async (id) => {
  try {
    const respuesta = await fetch(`http://localhost:4000/v1/to-do/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    return respuesta.status;
  } catch (error) {
    console.log(error);
  }
}

export const updateIsDone = async (id) => {
  try {
    const respuesta = await fetch(`http://localhost:4000/v1/to-do/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    });
    return respuesta.status;
  } catch (error) {
    console.log(error);
  }
}

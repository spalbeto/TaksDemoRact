import React, { useState, useEffect } from "react";
import { Grid, Button } from "semantic-ui-react";
import { map, size } from "lodash";
import { getTodosApi, deleteTodosApi} from "../../../api/todos";


export default function ListTodos(props) {
  const { reloadTodos, setReloadTodos, openModal } = props;
  
  

  const [todos, setTodos] = useState(null);

 

  useEffect(() => {
    (async () => {
      const response = await getTodosApi();
      setTodos(response || []);
      setReloadTodos(false);
    })();
  }, [reloadTodos]);

   if (!todos) return null;


  

  return (
    <>
  
    <div className="list-address">
     
        <Grid>
          {map(todos, (todo) => (
            <Grid.Column key={todo.id} mobile={16} tablet={8} computer={4}>
              <Todo
                todo={todo}
               
                setReloadTodos={setReloadTodos}
                openModal={openModal}
              />
            </Grid.Column>
          ))}
        </Grid>

        
     
    </div>
    </>
  );
}




function Todo(props) {
  const { todo,  setReloadTodos, openModal } = props;
  const [loadingDelete, setLoadingDelete] = useState(false);
  

  const deleteTodo = async () => {
    setLoadingDelete(true);
    const response = await deleteTodosApi(todo._id);
    if (response) setReloadTodos(true);
    setLoadingDelete(false);
  }; 

  return (
    <div className="address">
      <p>{todo.title}</p>
      <p>{todo.name}</p>
      <p>{todo.completed}</p>
      
      <p>{todo._id}</p>

      <div className="actions">
        <Button
          primary
          onClick={() => openModal(`Editar: ${todo.title}`, todo)}
        >
          Ver task
        </Button>
        <Button onClick={deleteTodo} loading={loadingDelete}>
          Eliminar
        </Button>
      </div>
    </div>
  );
}
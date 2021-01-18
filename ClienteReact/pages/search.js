import React,  { useState, useEffect } from 'react';
import { searchTodoApi} from "../api/todos";
import { Loader } from "semantic-ui-react";
import { useRouter } from "next/router";
import { size } from "lodash";
import BasicLayout from "../layouts/BasicLayout";
import ListTodos from "../components/Account/ListTodos";

export default function search() {

    const [todos, setTodos] = useState(null);
  const { query } = useRouter();

    useEffect(() => {
        document.getElementById("search-game").focus();
      }, []);


      useEffect(() => {
        (async () => {
          if (size(query.query) > 0) {
            const response = await searchTodoApi(query.query);
            if (size(response) > 0) setTodos(response); 
            else setTodos([]);
            console.log(response);
          } else {
            setTodos([]);
          }
        })();
      }, [query]);
    return (
        <BasicLayout className="search">
             {/* {!todos && <Loader active>Buscando task</Loader>}
             {todos && size(todos) === 0 && (
        <div>
          <h3>No se han encontrado task</h3>
        </div>
      )}
      {size(todos) > 0 && <ListTodos todos={todos} />} */}
        </BasicLayout>
    )
}

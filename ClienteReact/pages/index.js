import React, { useState, useEffect } from "react";
import { size, map } from "lodash";
import BasicLayout from "../layouts/BasicLayout";
import {getTodosApi} from "../api/todos";
import BasicModal from "../components/Modal/BasicModal";
import AddressForm from "../components/Account/TodosForm";
import ListAddress from "../components/Account/ListTodos";
import { Icon } from "semantic-ui-react";

export default function Home() {

 

  const [todos, setTodos] = useState(null);
  console.log(todos);

 

  useEffect(() => {
   
    (async () => {
      const response = await getTodosApi(50);
      if(size(response) > 0 ) {
        setTodos(response);
        console.log(response);
      } else{
        setTodos([]);
      }

    })();
}, []);
  return (
    
     
      <BasicLayout className="home">
      
       
        <Todos />
      </BasicLayout>
      
   
  )
}

function Todos() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formModal, setFormModal] = useState(null);
  const [reloadTodos, setReloadTodos] = useState(false);

  const openModal = (title, todo) => {
    setTitleModal(title);
    setFormModal(
      <AddressForm
        setShowModal={setShowModal}
        setReloadTodos={setReloadTodos}
        newAddress={todo ? false : true}
        todo={todo || null}
      />
    );
    setShowModal(true);
  }

  return (
    <div className="account__addresses">
      <div className="title">
        Todos
        <Icon name="plus"  link onClick={() => openModal("Nueva dirección")} ></ Icon>
        <span>Agregar</span>
      </div>
      <div className="data">
        <ListAddress
          reloadTodos={reloadTodos}
          setReloadTodos={setReloadTodos}
          openModal={openModal}
        />
      </div>

      <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
        {formModal}
      </BasicModal>
    </div>
  );
}
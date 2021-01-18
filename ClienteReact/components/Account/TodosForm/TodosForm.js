import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
 import {createTodoApi, updateTodoApi} from "../../../api/todos";
import { toast } from "react-toastify";

export default function TodosForm(props) {
  const { setShowModal, setReloadTodos, newAddress, todo } = props;
  const [loading, setLoading] = useState(false);
  

  const formik = useFormik({
    initialValues: initialValues(todo),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      newAddress ? createTodo(formData) : updateTodos(formData);
    },
  });

  
  const createTodo = async (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
     
    };
    const response = await createTodoApi(formDataTemp);
    console.log(response);
    if (!response) {
      toast.warning("Error al crear la dirección");
      setLoading(false);
    } else {
      formik.resetForm();
      setReloadTodos(true);
      setLoading(false);
      setShowModal(false);
    }
  };

  const updateTodos = (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
     
    };
    const response = updateTodoApi(todo._id, formDataTemp);
    console.log("el id actualizar es")
    console.log(todo._id)

    if (!response) {
      toast.warning("Error al actualizar la direccion");
      setLoading(false);
    } else {
      formik.resetForm();
      setReloadTodos(true);
      setLoading(false);
      setShowModal(false);
    }
  };
  

  return (
   
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        type="text"
        label="Titulo de todo"
        placeholder="titulo de todo"
        onChange={formik.handleChange}
        value={formik.values.title}
        error={formik.errors.title}
      />

      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          label="Nombre de todo"
          placeholder="Nombre"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <Form.Input
          name="completed"
          type="checkbox"
         
          label="Completed"
          placeholder="Completed"
          onChange={formik.handleChange}
          value={formik.values.completed}
          error={formik.errors.completed}
        />
      </Form.Group>
      
      
      <div className="actions">
        <Button className="submit" type="submit" loading={loading}>
          {newAddress ? "Crear todo" : "Actualizar "}
        </Button>
      </div>
    </Form>
  );
}

function initialValues(todos) {
  return {
    title: todos?.title || "",
    name: todos?.name || "",
    
  };
}

function validationSchema() {
  return {
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    
  };
}

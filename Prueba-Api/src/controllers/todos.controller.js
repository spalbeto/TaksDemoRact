import { json } from "express";
import Todo from "../models/Todo";
import Todos from "../models/Todo";


export const createTodo = async (req, res) => {

    const {name, title, completed }= req.body;

   const newTodos = new Todos({name, title, completed });

   const todosSave = await newTodos.save();
    console.log(todosSave);
    res.status(201).json(todosSave);
}


export const getTodos = async (req, res) => {
   const todos = await Todos.find();
   res.json(todos)
}
export const getTodoById = async (req, res) => {

   
    const todo = await Todos.findById(req.params.todosId);
    res.status(200).json(todo);
}

export const updateTodoById = async (req, res) => {
  const updateTodo =  await Todos.findByIdAndUpdate(req.params.todosId, req.body, {
      new: true
  });
  res.status(200).json(updateTodo);
}

export const delateTodoById = async (req, res) => {
    await Todos.findByIdAndDelete(req.params.todosId);
    res.status(204).json();
}

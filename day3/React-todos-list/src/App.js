import './App.css';
import Header from "./header";
import List from "./list";
import Footer from "./footer";
import Add from "./addTodo";

/* i have made some basic blunders in this project like not following react naming convention while making 
functional components and all so pls excuse me :) */

import React, { useState, useEffect } from 'react'

export default function App() {
  const [todos, setTodos] = useState([]); // here useState hook calls setTodos which will update our list

  useEffect(() => {
    const storedTodoData = JSON.parse(window.localStorage.getItem("Todos"))
    // || (or) is used so that todos = <todos from localStorage> or <a default value>
    setTodos(storedTodoData || [
      // the initial value of todos (if no todos found in localStorage)
      {
        title: "Insert your todo",
        description: "Add a description if you may want",
        // priority: false
        // deadline: "By 12:00pm you gotta finish it !"
      },
      {
        title: "Add a title in the above input",
        description: "A description is optional, you may or may not add it !",
        // priority: true
        // deadline: "By 12:00pm you gotta finish it !"
      },
      {
        title: "You can even add looooong description",
        description: "Initially, Yoga was imparted by the Adiyogi (the first yogi), Shiva, over 15,000 years ago. It was Adiyogi who introduced to humanity the idea that one can evolve beyond one’s present level of existence. He poured his knowing into the legendary Sapta Rishis, or seven sages, who took the tremendous possibility offered by the yogic science to various parts of the world, including Asia, ancient Persia, northern Africa, and South America. It is this fundamental yet sophisticated science of elevating human consciousness that is the source of the world’s spiritual traditions, predating religion by many thousands of years. Yoga is about attaining absolute Balance, piercing Clarity, and an inexhaustible Exuberance. With this, you are immensely fit for life.",
        // priority: false
        // deadline: "By 12:00pm you gotta finish it !"
      },
    ] // array of objects
    )
  }, [/*to mimic componentDidMount()*/])

  useEffect(() => {
    // adding localStorage in useEffect so that item is stored only after state updates and useEffect fires
    window.localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    let text = document.getElementById("exampleFormControlInput1");
    let descr = document.getElementById("exampleFormControlTextarea1");

    if (text.value.trim() !== "") {
      let todoObj; // to store our new todo item
      if (descr.value.trim() !== "")
        todoObj = {
          title: text.value.trim(),
          description: descr.value.trim()
        };
      else
        todoObj = {
          title: text.value.trim(),
          description: "..."
        };

      text.value = "";
      descr.value = "";
      setTodos([...todos, todoObj]);
    }
  };

  const deleteTodo = (removeElem) => {
    // in react this wont update the UI we need to use Hooks
    // let index = todos.indexOf(removeElem);
    // todos.splice(index, 1);

    setTodos(todos.filter(
      (elem) => {
        return elem !== removeElem;
      }));
  };

  return (
    <div className="App">
      <Header />
      <Add new={addTodo} />
      <List todos={todos} del={deleteTodo} />
      <Footer />
    </div>
    // here we passed a JS object todos as react property (props) argument 'todos'
    // don't confuse yourself due to the same name
  )
}
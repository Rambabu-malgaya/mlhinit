import React from 'react';
import Todo from "./todo";

export default function todos({ todos, del }) {
    return (
        <div className="container" style={{marginBottom:"3rem"}}>
            <div className="accordion" id="accordionExample" /* style={{width: "72%"}} */>
                {
                    todos.map((element, index) => {
                        return <Todo todo={element} index={index} del={del} />
                    })
                }
            </div>
        </div>
    );
}

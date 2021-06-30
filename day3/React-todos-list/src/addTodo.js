import React from 'react'

export default function addTodo(props) {
    return (
        <form className="container" onSubmit={(e) => {
            e.preventDefault(); // prevents page reload
            props.new();
        }}>
            <div className="mb-3" style={{ textAlign: "left" }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Add your tasks</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Go to the market and buy a dozen eggs." 
                autoComplete="off"/>
            </div>
            <div className="mb-3" style={{ textAlign: "left" }}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Today is YashV's birthday gotta prepare a cake for him ;)"></textarea>
            </div>
            {/* <div className="form-check d-flex-inline justify-content-start">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Mark as important !</label>
            </div> */}
            <button className="btn btn-success mb-3">
                <h4 className="p-1" style={{ display: "inline" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard-plus" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg>
                </h4>
                Add
            </button>
        </form>
    )
}

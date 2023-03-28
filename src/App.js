import './App.css';
import React, { useState } from 'react';

const App = () => {

    const [todoItem, setTodoItem] = useState([
        { id: 1, name: '일하기' },
        { id: 2, name: '공부하기' },
        { id: 3, name: '운동하기' },
        { id: 4, name: '밥먹기' }
    ]);

    const [inputText, setInputText] = useState('');
    const onHandleChange = e => setInputText(e.target.value);

    const [idValue, setIdValue] = useState();    
    const onHandleClick = () => {
        const todoList = todoItem.concat({
            id: idValue,
            name: inputText
        });
        setIdValue(idValue+1);
        setTodoItem(todoList);
        setInputText('');
    }

    const drawList = todoItem.map((item) => 
        <div key={item.id}>
            <li>
                {item.name}
            </li>
        </div>
    );

    return (
        <>
            <h1>TodoList</h1>
            <ul>{drawList}</ul>
            <input value={inputText} onChange={onHandleChange}/>
            <button onClick={onHandleClick}>추가</button>
        </>
    );
}

export default App;

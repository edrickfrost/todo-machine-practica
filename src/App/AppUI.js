import React from "react";

import { TodoContext } from "./TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Modal } from '../Modal';

function AppUI(){

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
    <React.Fragment>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {error && <p>Desesperate hubo un error</p>}
            {loading && <p>estamos cargando...</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu ToDo</p>}
            { searchedTodos.map(todo => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
        ))}
        </TodoList>

        {!!openModal && (
            <Modal>
                <p>Teletransportacionn!!!</p>
            </Modal>
        )}

        <CreateTodoButton
            setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export {AppUI}
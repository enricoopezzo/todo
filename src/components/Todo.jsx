import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { PencilSquare, Trash, CheckSquare } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export const Todo = ({ task, completeTodo, editTodo, deleteTodo }) => {
  return (
    <Alert variant={`${task.isComplete ? `success` : `secondary`}`} className="d-flex justify-content-between align-items-center">
      <p className={`${task.isComplete ? `text-decoration-line-through` : ``}`}>{task.task}</p>
      <ButtonGroup aria-label="Basic example">
        <OverlayTrigger overlay={<Tooltip>{`${task.isComplete ? `mark as uncomplete` : `mark as complete`}`}</Tooltip>}>
          <Button variant="light" className="complete-button" onClick={() => completeTodo(task.id)}><CheckSquare /></Button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip>edit</Tooltip>}>
        <Button variant="light" className="edit-button" onClick={() => editTodo(task.id)}><PencilSquare /></Button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip>delete</Tooltip>}>
        <Button variant="light" className="delete-button" onClick={() => deleteTodo(task.id)}><Trash /></Button>
        </OverlayTrigger>
      </ButtonGroup>
    </Alert>

  )
}



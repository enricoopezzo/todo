import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
      e.preventDefault();
      editTodo(value, task.id);
    }


  return (
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <Form.Control placeholder="Update Task" onChange={(e)=> setValue(e.target.value)} value={value} required/>
          <Button variant="outline-secondary" id="button-addon2" type="submit">
            UPDATE
          </Button>
        </InputGroup>
      </Form>
  )
}

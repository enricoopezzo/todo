import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      addTodo(value);
      setValue("");
    }


  return (
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <Form.Control placeholder="Add New Task" onChange={(e)=> setValue(e.target.value)} value={value} required/>
          <Button variant="outline-secondary" id="button-addon2" type="submit">
            ADD
          </Button>
        </InputGroup>
      </Form>
  )
}

import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addtasktolist } from '../slices/taskslice';
import { useDispatch } from 'react-redux';

const Addtask = () => {

    const dispatch = useDispatch(addtasktolist);

    const [title,settitle] = useState("");
    const [description,setdescription] = useState("");

    const Addtask = (e) => {          //e is event passinng
        e.preventDefault()
        console.log({title,description})
        dispatch(addtasktolist({title,description}))
        settitle("")              //   to empty the aftr we put info
        setdescription("")         //   to empty the aftr we put info

    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e)=>settitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={description} onChange={(e)=>setdescription(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-2' onClick={(e)=>Addtask(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Addtask
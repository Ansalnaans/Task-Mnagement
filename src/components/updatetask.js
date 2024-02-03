import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { updatetaskfromlist } from '../slices/taskslice';

function MyVerticallyCenteredModal(props) {

    const {selectedtask} = useSelector((state)=> state.tasks)
    
    const [id,setid] = useState(0);
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const dispatch = useDispatch()

    
    useEffect(()=>{
        if(Object.keys(selectedtask).length !==0){
        setid(selectedtask.id)
        settitle(selectedtask.title)
        setdescription(selectedtask.description)
        }
    },[selectedtask])

    const updateTask = () => {
        props.onHide()
        dispatch(updatetaskfromlist({id,title,description}))
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Tasks
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => settitle(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" value={description} onChange={(e) => setdescription(e.target.value)} />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default MyVerticallyCenteredModal;
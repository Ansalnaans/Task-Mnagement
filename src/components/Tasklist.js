import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/esm/Button';
import MyVerticallyCenteredModal from './updatetask';
import { useSelector,useDispatch } from 'react-redux';
import { setselectedtask,removetaskfromlist } from '../slices/taskslice';

const Tasklist = () => {

    const { tasklist } = useSelector((state)=>state.tasks)
    const dispatch = useDispatch()

    const [modalShow, setModalShow] = useState(false);

    const updatetask = (task) => {
        console.log("updatetask")
        setModalShow(true)
        dispatch(setselectedtask(task))
    }
    const deletetask = (task) => {
        console.log("deleted task")
        dispatch(removetaskfromlist(task))
    }
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tasklist && tasklist.map((task,index) => {
                            return(
                                <tr key={task.id}>
                                    <td>{index+1}</td>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>
                                        <Button onClick={() => updatetask(task)}><i className="bi bi-pencil-square"></i></Button>&nbsp;
                                        <Button onClick={() => deletetask(task)}><i className="bi bi-trash"></i></Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </div>
    )
}

export default Tasklist
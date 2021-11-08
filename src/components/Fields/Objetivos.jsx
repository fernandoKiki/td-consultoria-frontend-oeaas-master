import React from 'react';
import { IoMdTrash, IoMdAdd } from 'react-icons/io';
import { Form, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

function Objetivos({ objetivos, reference, addObjetivo, removeObjetivo, edit }) {
    if (edit) {
        return (
            <Form.Group>
                <Form.Label><strong>Objetivos</strong></Form.Label>
                <ListGroup className="mb-2">
                    {
                        objetivos.map((item, idx) => <ListGroupItem key={idx}>{idx + 1}. {item} <Button variant="outline-danger" onClick={() => removeObjetivo(idx)}><IoMdTrash /></Button></ListGroupItem>)
                    }
                </ListGroup>
                <Form.Control className="mb-1" type="text" as="textarea" rows="2" placeholder="Nuevo Objetivo" ref={reference} />
                <Button variant="outline-primary" onClick={() => addObjetivo()} block><IoMdAdd /> Agregar</Button>
            </Form.Group>
        );
    } else {
        if (objetivos) {
            return (
                <>
                    <p><strong>Objetivos</strong></p>
                    {
                        objetivos.length > 0 ?
                            <ListGroup className="mb-2" variant="flush">
                                {
                                    objetivos.map((item, idx) => <ListGroupItem key={idx}>{idx + 1}. {item.objetivo}</ListGroupItem>)
                                }
                            </ListGroup> : <p className="mb-5">No hay elementos para mostrar...</p>
                    }
                </>
            );
        } else {
            return <p className="mb-5">No hay elementos para mostrar...</p>;
        }
    }
}

export default Objetivos;
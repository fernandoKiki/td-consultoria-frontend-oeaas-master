import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

function TratamientoTemporalForm(props) {
    const niveles = ['Anual', 'Mensual', 'Semanal', 'Diario', 'Hora'];

    const handleTiempo = (e) => {
        props.handleInputChange(e);
    }

    return (
        <>
            <Form.Group>
                <Form.Label><strong>Planificacion</strong></Form.Label>
                <Form.Control
                    as="select"
                    name="planificacion"
                    value={props.tratamientoTemporal.planificacion}
                    onChange={props.handleInputChange} custom>
                    <option value="Planificado">Planificado</option>
                    <option value="Reconstruido">Reconstruido</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label><strong>Nivel Temporal</strong></Form.Label>
                <Form.Control
                    as="select"
                    name="nivelTemporal"
                    value={props.tratamientoTemporal.nivelTemporal}
                    onChange={props.handleInputChange} custom>
                    {
                        niveles.map((item, idx) => <option key={idx} value={item}>{item}</option>)
                    }
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label><strong>Fecha de Inicio</strong></Form.Label>
                <Form.Control type="date" name="fechaInicio" onChange={handleTiempo} value={props.tratamientoTemporal.fechaInicio} />
            </Form.Group>
            <Form.Group>
                <Form.Label><strong>Fecha de Fin</strong></Form.Label>
                <Form.Control type="date" name="fechaFin" onChange={handleTiempo} value={props.tratamientoTemporal.fechaFin} />
            </Form.Group>
        </>
    );
}

export default TratamientoTemporalForm;
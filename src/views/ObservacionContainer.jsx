import React from 'react';
import { Button } from 'react-bootstrap';
import { IoMdAdd } from 'react-icons/io';
import ObservacionTable from '../components/ObservacionTable';

export default function ObservacionContainer(props) {
    return (
        <div className="container mt-4" style={{ maxWidth: '1200px' }}>
            <div className="row">
                <div className="col-lg-12">
                    <Button className="mt-3 mb-3" variant="outline-success" onClick={() => {
                        props.history.push('/observaciones/create');
                    }}><IoMdAdd /> Insertar</Button>
                    <ObservacionTable />
                </div>
            </div>
        </div>
    );
}
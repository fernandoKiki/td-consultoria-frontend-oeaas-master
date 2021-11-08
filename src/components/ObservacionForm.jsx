import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Nombre from './fields/Nombre';
import Objetivos from './fields/Objetivos';
import TratamientoTemporalForm from './fields/TratamientoTemporalForm';
import * as ObservacionApi from '../api/ObservacionApi';

class ObservacionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            objetivos: [],
            observadores: [],
            tratamientoTemporal: {
                inicioFin: false,
                fechaInicio: '',
                fechaFin: '',
                nivelTemporal: 'Diario',
                planificacion: 'Planificado',
                canalComunicacion: 'No definido'
            }
        }

        this.objetivosInput = React.createRef();
    }

    onInputChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleTratamientoTemporalChange = (e) => {
        this.setState({
            ...this.state,
            tratamientoTemporal: {
                ...this.state.tratamientoTemporal,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            nombre: this.state.nombre,
            idInteraccion: 1,
            objetivos: this.state.objetivos,
            tratamientoTemporal: this.state.tratamientoTemporal
        };

        ObservacionApi.saveObservacion(body).then(data => {
            this.props.history.push("/observaciones");
        }).catch(err => console.log(err));

    }

    addObjetivo = () => {
        this.setState({
            ...this.state,
            objetivos: this.state.objetivos.concat(this.objetivosInput.current.value)
        });
        this.objetivosInput.current.value = "";
    }

    removeObjetivo = (idx) => {
        const objetivos = this.state.objetivos;
        objetivos.splice(idx, 1);
        this.setState({
            ...this.state,
            objetivos: objetivos
        });
    }

    render() {
        return (
            <>
                <h3>Nueva Observacion</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Nombre
                        value={this.state.nombre}
                        onChange={this.onInputChange}
                        edit />
                    <TratamientoTemporalForm
                        handleInputChange={this.handleTratamientoTemporalChange}
                        tratamientoTemporal={this.state.tratamientoTemporal} />
                    <Objetivos
                        objetivos={this.state.objetivos}
                        reference={this.objetivosInput}
                        addObjetivo={this.addObjetivo}
                        removeObjetivo={this.removeObjetivo}
                        edit
                    />
                    <Form.Group>
                        <Button variant="success" type="submit">Aceptar</Button> <Button variant="danger" onClick={() => this.props.history.push("/")} >Cancelar</Button>
                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default ObservacionForm;
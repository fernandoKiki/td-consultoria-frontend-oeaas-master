import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import * as ObservacionApi from '../api/ObservacionApi';

class ObservacionTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            observaciones: []
        };
    }

    componentDidMount() {
        this.getObservaciones();
    }

    getObservaciones = () => {
        ObservacionApi.getObservaciones().then(data => {
            console.log(data);
            this.setState({
                observaciones: data,
                loading: false
            });
        }).catch(err => {
            console.log(err);
            this.setState({
                observaciones: [],
                loading: false
            });
        });
    }

    render() {
        if (this.state.loading) {
            return <p>Cargando observaciones.... </p>;
        }

        if (this.state.observaciones.length === 0) {
            return <p>No hay observaciones...</p>;
        } else {
            return (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Planificacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.observaciones.map(item =>
                                <tr key={item.id.toString()} onClick={() => {
                                    this.props.history.push(`/observaciones/view/${item.id}`);
                                }}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>
                                    {
                                        item.tratamientoTemporal !== undefined ? item.tratamientoTemporal.fechaInicio.split('T')[0] : '-'
                                    }</td>
                                    <td>
                                    {
                                        item.tratamientoTemporal !== undefined ? item.tratamientoTemporal.planificacion : '-'
                                    }</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>);
        }


    }
}

export default withRouter(ObservacionTable);
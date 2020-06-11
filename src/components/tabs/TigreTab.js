import React from "react";
import {TigreData} from "../../data/tigre-data";
import TigreCharts from "../charts/TigreCharts";
import TigreTestCards from "../cards/TigreTestCards";
import TigreCasesCards from "../cards/TigreCasesCards";

export default class TigreTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lastUpdate: ''};
    }


    componentDidMount() {
        this.setState({lastUpdate: this.getDateFormatted()});
    }

    getDateFormatted() {
        const date = TigreData[0].date.split('T')[0].split('-');
        const year = date[0];
        const month = date[1]
        const day = date[2];
        return day + '/' + month + '/' + year;
    }

    render() {
        const {lastUpdate} = this.state;
        const sourceLabel = 'Municipalidad de Tigre';
        const sourceUrl = 'https://www.facebook.com/pg/TigreSalud/'
        return (
            <div>
                <div className={'last-update'}>
                    <h3>Última actualización: {lastUpdate}</h3>
                </div>
                <div>
                    <TigreCasesCards/>
                </div>
                <div>
                    <TigreCharts/>
                </div>
                <div>
                    <TigreTestCards/>
                </div>
                <div>
                    <p className={'source'}><strong>Fuente: </strong><a
                        rel={'noopener noreferrer'}
                        target={'_blank'}
                        href={sourceUrl}>{sourceLabel}</a></p>
                </div>
            </div>
        )
    }
}

import React from "react";
import {SanMiguelData} from "../../data/san-miguel-data";
import SanMiguelCharts from "../charts/SanMiguelCharts";
import SanMiguelTestCards from "../cards/SanMiguelTestCards";
import SanMiguelCasesCards from "../cards/SanMiguelCasesCards";

export default class SanMiguelTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lastUpdate: ''};
    }


    componentDidMount() {
        this.setState({lastUpdate: this.getDateFormatted()});
    }

    getDateFormatted() {
        const date = SanMiguelData[0].date.split('T')[0].split('-');
        const year = date[0];
        const month = date[1]
        const day = date[2];
        return day + '/' + month + '/' + year;
    }

    render() {
        const {lastUpdate} = this.state;
        const sourceLabel = 'Municipalidad de San Miguel';
        const sourceUrl = 'https://www.msm.gov.ar/prensa/informe-covid-san-miguel/'
        return (
            <div>
                <div className={'last-update'}>
                    <h3>Última actualización: {lastUpdate}</h3>
                </div>
                <div>
                    <SanMiguelCasesCards/>
                </div>
                <div>
                    <SanMiguelCharts/>
                </div>
                <div>
                    <SanMiguelTestCards/>
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

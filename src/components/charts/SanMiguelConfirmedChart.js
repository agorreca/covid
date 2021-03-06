import React from "react";
import {VictoryPie, VictoryChart, VictoryLegend, VictoryAxis} from "victory";
import {SanMiguelData} from "../../data/san-miguel-data";
import ChartContainer from "./ChartContainer";


export default class SanMiguelConfirmedChart extends React.Component {

    constructor(props) {
        super(props);
        const last = SanMiguelData[0];
        this.state = {
            total: last.cases.total,
            colors: ["#3DB085", "#30A0DB", "#FBCF4A", "#844F9B", "#E95B54"],
            data: [
                {x: "Alta definitiva", y: last.cases.cured},
                {x: "Sin necesidad \n de internación", y: last.cases.goodStatus},
                {x: "Internadas en \n el municipio", y: last.cases.insideHospitalized},
                {x: "Internadas fuera \n del municipio", y: last.cases.outsideHospitalized},
                {x: "Fallecidas", y: last.cases.dead},
            ]
        }
    }


    render() {
        return (
            <ChartContainer customClass={'confirmed-chart'} title={'Confirmados: ' + this.state.total}>
                <VictoryChart
                    height={300}
                    padding={{top: 20, bottom: 30, right: 0, left: 100}}>
                    <VictoryPie
                        height={260}
                        labelRadius={95}
                        colorScale={this.state.colors}
                        data={this.state.data}
                        labels={({datum}) => datum.y}
                        style={{
                            labels: {fontWeight: 600, fontSize: '18px'}
                        }}
                    />
                    <VictoryLegend x={10} y={30}
                                   title={'Personas'}
                                   gutter={20}
                                   className={'confirmed-legend'}
                                   orientation="vertical"
                                   style={{
                                       title: {fontWeight: 600, fontSize: '16px'},
                                   }}
                                   colorScale={this.state.colors}
                                   data={this.state.data.map(elem => ({name: elem.x}))}
                    />
                    <VictoryAxis dependentAxis style={{
                        axis: {stroke: "transparent"},
                        ticks: {stroke: "transparent"},
                        tickLabels: {fill: "transparent"}
                    }}/>
                    <VictoryAxis style={{
                        axis: {stroke: "transparent"},
                        ticks: {stroke: "transparent"},
                        tickLabels: {fill: "transparent"}
                    }}/>
                </VictoryChart>
            </ChartContainer>
        )
    }

}

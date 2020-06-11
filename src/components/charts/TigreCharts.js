import React from "react";
import TigreTotalCasesChart from "./TigreTotalCasesChart";
import {Col, Container, Row} from "react-bootstrap";
import './charts.scss';
import TigreDayCases from "./TigreDayCases";
import TigreConfirmedChart from "./TigreConfirmedChart";
import TigreLethalityChart from "./TigreLethalityChart";

export default class TigreCharts extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <TigreTotalCasesChart/>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <TigreDayCases/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <TigreConfirmedChart/>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <TigreLethalityChart/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

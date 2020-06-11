import React from "react";
import SanMiguelTotalCasesChart from "./SanMiguelTotalCasesChart";
import {Col, Container, Row} from "react-bootstrap";
import './charts.scss';
import SanMiguelDayCases from "./SanMiguelDayCases";
import SanMiguelConfirmedChart from "./SanMiguelConfirmedChart";
import SanMiguelLethalityChart from "./SanMiguelLethalityChart";

export default class SanMiguelCharts extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <SanMiguelTotalCasesChart/>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <SanMiguelDayCases/>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <SanMiguelConfirmedChart/>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <SanMiguelLethalityChart/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

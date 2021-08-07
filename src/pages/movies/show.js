import React, { Component, useEffect, useState } from "react";
import { Col, Collapse, Container, Row, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Show() {

    let { id } = useParams();
    const [movie, setMovie] = useState({});

    const getData = async () => {
        const response = await fetch('http://localhost:3001/api/movies/' + id);
        const data = await response.json();
        setMovie(data);
    }

    useEffect(() => {
        getData();
    }, [movie]);

    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col span={12}>
                        <Table striped hover>
                            <tbody>
                                <tr>
                                    <th className="text-end" width="25%">ID</th>
                                    <th width="5px">:</th>
                                    <td>{movie.id}</td>
                                </tr>
                                <tr>
                                    <th className="text-end" width="25%">Original Title</th>
                                    <th width="5px">:</th>
                                    <td>{movie.original_title}</td>
                                </tr>
                                <tr>
                                    <th className="text-end" width="25%">Overview</th>
                                    <th width="5px">:</th>
                                    <td>{movie.overview}</td>
                                </tr>
                                <tr>
                                    <th className="text-end" width="25%">Release date</th>
                                    <th width="5px">:</th>
                                    <td>{movie.release_date}</td>
                                </tr>
                                <tr>
                                    <th className="text-end" width="25%">Runtime</th>
                                    <th width="5px">:</th>
                                    <td>{movie.runtime}</td>
                                </tr>
                                <tr>
                                    <th className="text-end" width="25%">Status</th>
                                    <th width="5px">:</th>
                                    <td>{movie.status}</td>
                                </tr>
                                <tr>
                                    <th className="text-end" width="25%">Tagline</th>
                                    <th width="5px">:</th>
                                    <td>{movie.tagline}</td>
                                </tr>
                                <tr>
                                    <th className="text-end" width="25%">Title</th>
                                    <th width="5px">:</th>
                                    <td>{movie.title}</td>
                                </tr>
                                <tr>
                                    <th className="text-end" width="25%">Vote Average</th>
                                    <th width="5px">:</th>
                                    <td>{movie.vote_average}</td>
                                </tr>
                                <tr>
                                    <th className="text-end" width="25%">VOte Count</th>
                                    <th width="5px">:</th>
                                    <td>{movie.vote_count}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Link to={"/"}>Back</Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Show;
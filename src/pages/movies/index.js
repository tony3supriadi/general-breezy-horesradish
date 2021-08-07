import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Movies() {
    const [movies, setMovies] = useState([]);
  
    const getData = async () => {
        const response = await fetch('http://localhost:3001/api/movies');
        const data = await response.json();
        setMovies(data);
    }

    useEffect(() => {
        getData();
    }, [movies]);

    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col span={12}>
                        <h2>List Movies</h2>
                        <Table striped hover>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th className={"d-none d-md-table-cell"}>Tagline</th>
                                    <th className={"d-none d-md-table-cell"}>Vote Average</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(movie => {
                                    return (
                                        <tr key={movie.id}>
                                            <td>{movie.title}</td>
                                            <td className={"d-none d-md-table-cell"}>{movie.tagline}</td>
                                            <td className={"d-none d-md-table-cell"}>{movie.vote_average}</td>
                                            <td>
                                                <Link to={`/movies/` + movie.id}>Preview</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Movies;
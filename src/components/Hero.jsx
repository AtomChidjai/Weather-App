import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import ResultPage from './ResultPage';
import axios from 'axios'; // Import axios

const Hero = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [resdata, setResdata] = useState(null); 
    

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log('latitude   : ' + latitude);
        console.log('longitude : ' + longitude);
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    lat: latitude,
                    lon: longitude,
                    appid: 'API-KEYS',
                    units: 'metric'
                }
            });
            console.log(response);
            setResdata(response.data);
        } catch (err) {
            setTemp(null);
        }
    };

    useEffect(() => {
        console.log('Response:', resdata);
    }, [resdata]);

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <Card className='bg-gray text-black text-center' style={{ height: '500px' }}>
                            <Card.Header>Choose your location</Card.Header>
                            <Container className='d-flex justify-content-center align-items-center' style={{ height: '200px', width: '100%' }}>
                                <Card.Text><FaQuestionCircle style={{ fontSize: '5em', color: 'lightgray' }} /></Card.Text>
                            </Container>
                            <Card.Body className='bg-gray border-top'>
                                <form onSubmit={submitHandler}>
                                    <label className='mb-3'>Latitude</label>
                                    <input
                                        className='form-control mb-3'
                                        type='text'
                                        value={latitude}
                                        placeholder='ex. 44.34'
                                        onChange={(e) => setLatitude(e.target.value)}
                                    />
                                    <label className='mb-3 mt-2'>Longitude</label>
                                    <input
                                        className='form-control mb-3'
                                        type='text'
                                        value={longitude}
                                        placeholder='ex. 10.99'
                                        onChange={(e) => setLongitude(e.target.value)}
                                    />
                                    <Button type='submit' expand='lg' style={{ width: '60%' }}>Submit</Button>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        {resdata ? <ResultPage response={resdata} /> :
                            <Card className='bg-light text-black text-center' style={{height : '500px'}}>
                            <Card.Header>Result</Card.Header>     
                            <Card.Body>
                                <Card.Text>
                                    There is no input yet.
                                </Card.Text>
                            </Card.Body>                      
                        </Card>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Hero;

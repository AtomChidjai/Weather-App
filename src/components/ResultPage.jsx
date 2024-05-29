import React from 'react'
import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
const ResultPage = ({ response }) => {

  const [weatherstate, setWeatherstate] = useState('');
  function imgweather(id) {
    if(id >= 200 && id < 233)
    {
      setWeatherstate('⛈️');
    }
    else if (id >= 300 && id < 322)
    {
      setWeatherstate('🌦️');
    }
    else if (id >= 500 && id < 532)
    {
      setWeatherstate('🌧️');
    }
    else if (id >= 600 && id < 623)
    {
      setWeatherstate('❄️');
    } 
    else if (id >= 700 && id < 782)
    {
      setWeatherstate('🌫️');
    }
    else if (id == 800)
    {
      setWeatherstate('☀️');
    }
    else 
    {
      setWeatherstate('☁️');
    }
  }

  useEffect(()=>{
    imgweather(response.weather[0].id);
  }, [response]);

  return (
    <>
      <Card className='bg-light text-black text-center' style={{ height: '500px' }}>
        <Card.Header>Result</Card.Header>
        <Card.Body>
          <Card.Text style={{fontSize : '150px'}}>
              {weatherstate}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='p-4'>
            Temperature : {response.main.temp}°C <br />
            Weather : {response.weather[0].main} <br />
            Description : {response.weather[0].description}
        </Card.Footer>
      </Card>
    </>
  )
}

export default ResultPage
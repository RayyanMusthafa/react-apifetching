import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Api.css';

function Api() {
  const base_url = 'https://jsonplaceholder.typicode.com/posts';
  const [product, setProducts] = useState([]);

  // API fetching - asynchronous actions
  const fetchData = async () => {
      const response = await fetch(base_url)
      .then(response=>response.json())
      .then(products=>setProducts(products))
      console.log(response);
    } 
  

  useEffect(() => {fetchData()}, []);

  return (
    <div className='cards'>
      {product.map((item) => (
        <Card style={{ width: '18rem', margin: '34px'}}>
          <Card.Body>
            <Card.Title style={{textAlign:'center'}}>ID: {item.id}</Card.Title>
            <Card.Text>
              <h5>Title: {item.title}</h5>
              {item.body}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Api;

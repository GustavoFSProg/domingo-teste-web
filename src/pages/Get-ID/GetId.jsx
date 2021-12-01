import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { Container, Grid, MapContainer } from './style-app'

function GetId() {
  const [product, setProducts] = useState([])

  async function getById() {
    const id = localStorage.getItem('ID')

    const { data } = await api.get(`/get-by-id/${id}`)

    console.log(data)

    setProducts(data)

    return product
  }

  useEffect(() => {
    getById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container>
        <Link
          style={{
            textDecoration: 'none',
            fontSize: '22px',
            color: 'darkblue',
          }}
          to="/"
        >
          Home
        </Link>
      </Container>

      <Grid>
        <MapContainer>
          <ul style={{ listStyle: 'none', marginLeft: '-42px' }} key={product._id}>
            <li>Titulo: {product.title}</li>
            <br />

            <li>Preço: {product.price}</li>
            <br />

            <li>
              <img src={product.image} alt="imagem" width="160" />
            </li>
          </ul>
        </MapContainer>
      </Grid>
    </>
  )
}

export default GetId

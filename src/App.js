import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import api from './services/api'
import { Container, Grid, MapContainer } from './style-app'

function App() {
  const [product, setProducts] = useState([])

  async function getAll() {
    const { data } = await api.get('/')

    console.log(data)

    setProducts(data)

    return product
  }

  useEffect(() => {
    getAll()
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
          to="/register"
        >
          Cadastro
        </Link>
      </Container>

      <Grid>
        {product.map((product) => {
          return (
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
          )
        })}
      </Grid>
    </>
  )
}

export default App

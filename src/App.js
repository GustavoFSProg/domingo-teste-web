import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from './services/api'
import { Container, Grid, MapContainer, Button } from './style-app'

function App() {
  const [product, setProducts] = useState([])

  const history = useHistory()

  async function getAll() {
    const { data } = await api.get('/')

    console.log(data)

    setProducts(data)

    return product
  }

  function handleClick(id) {
    localStorage.setItem('ID', id)

    return history.push('/get')
  }

  function handleClickUpdate(id) {
    localStorage.setItem('ID', id)

    return history.push('/update')
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
                <Button style={{ marginTop: '30px' }} onClick={() => handleClick(product._id)}>
                  Perfil
                </Button>
                <Button
                  style={{ marginTop: '16px' }}
                  onClick={() => handleClickUpdate(product._id)}
                >
                  Editar
                </Button>
              </ul>
              <br />
            </MapContainer>
          )
        })}
      </Grid>
    </>
  )
}

export default App

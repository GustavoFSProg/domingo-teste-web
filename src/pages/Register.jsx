import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import api from '../services/api'
import { Button, Container, Input, Span } from './style'

function Register() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const history = useHistory()

  async function handleProduct(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      data.append('title', title)
      data.append('price', price)
      data.append('image', image)

      await api.post('/create', data)

      history.push('/')

      return alert('Product Registered with success!!')
    } catch (error) {
      return alert('ERRO!!!')
    }
  }

  return (
    <Container>
      <br />
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '30px',
          marginBottom: '30px',
        }}
      >
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
      </div>
      <br />
      <br />
      <h1>Cadastro de Produtos</h1>
      <br />
      <br />

      <form
        onSubmit={handleProduct}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Input
          type="file"
          id="image"
          className="botao-imagem"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Span>Title</Span>
        <Input
          placeholder="Digite o o Titulo do Produto"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <Span>Preço</Span>
        <Input
          placeholder="Digite o Preço do Produto"
          id="title"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <Button type="submit">Cadastrar</Button>
      </form>
    </Container>
  )
}

export default Register

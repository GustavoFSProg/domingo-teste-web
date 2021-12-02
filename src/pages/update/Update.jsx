import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'
import { Button, Container, Input, Span } from './style'
import { useEffect } from 'react/cjs/react.development'

function Update() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
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

  const history = useHistory()

  async function handleProduct(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      const id = localStorage.getItem('ID')

      data.append('title', title)
      data.append('price', price)
      data.append('image', image)

      await api.put(`/update/${id}`, data)

      history.push('/')

      return alert('Product Edited  with success!!')
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
          placeholder={product.title}
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <Span>Preço</Span>
        <Input
          placeholder={product.price}
          id="title"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <Button type="submit">Editar</Button>
      </form>
    </Container>
  )
}

export default Update

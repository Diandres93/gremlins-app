import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CreatePartner = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const selectedPartner = useSelector(state => state.partner.selectedPartner)
  const isEdit = id && selectedPartner._id

  const [partner, setPartner] = useState(isEdit
    ? selectedPartner
    : {
        name: '',
        lastName: '',
        documentType: 'CC',
        partnerId: '',
        phone: '',
        address: '',
        email: '',
        type: 'CLIENTE',
        error: ''
      })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setPartner({ ...partner, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      // Validaciones
      if (partner.partnerId.length < 10 || partner.partnerId.length > 20) {
        setPartner({
          ...partner,
          error: 'El número de documento debe tener entre 11 y 14 caracteres'
        })
        return
      }
      if (!partner.email.includes('@') || !partner.email.includes('.')) {
        setPartner({ ...partner, error: 'Debe ingresar un email válido' })
        return
      }

      // Enviar solicitud
      if (id) {
        const actualizando = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/partner/${id}`, partner)
        console.log(actualizando)
      } else {
        const creando = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/partner`,
          partner
        )
        console.log(creando)
      }

      navigate('/partner/partnersList')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-5 p-5">
      <Form onSubmit={handleSubmit}>
        {partner.error && <p>{partner.error}</p>}
        {isEdit && (
          <Form.Group controlId="name">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="_id"
              value={partner._id}
              required
              disabled
            />
          </Form.Group>
        )}
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={partner.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={partner.lastName }
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="documentType">
          <Form.Label>Tipo de documento</Form.Label>
          <Form.Control
            as="select"
            name="documentType"
            value={partner.documentType}
            onChange={handleInputChange}
          >
            <option value="CC">CC</option>
            <option value="NIT">NIT</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="partnerId">
          <Form.Label>ID de Partner</Form.Label>
          <Form.Control
            type="number"
            name="partnerId"
            value={partner.partnerId}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={partner.phone}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={partner.address}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={partner.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="type">
          <Form.Label>Tipo de partner</Form.Label>
          <Form.Control
            as="select"
            name="type"
            value={partner.type}
            onChange={handleInputChange}
          >
            <option value="CLIENTE">Cliente</option>
            <option value="DISTRIBUIDOR">Distribuidor</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-5">
          {isEdit ? 'Actualizar Partner' : 'Crear Partner' }
        </Button>
      </Form>
    </div>
  )
}

export default CreatePartner

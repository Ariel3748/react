
import '../styles/Contacto.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contacto({}) {
  return (
    <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        boxSizing: 'border-box',
      }}
    >
      <Form
        style={{
          width: '100%',
          maxWidth: '600px',
          minWidth: '400px',
          backgroundColor: '#f8f9fa',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCelular">
          <Form.Control type="number" placeholder="Ingrese su celular" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMensaje">
          <Form.Control as="textarea" rows={3} placeholder="Deje su mensaje aquí" />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ width: '100%' }}>
          Enviar
        </Button>
      </Form>
    </div>
    </>
  );
}

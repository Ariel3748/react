
import { Container} from 'react-bootstrap';

function Main(){
    return(
        <>
        <div>
    <main className="flex-grow-1">
      <Container className="text-center py-5">
        <h2 className="mb-4">Bienvenido a Mi Tienda Online</h2>

        <p className="lead mb-4">
          Descubrí una experiencia de compra rápida, segura y conveniente. Encontrá productos de calidad, precios competitivos
          y promociones especiales pensadas para vos.
        </p>

        <p className="mb-4">
          Nuestro catálogo incluye artículos de tecnología, indumentaria, hogar y mucho más. Podés navegar cómodamente,
          agregar productos a tu carrito y finalizar tu compra en pocos pasos.
        </p>

        <p className="mb-5">
          Ofrecemos envíos a todo el país, múltiples medios de pago y un equipo de atención al cliente dispuesto a ayudarte en lo que necesites.
        </p>

        <hr className="my-5" />

        <p className="text-muted fst-italic">
          Esta página es un proyecto ficticio desarrollado como parte del programa <strong>Talento Tech</strong>. 
          No representa una tienda real ni comercializa productos.
        </p>
      </Container>
    </main>
        </div>
        </>
    )
}

export default Main
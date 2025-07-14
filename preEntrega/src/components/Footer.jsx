import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer(){
    return(
        <>
        <footer className="bg-light text-center py-3 mt-auto text-muted">
            © {new Date().getFullYear()} Ariel Oliva Talento Tech
        </footer>
        </>
    )
}
export default Footer
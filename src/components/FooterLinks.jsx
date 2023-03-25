import { Alert } from 'react-bootstrap';
import React from 'react'
import { Linkedin, CodeSlash } from 'react-bootstrap-icons';


export const FooterLinks = () => {
  return (
    <Alert variant="secondary" className="d-flex align-items-end">
        <a href="https://www.linkedin.com/in/enricoopezzo/" target="_blank" class="link-secondary"><Linkedin /></a>
        <a href="https://github.com/enricoopezzo/todo" target="_blank" class="link-secondary"><CodeSlash /></a>
    </Alert>
  )
}

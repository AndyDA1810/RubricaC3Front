import React from "react";

const Footer = () => {
  return (
  
    <div className="footer bg-dark text-white p-3 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <p>
              <a href="https://github.com/AndyDA1810" 
              style={{ textDecoration: 'none', color: 'white' }}>
                Andrea Domínguez</a>
            </p>
            <p>&copy; 2023 TuNombre. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="wrapper">
      <aside>
        <header>
          <h1 class="logo">Greco Shoppin</h1>
          <div class="contenedor-paginas-menu">  
          <a class="botonMenu" href="./public/pages/formularioCategoria.html">Categoria</a>
          <a class="botonMenu" href="./public/pages/formularioProducto.html">Producto</a>
          <a class="botonMenu" href="./public/pages/formularioStock.html">Stock</a>
          </div> 
        </header>
        <nav class="menu-contenedor">
          <ul class="menu">
            <li>
              <button id="todos" class="boton-menu boton-categoria active">
                <i class="bi bi-hand-index"></i> Todos los productos</button>
            </li>                      
            <li>
              <div id="contenedor-botones" class="contenedor-botones"></div>                
            </li>           
            <li>
              <a class="boton-menu boton-carrito" href="#carrito-section">
              <i class="bi bi-cart-check-fill"></i> Carrito <span id="numerito" class="numerito">0</span></a>
            </li>
          </ul>
        </nav>
        <footer>
          <p class="texto-footer">© 2023 Greys'2 Coder </p>
        </footer>
      </aside>

      <main>
        <h2 id="titulo-principal" class="titulo-principal">Todos los productos</h2>
        <div id="contenedor-productos" class="contenedor-productos">         
        </div>
      </main>

      <section id="carrito-section" class="carrito-section">
        <h2 class="titulo-principal">Carrito</h2>
        <div id="contenedor-carrito" class="contenedor-carrito">
          <p id="carrito-vacio" class="carrito-vacio disable">Tu carrito esta vacio. <i class="bi bi-emoji-frown-fill"></i></p>
          <div id="carrito-productos" class="carrito-productos "> 
            <!-- Se completara con el archivo carrito.js-->           
          </div>
            <div id="carrito-acciones" class="carrito-acciones disable">
              <div class="carrito-acciones-izquierda">
                <button id="carrito-acciones-vaciar" class="carrito-acciones-vaciar">Vaciar carrito</button>
              </div>
              <div class="carrito-acciones-derecha">
                <div class="carrito-acciones-total">
                  <p>Total:</p>
                  <p id="total">$3000</p>
                </div>
                <button id="carrito-acciones-comprar" class="carrito-acciones-comprar">Comprar ahora</button>
              </div>
            </div>
          <p id="carrito-comprado" class="carrito-comprado disable">Muchas gracias por su compra! <i class="bi bi-emoji-smile-fill"></i></p>
        </div>
      </section>
    </div>
`;

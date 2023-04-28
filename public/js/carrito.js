const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector(".carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

fetch("https://localhost:7289/api/Carrito")
  .then((response) => response.json())
  .then((data) => {
    cargarProductosCarrito(data);
  });
export function cargarProductosCarrito(data) {
  if (data && data.length > 0) {
    contenedorCarritoVacio.classList.add("disable");
    contenedorCarritoProductos.classList.remove("disable");
    contenedorCarritoAcciones.classList.remove("disable");
    contenedorCarritoComprado.classList.add("disable");

    contenedorCarritoProductos.innerHTML = "";
    console.log(data);
    data.forEach((producto) => {
      console.log(producto);
      const div = document.createElement("div");
      div.classList.add("carrito-producto");
      div.innerHTML = `
    <img class="carrito-producto-imagen" src="${producto.articulo.imagen}"
                alt="${producto.articulo.nombre}imagen-producto-carrito">
              <div class="carrito-producto-titulo">
                <small>Titulo</small>
                <h3>${producto.articulo.nombre}</h3>
              </div>
              <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
              </div>
              <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$ ${producto.articulo.precio}</p>
              </div>
              <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>$ ${producto.articulo.precio * producto.cantidad}</p>
              </div>
              <button id="${
                producto.articuloId
              }" class="carrito-producto-eliminar">
              <i class="bi bi-trash-fill"></i></button>
    `;
      contenedorCarritoProductos.append(div);
    });
  } else {
    contenedorCarritoVacio.classList.remove("disable");
    contenedorCarritoProductos.classList.add("disable");
    contenedorCarritoAcciones.classList.add("disable");
    contenedorCarritoComprado.classList.add("disable");
  }
  actualizarBotonesEliminar();
  actualizarTotal(data);
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      eliminarDelCarrito(boton.id);
    });
  });
}
function eliminarDelCarrito(id) {
  Toastify({
    text: "Producto eliminado",
    duration: 2000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #785ce9, #961818)",
      borderRadius: "2rem",
      textTransform: "uppercase",
      fontSize: ".75rem",
    },
    offset: {
      x: "2.5rem",
      y: "2.5rem",
    },
    onClick: function () {}, // Callback after click
  }).showToast();

  fetch("https://localhost:7289/api/Carrito/eliminarCarrito/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {})
    .catch((error) => {});
  setTimeout(() => {
    location.reload();
  }, 2000);
}

botonVaciar.addEventListener("click", () => vaciarCarrito());

function vaciarCarrito() {
  fetch("https://localhost:7289/api/Carrito/eliminarCarritoTodo/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {});
  setTimeout(() => {
    location.reload();
  }, 2000);
}

function actualizarTotal(data) {
  let totalCalculado = 0;
  data?.forEach((producto) => {
    totalCalculado += producto.articulo.precio * producto.cantidad;
  });
  contenedorTotal.innerText = `$ ${totalCalculado}`;
}

botonComprar.addEventListener("click", () => comprarCarrito());
function comprarCarrito() {
  fetch("https://localhost:7289/api/Carrito")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((productos) => {
        fetch(
          `https://localhost:7289/api/Articulo/${productos.articuloId}/decrementar-cantidad/${productos.cantidad}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => {})
          .catch((error) => {});
      });
    });

  contenedorCarritoVacio.classList.add("disable");
  contenedorCarritoProductos.classList.add("disable");
  contenedorCarritoAcciones.classList.add("disable");
  contenedorCarritoComprado.classList.remove("disable");
  setTimeout(() => {
    vaciarCarrito();
  }, 2000);
}

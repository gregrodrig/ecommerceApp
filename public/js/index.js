// PRODUCTOS
// const productos = [
//   // Abrigos
//   {
//     id: "abrigo-01",
//     titulo: "Abrigo 01",
//     imagen: "./public/src/resource/abrigos/01.jpg",
//     categoria: {
//       nombre: "Abrigos",
//       id: "abrigos",
//     },
//     precio: 1000,
//   },
//   {
//     id: "abrigo-02",
//     titulo: "Abrigo 02",
//     imagen: "./public/src/resource/abrigos/02.jpg",
//     categoria: {
//       nombre: "Abrigos",
//       id: "abrigos",
//     },
//     precio: 1000,
//   },
//   {
//     id: "abrigo-03",
//     titulo: "Abrigo 03",
//     imagen: "./public/src/resource/abrigos/03.jpg",
//     categoria: {
//       nombre: "Abrigos",
//       id: "abrigos",
//     },
//     precio: 1000,
//   },
//   {
//     id: "abrigo-04",
//     titulo: "Abrigo 04",
//     imagen: "./public/src/resource/abrigos/04.jpg",
//     categoria: {
//       nombre: "Abrigos",
//       id: "abrigos",
//     },
//     precio: 1000,
//   },
//   {
//     id: "abrigo-05",
//     titulo: "Abrigo 05",
//     imagen: "./public/src/resource/abrigos/05.jpg",
//     categoria: {
//       nombre: "Abrigos",
//       id: "abrigos",
//     },
//     precio: 1000,
//   },
//   // Camisetas
//   {
//     id: "camiseta-01",
//     titulo: "Camiseta 01",
//     imagen: "./public/src/resource/camisetas/01.jpg",
//     categoria: {
//       nombre: "Camisetas",
//       id: "camisetas",
//     },
//     precio: 1000,
//   },
//   {
//     id: "camiseta-02",
//     titulo: "Camiseta 02",
//     imagen: "./public/src/resource/camisetas/02.jpg",
//     categoria: {
//       nombre: "Camisetas",
//       id: "camisetas",
//     },
//     precio: 1000,
//   },
//   {
//     id: "camiseta-03",
//     titulo: "Camiseta 03",
//     imagen: "./public/src/resource/camisetas/03.jpg",
//     categoria: {
//       nombre: "Camisetas",
//       id: "camisetas",
//     },
//     precio: 1000,
//   },
//   {
//     id: "camiseta-04",
//     titulo: "Camiseta 04",
//     imagen: "./public/src/resource/camisetas/04.jpg",
//     categoria: {
//       nombre: "Camisetas",
//       id: "camisetas",
//     },
//     precio: 1000,
//   },
//   {
//     id: "camiseta-05",
//     titulo: "Camiseta 05",
//     imagen: "./public/src/resource/camisetas/05.jpg",
//     categoria: {
//       nombre: "Camisetas",
//       id: "camisetas",
//     },
//     precio: 1000,
//   },
//   {
//     id: "camiseta-06",
//     titulo: "Camiseta 06",
//     imagen: "./public/src/resource/camisetas/06.jpg",
//     categoria: {
//       nombre: "Camisetas",
//       id: "camisetas",
//     },
//     precio: 1000,
//   },
//   {
//     id: "camiseta-07",
//     titulo: "Camiseta 07",
//     imagen: "./public/src/resource/camisetas/07.jpg",
//     categoria: {
//       nombre: "Camisetas",
//       id: "camisetas",
//     },
//     precio: 1000,
//   },
//   {
//     id: "camiseta-08",
//     titulo: "Camiseta 08",
//     imagen: "./public/src/resource/camisetas/08.jpg",
//     categoria: {
//       nombre: "Camisetas",
//       id: "camisetas",
//     },
//     precio: 1000,
//   },
//   // Pantalones
//   {
//     id: "pantalon-01",
//     titulo: "Pantalón 01",
//     imagen: "./public/src/resource/pantalones/01.jpg",
//     categoria: {
//       nombre: "Pantalones",
//       id: "pantalones",
//     },
//     precio: 1000,
//   },
//   {
//     id: "pantalon-02",
//     titulo: "Pantalón 02",
//     imagen: "./public/src/resource/pantalones/02.jpg",
//     categoria: {
//       nombre: "Pantalones",
//       id: "pantalones",
//     },
//     precio: 1000,
//   },
//   {
//     id: "pantalon-03",
//     titulo: "Pantalón 03",
//     imagen: "./public/src/resource/pantalones/03.jpg",
//     categoria: {
//       nombre: "Pantalones",
//       id: "pantalones",
//     },
//     precio: 1000,
//   },
//   {
//     id: "pantalon-04",
//     titulo: "Pantalón 04",
//     imagen: "./public/src/resource/pantalones/04.jpg",
//     categoria: {
//       nombre: "Pantalones",
//       id: "pantalones",
//     },
//     precio: 1000,
//   },
//   {
//     id: "pantalon-05",
//     titulo: "Pantalón 05",
//     imagen: "./public/src/resource/pantalones/05.jpg",
//     categoria: {
//       nombre: "Pantalones",
//       id: "pantalones",
//     },
//     precio: 1000,
//   },
// ];
let productos = [];
let carrito = [];

fetch("https://localhost:7289/api/Articulo")
  .then((response) => response.json())
  .then((data) => {
    productos = data;
    cargarProductos(productos);
  });

function llamarCategorias() {
  fetch("https://localhost:7289/api/Categoria")
    .then((response) => response.json())
    .then((categorias) => {
      const ul = document.querySelector("#contenedor-botones");
      categorias.forEach((categoria) => {
        const li = document.createElement("li");
        const boton = document.createElement("button");
        boton.classList.add("boton-menu", "boton-categoria");
        boton.id = categoria.nombre;
        boton.innerHTML = `
        <i class="bi bi-hand-index"></i>${categoria.nombre}
        `;
        boton.addEventListener("click", (e) => {
          botonesCategorias.forEach((boton) =>
            boton.classList.remove("active")
          );
          e.currentTarget.classList.add("active");

          if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(
              (producto) => producto.categoria.nombre === e.currentTarget.id
            );
            tituloPrincipal.innerHTML = e.currentTarget.id;
            // productoCategoria?.categoria?.nombre;
            const productosBoton = productos.filter(
              (producto) => producto.categoria.nombre === e.currentTarget.id
            );
            cargarProductos(productosBoton);
          } else {
            tituloPrincipal.innerHTML = "Todos los productos";
            cargarProductos(productos);
          }
        });
        li.append(boton);
        ul.append(li);
        botonesCategorias = document.querySelectorAll(".boton-categoria");
      });
    });
}

const contenedorProductos = document.getElementById("contenedor-productos");
let botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesEliminar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
// const botonCategoria = document.querySelector("#contenedor-botones");

llamarCategorias();
// function cargarCategorias(categoriaProducto) {
//   // botonCategoria.innerHTML = "";
//   categoriaProducto.forEach((producto) => {
//     const li = document.createElement("li");
//     li.classList.add("categoria");
//     li.innerHTML = `
//     <button id="${producto.categoria.id}" class="boton-menu boton-categoria">
//                 <i class="bi bi-hand-index"></i> ${producto.categoria.nombre}</button>
//     `;
//     if (botonCategoria !== null) {
//       botonCategoria.append(li);
//     } else {
//       console.log("No se han podido cargar las categorias");
//     }
//   });
// }
function agregarAlCarrito(idProducto) {
  Toastify({
    text: "Producto agregado",
    duration: 2000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #785ce9, #646cff)",
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

  const data = {
    articuloId: idProducto,
    articulo: {
      id: idProducto,
      nombre: "string",
      cantidad: 0,
      precio: 0,
      imagen: "string",
      descripcion: "string",
      categoriaId: 0,
      categoria: {
        id: 0,
        nombre: "string",
      },
    },
    cantidad: 0,
  };

  fetch("https://localhost:7289/api/Carrito", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      // código a ejecutar si la solicitud se realizó correctamente
    })
    .catch((error) => {
      // código a ejecutar si se produjo un error
    });

  //alert(idProducto);

  // const idBoton = e.currentTarget.id;
  // const productoAgregado = productos.find(
  //   (producto) => producto.id === idBoton
  // );

  // if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
  //   const index = productosEnCarrito.findIndex(
  //     (producto) => producto.id === idBoton
  //   );
  //   productosEnCarrito[index].cantidad++;
  // } else {
  //   productoAgregado.cantidad = 1;
  //   productosEnCarrito.push(productoAgregado);
  // }
  // //ACTUALIZANDO LA CANTIDAD DE PRODUCTOS EN EL CARRITO
  // actualizarNumerito();
  setTimeout(() => {
    location.reload();
  }, 2000);

  // ALMACENANDO LOS DATOS EN EL LOCAL STORAGE
  // localStorage.setItem(
  //   "productos-en-carrito",
  //   JSON.stringify(productosEnCarrito)
  // );
}
function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = "";

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <div class="producto-imagen-hover">
          <img class="producto-imagen over-imagen ${
            producto.cantidad < 1 ? "opaco" : ""
          }" src="${producto.imagen}"        
                  alt="${producto.nombre}">
          </div>
                <div class="producto-detalles">
                  <h3 class="producto-titulo">Cód: ${producto.id} - ${
      producto.nombre
    }</h3>
                  <p class="producto-descripcion">${producto.descripcion}</p>
                  <p class="producto-stock">Stock: <b>${
                    producto.cantidad
                  }</b></p>
                  <p class="producto-precio">$${producto.precio}</p>
                  <button class="producto-agregar ${
                    producto.cantidad < 1 ? "disable" : ""
                  }" id="${producto.id}" onclick="agregarAlCarrito(${
      producto.id
    })" ">Agregar</button>
                </div>
          `;
    $(document).ready(function () {
      $(".producto-imagen-hover").hover(
        function () {
          $(this).stop().animate(
            {
              width: "175%",
              zIndex: "100",
            },
            500
          );
        },
        function () {
          $(this).stop().animate(
            {
              width: "100%",
              height: "14.625rem",
              zIndex: 0,
            },
            200
          );
        }
      );
    });
    if (contenedorProductos !== null) {
      contenedorProductos.append(div);
    } else {
      console.log("No se han podido cargar los productos");
    }
  });
  actualizarBotonesAgregar();
}

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productoCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerHTML = productoCategoria.categoria.nombre;
      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );
      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerHTML = "Todos los productos";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  botonesEliminar = document.querySelectorAll(".producto-agregar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => agregarAlCarrito(boton.id));
  });
}

// CONFIRMANDO SI HAY PRODUCTOS EN EL CARRITO PARA QUE MANTENGA LA CANTIDAD ACTUALIZADA CON EL TOTAL DE PRODUCTOS
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

export function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce(
    (acumulador, producto) => acumulador + producto.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito;
}

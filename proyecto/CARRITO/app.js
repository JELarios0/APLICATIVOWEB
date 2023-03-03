const stockProductos = [
  {
    id: 1,
    nombre: "Gallina Criolla",
    cantidad: 1,
    desc: "Criadas en el CBC, al mejor precio",
    precio: 30000,
    img: "img/Gallinacriolla.jfif",
  },
  {
    id: 2,
    nombre: "Cerdos",
    cantidad: 1,
    desc: "criados en nuestras instalaciones CBC",
    precio: 50000,
    img: "img/Cerdos.jfif",
  },
  {
    id: 3,
    nombre: "Pollo",
    cantidad: 1,
    desc: "Pollos Grandes, criados y conservados en la instalacion del CBC",
    precio: 19000,
    img: "img/pollo.jfif",
  },
  {
    id: 4,
    nombre: "Carne de res",
    cantidad: 1,
    desc: "carne fresca al mejor precio",
    precio: 10000,
    img: "img/carneres.jfif",
  },
  {
    id: 5,
    nombre: "Mojarra Roja",
    cantidad: 1,
    desc: "Grandes mojarras rojas criadas por nuestro personal calificado del CBC",
    precio: 2000,
    img: "img/mojarraroja.jfif",
  },
  {
    id: 6,
    nombre: "Mojarra Negra",
    cantidad: 1,
    desc: "Grandes mojarras negras criadas por nuestro personal calificado del CBC",
    precio: 2000,
    img: "img/mojarranegra.jfif",
  },
  {
    id: 7,
    nombre: "Bocachico",
    cantidad: 1,
    desc: "Grandes Bocachicos criadas por nuestro personal calificado del CBC",
    precio: 2000,
    img: "img/bocachico.jfif",
  },
  {
    id: 8,
    nombre: "Conejos",
    cantidad: 1,
    desc: "Grandes Conejos criados por nuestro personal calificado del CBC",
    precio: 15000,
    img: "img/conejo.jfif",
  },
  {
    id: 9,
    nombre: "Reces",
    cantidad: 1,
    desc: "Grandes reces criadas por nuestro personal calificado del CBC",
    precio: 1000000,
    img: "img/reces.jfif",
  },
  {
    id: 11,
    nombre: "Maiz",
    cantidad: 1,
    desc: "Maiz Fresco cosechadas y escogidas por nuestro personal calificado CBC",
    precio: 2000,
    img: "img/maiz.jfif",
  },
  {
    id: 12,
    nombre: "Maracuya",
    cantidad: 1,
    desc: "Rico y fresco Maracuya",
    precio: 4000,
    img: "img/maracuya.jpg",
  },
  {
    id: 13,
    nombre: "tamarindo",
    cantidad: 1,
    desc: "fresco cosechadas y escogidas por nuestro personal calificado CBC",
    precio: 3000,
    img: "img/tamarindo.jfif",
  },
  {
    id: 14,
    nombre: "sandia",
    cantidad: 1,
    desc: "fresca cosecha y escogidas por nuestro personal calificado CBC",
    precio: 10000,
    img: "img/sandia.jpg",
  },
  {
    id: 15,
    nombre: "yogourt",
    cantidad: 1,
    desc: "Rico y fresco yogur escogidas por nuestro personal calificado CBC",
    precio: 5000,
    img: "img/yogur.jfif",
  },
  {
    id: 16,
    nombre: "Dulce de leche",
    cantidad: 1,
    desc: "Rico y fresco dulce de leche",
    precio: 10000,
    img: "img/dulce de leche.jpg",
  },
  {
    id: 17,
    nombre: "Dulce de mango",
    cantidad: 1,
    desc: "Rico y fresco dulce de mango",
    precio: 5000,
    img: "img/dulce mango.jfif",
  },
  {
    id: 18,
    nombre: "Queso",
    cantidad: 1,
    desc: "Rico y fresco Queso",
    precio: 5000,
    img: "img/Queso.jfif",
  },
  {
    id: 19,
    nombre: "Suero",
    cantidad: 1,
    desc: "Rico y fresco Suero",
    precio: 3000,
    img: "img/Suero.jfif",
  },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-outline-success" onclick="agregarProducto(${id})">Comprar Producto</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-outline-success"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">¡Aun no agregaste nada!</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const juegoId = id;
  carrito = carrito.filter((juego) => juego.id !== juegoId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const cliente = document.querySelector('#cliente').value
   const email = document.querySelector('#correo').value

   if(email === '' || cliente == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_qxwi0jn';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }
const API_URL = "https://oc595zjet7.execute-api.us-east-1.amazonaws.com";

async function cargarCarros() {
  const res = await fetch(`${API_URL}/carro`);
  const carros = await res.json();
  const tbody = document.querySelector("#tabla-carros tbody");
  tbody.innerHTML = "";
  carros.forEach((carro) => {
    const fila = `
      <tr>
        <td>${carro.id}</td>
        <td>${carro.marca}</td>
        <td>${carro.modelo}</td>
        <td>${carro.anio}</td>
        <td>${carro.color}</td>
        <td>${carro.precio}</td>
        <td>
          <button onclick="eliminarCarro('${carro.id}')">Eliminar</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += fila;
  });
}

async function agregarCarro(event) {
  event.preventDefault();
  const data = {
    marca: document.getElementById("marca").value,
    modelo: document.getElementById("modelo").value,
    anio: parseInt(document.getElementById("anio").value),
    color: document.getElementById("color").value,
    precio: parseFloat(document.getElementById("precio").value),
  };

  await fetch(`${API_URL}/carro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  document.getElementById("formulario-carro").reset();
  cargarCarros();
}

async function eliminarCarro(id) {
  await fetch(`${API_URL}/carro/${id}`, {
    method: "DELETE",
  });
  cargarCarros();
}

document
  .getElementById("formulario-carro")
  .addEventListener("submit", agregarCarro);
cargarCarros();

const API_URL = "https://oc595zjet7.execute-api.us-east-1.amazonaws.com";

async function cargarCarros() {
  try {
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
            <button onclick="editarFormulario('${carro.id}', '${carro.marca}', '${carro.modelo}', ${carro.anio}, '${carro.color}', ${carro.precio})">Editar</button>
            <button onclick="eliminarCarro('${carro.id}')">Eliminar</button>
          </td>
        </tr>
      `;
      tbody.innerHTML += fila;
    });
  } catch (error) {
    alert("❌ Error al cargar los carros.");
    console.error(error);
  }
}

function editarFormulario(id, marca, modelo, anio, color, precio) {
  document.getElementById("carro-id").value = id;
  document.getElementById("marca").value = marca;
  document.getElementById("modelo").value = modelo;
  document.getElementById("anio").value = anio;
  document.getElementById("color").value = color;
  document.getElementById("precio").value = precio;

  document.getElementById("btn-agregar").style.display = "none";
  document.getElementById("btn-actualizar").style.display = "inline-block";
}

async function actualizarCarro() {
  const id = document.getElementById("carro-id").value;
  const data = {
    marca: document.getElementById("marca").value,
    modelo: document.getElementById("modelo").value,
    anio: parseInt(document.getElementById("anio").value),
    color: document.getElementById("color").value,
    precio: parseFloat(document.getElementById("precio").value),
  };

  try {
    const res = await fetch(`${API_URL}/carro/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al actualizar carro");

    alert("✏️ Carro actualizado correctamente.");
    document.getElementById("formulario-carro").reset();
    document.getElementById("btn-agregar").style.display = "inline-block";
    document.getElementById("btn-actualizar").style.display = "none";
    cargarCarros();
  } catch (error) {
    alert("❌ No se pudo actualizar el carro.");
    console.error(error);
  }
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

  try {
    const res = await fetch(`${API_URL}/carro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Error al agregar carro");

    alert("🚗 Carro agregado correctamente.");
    document.getElementById("formulario-carro").reset();
    cargarCarros();
  } catch (error) {
    alert("❌ No se pudo agregar el carro.");
    console.error(error);
  }
}

async function eliminarCarro(id) {
  if (!confirm("¿Estás seguro de que deseas eliminar este carro?")) return;

  try {
    const res = await fetch(`${API_URL}/carro/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Error al eliminar carro");

    alert("🗑️ Carro eliminado correctamente.");
    cargarCarros();
  } catch (error) {
    alert("❌ No se pudo eliminar el carro.");
    console.error(error);
  }
}

document
  .getElementById("formulario-carro")
  .addEventListener("submit", agregarCarro);
document
  .getElementById("btn-actualizar")
  .addEventListener("click", actualizarCarro);

cargarCarros();

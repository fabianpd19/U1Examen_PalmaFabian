const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "carrosTable";

exports.agregarCarro = async (event) => {
  const data = JSON.parse(event.body);
  const fechaCreacion = new Date().toISOString();
  const id = uuidv4();

  const carro = {
    TableName: tableName,
    Item: {
      id: id,
      marca: data.marca,
      modelo: data.modelo,
      anio: data.anio,
      color: data.color,
      precio: data.precio,
      fechaCreacion: fechaCreacion,
    },
  };

  await dynamoDB.put(carro).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Carro agregado exitosamente",
      carro: carro.Item,
    }),
  };
};

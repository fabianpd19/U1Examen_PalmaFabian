const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "carrosTable";

exports.editarCarro = async (event) => {
  const id = event.pathParameters.id;
  const data = JSON.parse(event.body);

  const params = {
    TableName: tableName,
    Key: { id },
    UpdateExpression: `set 
      marca = :marca, 
      modelo = :modelo, 
      anio = :anio, 
      color = :color, 
      precio = :precio`,
    ExpressionAttributeValues: {
      ":marca": data.marca,
      ":modelo": data.modelo,
      ":anio": data.anio,
      ":color": data.color,
      ":precio": data.precio,
    },
    ReturnValues: "ALL_NEW",
  };

  try {
    const result = await dynamoDB.update(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Carro actualizado exitosamente",
        carro: result.Attributes,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error al actualizar el carro",
        error: error.message,
      }),
    };
  }
};

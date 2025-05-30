const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "carrosTable";

// Obtener item
module.exports.mostrarCarro = async (event) => {
  const id = event.pathParameters.id;
  const params = { TableName: tableName, Key: { id } };
  const result = await dynamoDB.get(params).promise();

  if (!result.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Ítem no encontrado" }),
    };
  }

  return { statusCode: 200, body: JSON.stringify(result.Item) };
};

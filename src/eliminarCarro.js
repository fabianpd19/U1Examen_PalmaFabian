const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "carrosTable";

// Eliminar un ítem
module.exports.eliminarCarro = async (event) => {
  const id = event.pathParameters.id;
  const params = { TableName: tableName, Key: { id } };

  await dynamoDB.delete(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Ítem eliminado exitosamente." }),
  };
};

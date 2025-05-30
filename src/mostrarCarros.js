const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = "carrosTable";

module.exports.mostrarCarros = async () => {
  try {
    const params = { TableName: tableName };
    const result = await dynamoDB.scan(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    console.error("Error al mostrar carros:", error); // Esto aparecerá en los logs de CloudWatch

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // permite solicitudes desde cualquier origen
      },
      body: JSON.stringify({
        message: "Error interno del servidor",
        error: error.message,
      }),
    };
  }
};

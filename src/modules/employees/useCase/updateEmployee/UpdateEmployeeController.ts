import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { UpdateEmployeesUseCase } from "./UpdateEmployeesUseCase";

async function handle(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const payload = JSON.parse(event.body!)
  const id = JSON.parse(event.pathParameters.id)
  const updateEmployeesUseCase = new UpdateEmployeesUseCase()

  try {
    const updateEmployee = await updateEmployeesUseCase.execute({...payload, id});
    return {
      statusCode: 200,
      body: JSON.stringify(updateEmployee)
    }
  } catch(error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  }
}

export {
  handle
}
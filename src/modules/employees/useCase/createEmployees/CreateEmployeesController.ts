import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { CreateEmployeesUseCase } from "./CreateEmployeesUseCase"

async function handle(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const payload = JSON.parse(event.body!)
  const createEmployeesUseCase = new CreateEmployeesUseCase()

  try {
    const createEmployees = createEmployeesUseCase.execute(payload);
    return {
      statusCode: 200,
      body: JSON.stringify(createEmployees)
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
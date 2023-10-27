import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { ListEmployeesUseCase } from "./ListEmployeesUseCase"

async function handle(): Promise<APIGatewayProxyResult> {
  const listEmployeesUseCase = new ListEmployeesUseCase()

  try {
    const fetchtAllEmployees = await listEmployeesUseCase.execute();
    
    return {
      statusCode: 200,
      body: JSON.stringify({message: fetchtAllEmployees})
    }
  } catch(error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  }
}

async function handleUnique(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const id = JSON.parse(event.pathParameters?.id!)
  const listEmployeesUseCase = new ListEmployeesUseCase();

  try {
    const fetchtUniqueEmployee = await listEmployeesUseCase.executeWithUnique(id);
    return {
      statusCode: 200,
      body: JSON.stringify(fetchtUniqueEmployee)
    }
  } catch(error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  }
}

export {
  handle,
  handleUnique
}
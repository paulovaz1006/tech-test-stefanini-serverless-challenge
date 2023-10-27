import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { DeleteEmployeeUseCase } from "./DeleteEmployeeUseCase";

async function handle(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const {id} = JSON.parse(event.pathParameters?.id!)
  const deleteEmployeeUseCase = new DeleteEmployeeUseCase()

  try {
    const deleteEmployee = await deleteEmployeeUseCase.execute(id);
    return {
      statusCode: 200,
      body: JSON.stringify(deleteEmployee)
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
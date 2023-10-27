import { IEmployesDTO } from "../../dto/IEmployesDTO";
import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository"

class CreateEmployeesUseCase {
  async execute(payload: IEmployesDTO) {
    const employeeRepository = new EmployeeRepository();
    const formatPayload = {
      ...payload,      
    }
    const data = await employeeRepository.create(formatPayload)
    return data;
  }
}

export {CreateEmployeesUseCase}



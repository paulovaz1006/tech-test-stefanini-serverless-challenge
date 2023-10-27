import { IEmployesDTO } from "../../dto/IEmployesDTO";
import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository";

class DeleteEmployeeUseCase {
  async execute(id:IEmployesDTO['id']) {
    const employeeRepository = new EmployeeRepository();

    const data = await employeeRepository.delete(id)
    return data;
  }
}

export {
  DeleteEmployeeUseCase
}
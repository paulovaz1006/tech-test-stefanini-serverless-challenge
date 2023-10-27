import { IEmployesDTO } from "../../dto/IEmployesDTO";
import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository";

class UpdateEmployeesUseCase {
  async execute(payload: IEmployesDTO) {
    const employeeRepository = new EmployeeRepository();

    const data = await employeeRepository.update(payload)
    return data;
  }
}

export {
  UpdateEmployeesUseCase
}
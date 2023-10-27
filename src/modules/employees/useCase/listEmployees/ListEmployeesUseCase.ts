import { IEmployesDTO } from "../../dto/IEmployesDTO";
import { EmployeeRepository } from "../../repositories/implementations/EmployeeRepository"

class ListEmployeesUseCase {
  async execute() {
    const employeeRepository = new EmployeeRepository();
    const data = await employeeRepository.list()
    return data;
  }

  async executeWithUnique(id: IEmployesDTO['id']) {
    const employeeRepository = new EmployeeRepository();
    const data = await employeeRepository.findUnique(id)
    return data;
  }
}

export {ListEmployeesUseCase}



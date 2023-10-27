import { Employee } from '../../../../entity/Employee';
import { AppDataSource } from "../../../../data-source";
import { IEmployeeRepository } from '../IEmployeeRepository';
import { IEmployesDTO } from '../../dto/IEmployesDTO';

class EmployeeRepository implements IEmployeeRepository {
  private employRepositoy = AppDataSource.getRepository(Employee)    

  async list() {    
    const result = await this.employRepositoy.find()
   
    return {
      statusCode: 201,
      body: JSON.stringify(result)
    };
  }

  async create(payload: IEmployesDTO)  {
    const employee = new Employee()
    employee.name = payload.name;
    employee.age = payload.age;
    employee.position = payload.position;
    
    await AppDataSource.manager.save(employee)

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Created employee"
      })
    };
  }

  private async findById(id: IEmployesDTO['id']) {
    const employeeToUpdate = await this.employRepositoy.findOneBy({
        id,
    })

    return employeeToUpdate;
  }

  async update(payload: IEmployesDTO) {    
    const employeeToUpdate = await this.findById(payload.id)

    if (!employeeToUpdate) {
      throw new Error(`Employee ${payload.name} does not exist`)
    }

    const newValuesEmployee = {
      ...employeeToUpdate,
      ...payload
    }

    await this.employRepositoy.save(newValuesEmployee)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Update employee"
      })
    };
  }

  async findUnique(id: IEmployesDTO['id']) {    
    const result = await this.findById(id)
   
    return {
      statusCode: 201,
      body: JSON.stringify(result)
    };   
  }

  async delete(id: IEmployesDTO['id']) {    
    const findEmployee = await this.findById(id)
 
    await this.employRepositoy.remove(findEmployee);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Deleted employee"
      })
    };
  }
}

export { EmployeeRepository }
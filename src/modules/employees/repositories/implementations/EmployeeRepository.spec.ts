import { IEmployeeRepository } from "../IEmployeeRepository";
import { EmployeeRepository } from "./EmployeeRepository";

describe("Create employee", () => {
  let employeeRepository: IEmployeeRepository;

  beforeAll(() => {
    employeeRepository = new EmployeeRepository()
  })

  const payload = {
    id: '1',
    name: "Teste",
    age: 2,
    position: "teste position"
   }
  
  it('Should create employee', async () => {
    const createdEmployee = await employeeRepository.create(payload)

    expect(createdEmployee.body).toHaveProperty("id")
    expect(createdEmployee.body['name']).toBe(payload.name)
    expect(createdEmployee.statusCode).toBe(201)
  })

  it('Should to list employees', async () => {
    const listEmployees = await employeeRepository.list()

    expect(typeof listEmployees.body).toBe("object");    
    expect(listEmployees.statusCode).toBe(200)
  })

  it('Should delete employee', async () => {
    const listEmployees = await employeeRepository.delete(payload.id)

    expect(listEmployees.body['message']).toBe("Deleted employee");    
    expect(listEmployees.statusCode).toBe(200)
  })

  it('Should update employee', async () => {
    const newValues = {
      age: 4
    }

    const listEmployees = await employeeRepository.update(newValues)

    expect(listEmployees.body['message']).toBe("Update employee");    
    expect(listEmployees.statusCode).toBe(200)
  })
})
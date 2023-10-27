import { Employee } from "../../../entity/Employee";
import { IEmployesDTO } from "../dto/IEmployesDTO";

type IEmployeeRepositoryResponse = {
  statusCode: number;
  body: string;
}

interface IEmployeeRepository {
  list(): Promise<IEmployeeRepositoryResponse>
  create(payload: IEmployesDTO): Promise<IEmployeeRepositoryResponse>;  
  update(payload: IEmployesDTO): Promise<IEmployeeRepositoryResponse>;  
  findUnique(id: IEmployesDTO['id']): Promise<IEmployeeRepositoryResponse>;  
  delete(id: IEmployesDTO['id']): Promise<IEmployeeRepositoryResponse>;     
}

export {IEmployeeRepository}
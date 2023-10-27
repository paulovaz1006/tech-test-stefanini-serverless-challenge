import { v4 as uuidv4 } from 'uuid';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("employees")
class Employee {
  @PrimaryGeneratedColumn()
  id: string;

  @Column("varchar")
  name: string;

  @Column("integer")
  age: number;

  @Column("varchar")
  position: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export {Employee}
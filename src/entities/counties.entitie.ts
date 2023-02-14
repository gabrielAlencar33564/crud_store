import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("counties")
class County {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}

export default County;

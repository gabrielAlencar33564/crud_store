import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Store from "./store.entitie";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Store, (store) => store.category)
  products: Store[];
}

export default Category;

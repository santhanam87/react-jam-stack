import { Entity, ManyToOne, Property, Ref } from "@mikro-orm/postgresql";
import { BaseEntity } from "./base.entity.js";

@Entity()
export class User extends BaseEntity {
  @Property({ length: 1000 })
  text!: string;
}

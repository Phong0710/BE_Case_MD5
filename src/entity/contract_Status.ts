import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

import {Contract} from "./contract";

@Entity()
export class Contract_Status {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @OneToMany(()=> Contract,(contract)=>contract.status)
    contract:Contract[]
}
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {House} from "./house";

@Entity()
export class House_status {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @OneToMany(()=> House,(house)=>house.houseStatus)
    house:House[]
}
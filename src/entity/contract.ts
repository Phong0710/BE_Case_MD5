import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

import {House} from "./house";
import {User} from "./user";
import {Contract_Status} from "./contract_Status";

@Entity()
export class Contract{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    price:number;
    @Column()
    startDay:Date;
    @Column()
    endDay:Date;
    @Column()
    cost:number;
    @ManyToOne(()=> House, (house)=> house.contract)
    house : House;
    @ManyToOne(()=> User, (user)=> user.contract)
    user : User;
    @ManyToOne(()=> Contract_Status, (contractStatus)=> contractStatus.contract)
    status: number
}
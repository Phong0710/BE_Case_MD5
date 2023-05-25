import {Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {City} from "./city";
import {District} from "./district";
import {House} from "./house";

@Entity()
export class Wards {
    @PrimaryColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    type:string;
    @ManyToOne(()=>District,(quan)=>quan.phuong)
    quan: District;
    @OneToMany(()=>House,(house)=>house.phuong)
    house:House[]

}
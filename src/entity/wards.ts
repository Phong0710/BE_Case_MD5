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
    @ManyToOne(()=>District,(district)=>district.wards)
    district: District;
    @OneToMany(()=>House,(house)=>house.wards)
    house:House[]

}
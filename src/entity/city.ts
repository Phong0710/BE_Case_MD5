import {Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {District} from "./district";
import {House} from "./house";

@Entity()
export class City{
    @PrimaryColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    type:string;
    @Column()
    slug:string;
    @OneToMany(()=>District,(district)=>district.city)
    district:District[];
    @OneToMany(()=>House,(house)=>house.city)
    house:House[]
}
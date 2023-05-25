import {Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {City} from "./city";
import {Wards} from "./wards";
import {House} from "./house";

@Entity()
export class District {
    @PrimaryColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    type:string;

    @ManyToOne(()=>City,(city)=>city.district)
    city: City;
    @OneToMany(()=>Wards,(wards)=>wards.district)
    wards:Wards[];
    @OneToMany(()=>House,(house)=>house.district)
    house:House[]

}
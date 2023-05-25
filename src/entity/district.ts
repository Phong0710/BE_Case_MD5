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

    @ManyToOne(()=>City,(city)=>city.quan)
    city: City;
    @OneToMany(()=>Wards,(phuong)=>phuong.quan)
    phuong:Wards[];
    @OneToMany(()=>House,(house)=>house.quan)
    house:House[]

}
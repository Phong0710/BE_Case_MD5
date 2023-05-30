import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Image} from "./image";
import {Contract} from "./contract";
import {User} from "./user";
import {Wards} from "./wards";
import {House_status} from "./house_status";
import {District} from "./district";
import {City} from "./city";

@Entity()
export class House {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nameHouse:string
    @Column()
    price: number
    @Column()
    area: number
    @Column({type: "varchar", length: 300})
    description: string;
    @OneToMany(() => Image, (image) => image.house)
    image: Image[];
    @OneToMany(() => Contract, (contract) => contract.house)
    contract: Contract[];
    @ManyToOne(() => User, (user) => user.house)
    user: User;

    @ManyToOne(() => Wards, (wards) => wards.house)
    wards: Wards;
    @ManyToOne(() => House_status, (houseStatus) => houseStatus.house)
    houseStatus: House_status;
    @ManyToOne(() => District, (district) => district.house)
    district: District;
    @ManyToOne(() => City, (city) => city.house)
    city: City;
}
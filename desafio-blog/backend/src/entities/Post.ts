import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity('tb-post')
export class Post{

    @PrimaryColumn()
    id:string;

    @Column()       
    title:string;

    @Column()
    description:string;

    @CreateDateColumn()
    create_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}
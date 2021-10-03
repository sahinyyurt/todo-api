import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface ITodo {
    id: number;
    title: string;
}
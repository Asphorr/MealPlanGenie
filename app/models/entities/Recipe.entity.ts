import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('id')
  id: number;

  @Column('title')
  title: string;

  @Column('description')
  description: string;

  @Column('imageUrl')
  imageUrl: string;

  @Column('price')
  price: number;

  @Column('timeToPrepare')
  timeToPrepare: number;

  @Column('servings')
  servings: number;

  @Column('ingredients')
  ingredients: string[];

  @Column('instructions')
  instructions: string;
}

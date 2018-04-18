import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, MinLength, IsEmail, IsAlphanumeric } from 'class-validator'




@Entity()
export default class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(2)
  @Column('text', {nullable:false})
  name: string

  @IsAlphanumeric()
  @Column('text', {nullable:false})
  price:number

  @IsString()
  @MinLength(2)
  @Column('text', {nullable:false})
  description: string

  @IsString()
  @Column('text', {nullable:false})
  image: string

  @IsEmail()
  @Column('text', {nullable:false})
  email: string 

  @MinLength(5)
  @IsString()
  @Column('text')
  phone: string


//   async setPassword(rawPassword: string) {
//     const hash = await bcrypt.hash(rawPassword, 10)
//     this.password = hash
//   }

//   checkPassword(rawPassword: string): Promise<boolean> {
//     return bcrypt.compare(rawPassword, this.password)
//   }
  
}
import { v4 as uuidV4 } from 'uuid';

import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Customer } from './Customer';

@Entity('products')
class Products {
  @PrimaryColumn()
  id?: string;

  @Column()
  external_id: string;

  @Column()
  title: string;

  @Column()
  brand: string;

  @Column()
  price: string;

  @Column()
  image: string;

  @Column()
  review: string;

  @ManyToOne(() => Customer, (custumer) => custumer.products)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column()
  customer_id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @BeforeInsert()
  updateDateCreation() {
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Products };

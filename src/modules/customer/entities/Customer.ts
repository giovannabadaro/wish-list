import { v4 as uuidV4 } from 'uuid';

import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customer')
class Customer {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;

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

export { Customer };

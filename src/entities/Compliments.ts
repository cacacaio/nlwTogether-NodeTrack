import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Compliments {
  @PrimaryColumn()
  readonly id: string

  @Column()
  user_sender: string

  @Column()
  user_receiver: string

  @Column()
  tag_id: string

  @Column()
  message: string

  @Column()
  created_at: Date
}

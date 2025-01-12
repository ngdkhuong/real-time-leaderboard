import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
    DeleteDateColumn,
	OneToMany,
	OneToOne,
	ManyToMany,
	JoinTable,
} from 'typeorm';
// import { Score } from '../../score/entities/score.entity';
// import { Leaderboard } from '../../leaderboard/entities/leaderboard.entity';
// import { FriendRequest } from './friend-request.entity';
// import { Message } from './message.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
	id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({default: false})
    admin: boolean;

    // @OneToMany(() => Score, (score) => score.user)
	// scores: Score[];

    @CreateDateColumn()
	createdAt: Date;

    @UpdateDateColumn()
	updatedAt: Date;
}

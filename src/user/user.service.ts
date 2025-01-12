import {Injectable, NotFoundException} from "@nestjs/common";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import { IsEmail } from 'class-validator';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private readonly userRepo: Repository<User>,
		// @InjectRepository(FriendRequest)
		// private readonly friendRequestRepo: Repository<FriendRequest>,
	) {}

	async create(createUserDto: CreateUserDto) {
		const user = this.userRepo.create(createUserDto);
		return await this.userRepo.save(user);
	}

 	async find(email: string) {
		const users = await this.userRepo.find({ where: { email } });
		return users[0];
	}

	findAll() {
		return `This action returns all user`;
	}

	async findOne(id: number) {
		if (!id) throw new NotFoundException('please provide id');
		return this.userRepo.findOneBy({ id });
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}

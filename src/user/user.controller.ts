import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {ResponseUtil} from "../common/utils/response.util";
import {
	BadRequestException,
	NotFoundException,
} from '../common/exceptions/application.exception';

@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		try {
			const user = this.userService.create(createUserDto);
			return ResponseUtil.success(user, "User created successfully")
		} catch (error) {
			throw new BadRequestException(error.message)
		}
	}

	@Get('')
	async find(@Query('email') email: string) {
		try {
			const user = await this.userService.find(email);
			return ResponseUtil.success(user, 'User found successfully');
		} catch (error) {
			throw new NotFoundException(error.message);
		}
	}

	@Get()
	findAll() {
		return this.userService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.userService.findOne(+id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(+id, updateUserDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.userService.remove(+id);
	}
}

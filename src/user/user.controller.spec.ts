import {Test, TestingModule} from "@nestjs/testing";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";

describe("UserController", () => {
	let controller: UserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [UserController],
			providers: [UserService],
		})
		.useMocker(() => {
            controller = module.get<UserController>(UserController);
		})
		
		.compile()

		
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});

import { Request, Response } from "express";
import CreateUserService from "../../services/users/CreateUserService.js";
import { createUserSchema } from "../../schemas/users/createUser.schema.js";
class CreateUserController {
    async handle(req: Request, res: Response) {
        const isValid = createUserSchema.safeParse(req.body);

        if (!isValid.success) {
            return res.status(400).json({ message: "Erro de validação" });
        }
        const input = req.body;

        const service = new CreateUserService();
       await service.execute(input);

       res.status(201).json({ message: "User created successfully" });
    }
}

export default new CreateUserController();


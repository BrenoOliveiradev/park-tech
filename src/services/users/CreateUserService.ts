import { UserRole } from "../../generated/prisma/enums.js";

interface CreateUserInput {
    name: string;
    email: string;
    password: string;
    role: UserRole
}

class CreateUserService {
    execute(input: CreateUserInput){
        
        
    }
}

export default CreateUserService;
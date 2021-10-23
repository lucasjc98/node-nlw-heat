import { Request, Response } from "express";
import { UpdateUserNameService } from "../services/UpdateUserNameService";

class UpdateUserNameController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { name } = request.body

    const service = new UpdateUserNameService();

    const result = await service.execute(user_id, name);

    return response.json(result);
  }
}

export { UpdateUserNameController };

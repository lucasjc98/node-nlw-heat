import prismaClient from "../prisma";

class UpdateUserNameService {
  async execute(user_id: string, name: string) {
    if (name === null || name.length === 0) {
      return {
        error: {
          code: "400",
          message: "Name is blank!",
        },
      };
    }

    const user = await prismaClient.user.update({
      where: {
        id: user_id,
      },
      data: {
        name,
      },
    });

    return user;
  }
}

export { UpdateUserNameService };

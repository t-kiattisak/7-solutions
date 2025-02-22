import axios from "axios"
import { User } from "../entities/user"

export class UserService {
  private static BASE_URL = "https://dummyjson.com"

  public static async fetchUsers(): Promise<User[]> {
    const { data } = await axios.get(`${this.BASE_URL}/users`)
    return data.users.map((user: any) => ({
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      gender: user.gender,
      hairColor: user.hair.color,
      postalCode: user.address.postalCode,
      department: user.company.department,
    }))
  }
}

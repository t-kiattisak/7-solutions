import { User } from "../entities/user"
import { GetUsersResponse, UserDepartment } from "../generated/user_pb"

export function groupUsersByDepartment(users: User[]): GetUsersResponse {
  const response = new GetUsersResponse()
  users.reduce<Record<string, UserDepartment>>((acc, user) => {
    const department = user.department

    if (!acc[department]) {
      const userDepartment = new UserDepartment()
      userDepartment.setMale(0)
      userDepartment.setFemale(0)
      userDepartment.setAgerange(`${user.age}-${user.age}`)
      response.getDepartmentsMap().set(department, userDepartment)
      acc[department] = userDepartment
    }

    const userDepartment = acc[department]

    // นับเพศ
    if (user.gender === "male") {
      userDepartment.setMale(userDepartment.getMale() + 1)
    } else {
      userDepartment.setFemale(userDepartment.getFemale() + 1)
    }

    // อัปเดตช่วงอายุ
    const currentRange = userDepartment.getAgerange().split("-").map(Number)
    const minAge = Math.min(currentRange[0], user.age)
    const maxAge = Math.max(currentRange[1], user.age)
    userDepartment.setAgerange(`${minAge}-${maxAge}`)

    // นับสีผม
    const hairMap = userDepartment.getHairMap()
    hairMap.set(user.hairColor, (hairMap.get(user.hairColor) || 0) + 1)

    // เก็บที่อยู่
    const addressUserMap = userDepartment.getAddressuserMap()
    addressUserMap.set(`${user.firstName}${user.lastName}`, user.postalCode)

    return acc
  }, {})
  return response
}

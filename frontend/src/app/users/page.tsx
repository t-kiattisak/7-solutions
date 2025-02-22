import { getUsers } from "@/core/usecases/getUsers"

export default async function Users() {
  const { execute } = getUsers()
  const users = await execute()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Object.entries(users).map(([department, data]) => (
        <div key={department} className='border p-4 rounded-lg shadow'>
          <h2 className='text-lg font-bold mb-2'>{department}</h2>

          <p>
            <strong>Male:</strong> {data.male}, <strong>Female:</strong>{" "}
            {data.female}, <strong>Age Range:</strong> {data.ageRange}
          </p>

          <div className='mt-2'>
            <strong>Hair Colors:</strong>
            <ul>
              {data.hair &&
                Object.entries(data.hair).map(([color, count]) => (
                  <li key={color}>
                    {color}: {count}
                  </li>
                ))}
            </ul>
          </div>

          <div className='mt-2'>
            <strong>Users:</strong>
            <ul>
              {data.addressUser &&
                Object.entries(data.addressUser).map(([name, postalCode]) => (
                  <li key={name}>
                    {name} - {postalCode}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

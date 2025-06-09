import { request } from '../../../../config/request'
import { useQuery } from '@tanstack/react-query'
import type { User } from '../../../../types/Types'

const UseGetUsers = () => {
  return (
    useQuery({
        queryKey:['users'],
        queryFn: ()=> request.get<User[]>("/users").then((res)=> res.data)
    })
  )
}

export default (UseGetUsers)  
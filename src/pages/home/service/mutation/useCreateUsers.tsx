import { request } from '../../../../config/request'
import { useMutation } from '@tanstack/react-query'
import type { NewUser } from '../../../../types/Types'

const UseCreateUsers = () => {
  return (
    useMutation({
        mutationFn: (data:NewUser)=> request.post("/users", data).then((res)=> res.data)
    })
  )
}

export default (UseCreateUsers)  
import { request } from '../../../../config/request'
import { useMutation } from '@tanstack/react-query'
import type { NewUser } from '../../../../types/Types'

const UseUpdateUser = () => {
  return (
    useMutation({
        mutationFn: (data:NewUser)=> request.put(`/users`, data).then((res)=> res.data)
    })
  )
}

export default (UseUpdateUser)  
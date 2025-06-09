import { request } from '../../../../config/request'
import { useMutation } from '@tanstack/react-query'

const UseDeleteUser = () => {
  return (
    useMutation({
        mutationFn: (id: string|number)=> request.delete(`/users/${id}`).then((res)=> res.data)
    })
  )
}

export default (UseDeleteUser)  
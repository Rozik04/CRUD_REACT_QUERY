import { request } from '../../../../config/request'
import { useMutation } from '@tanstack/react-query'
import type { NewUsers } from '../../../../types/Types'

const useUpdateUser = () => {
  return useMutation({
    mutationFn: (data: NewUsers) => {
      return request
        .put(`/users/${data.id}`, {
          name: data.name,
          email: data.email,
          address: data.address,
          avatar: data.avatar
        })
        .then((res) => res.data)
    }
  })
}

export default useUpdateUser

import React, { useState } from 'react'
import type { NewUsers } from '../../../types/Types'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import UseDeleteUser from '../service/mutation/useDeleteUser'
import UseUpdateUser from '../service/mutation/useUpdateUser'
import { client } from '../../../config/query-client'
import Modal from '../../../components/modals/Modal'

const Card = ({ createdAt, name, avatar, email, address, id }: NewUsers) => {
  const { mutate: deleteMutate } = UseDeleteUser()
  const { mutate: updateMutate } = UseUpdateUser()
  const [isOpen, setIsOpen] = useState(false)
  const [userToEdit, setUserToEdit] = useState<NewUsers>({
    id,
    name,
    email,
    address,
    avatar,
  })

  const handleDelete = (id: string | number) => {
    const confirmed = window.confirm("Rostdan ham ushbu foydalanuvchini o'chirmoqchimisiz?")
    if (confirmed) {
      deleteMutate(id, {
        onSuccess: () => {
          client.invalidateQueries({ queryKey: ["users"] })
        }
      })
    }
  }

  const handleEditClick = () => {
    setUserToEdit({ id, name, email, address, avatar })
    setIsOpen(true)
  }

  const handleUpdate = (data: NewUsers) => {
    updateMutate(data, {
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ["users"] })
      }
    })
  }

  return (
    <>
      <div className="relative bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300">
        <div className="absolute top-2 right-2 flex gap-2">
          <button onClick={handleEditClick} className="text-blue-600 hover:text-blue-800">
            <FiEdit size={18} />
          </button>
          <button onClick={() => handleDelete(id)} className="text-red-600 hover:text-red-800">
            <FiTrash2 size={18} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h1 className="text-lg font-bold text-gray-800">{name}</h1>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <span className="font-medium">Address:</span> {address}
        </div>

        <div className="text-xs text-gray-400 mt-2">
          Joined: {new Date(createdAt).toLocaleDateString()}
        </div>
      </div>

      {isOpen && (
        <Modal
          onClose={() => setIsOpen(false)}
          user={userToEdit}
          onUpdate={handleUpdate}
        />
      )}
    </>
  )
}

export default React.memo(Card)

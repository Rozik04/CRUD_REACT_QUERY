import React, { useState, useEffect } from 'react'
import type { NewUsers } from '../../types/Types'

interface ModalProps {
  onClose: () => void
  user: NewUsers
  onUpdate: (data: NewUsers) => void
}

const Modal = ({ onClose, user, onUpdate }: ModalProps) => {
  const [formData, setFormData] = useState<NewUsers>(user)

  useEffect(() => {
    setFormData(user)
  }, [user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    onUpdate(formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-lg"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4">Edit User</h2>
        <div className="space-y-3">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="Avatar URL"
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update
        </button>
      </div>
    </div>
  )
}

export default React.memo(Modal)

import React from 'react'

interface ModalProps {
  onClose: () => void
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-lg"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-4">Edit User</h2>
        <p className="text-sm text-gray-600">Bu yerda tahrirlash formasi bo'ladi...</p>
      </div>
    </div>
  )
}

export default React.memo(Modal)

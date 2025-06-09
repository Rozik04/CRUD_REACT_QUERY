import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { NewUser } from '../../../types/Types'
import UseCreateUsers from '../service/mutation/useCreateUsers'
import { client } from '../../../config/query-client'

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewUser>()
  const { mutate } = UseCreateUsers()
  const [imageUrl, setImageUrl] = useState<string>('')


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const submit = (data: NewUser) => {
    const finalData = {
      ...data,
      avatar: imageUrl
    }

    mutate(finalData, {
      onSuccess: (res) => {
        console.log('Success:', res)
        client.invalidateQueries({queryKey:["users"]})
      },
      onSettled: () => {
        reset()
        setImageUrl('')
      }
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-700">Create New User</h2>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            {...register("name", {
              required: { value: true, message: "Required" },
              minLength: { value: 2, message: "Kamida 2 ta" }
            })}
            type="text"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-sm text-red-600">{errors.name?.message}</p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Address</label>
          <input
            {...register("address", {
              required: { value: true, message: "Required" },
              minLength: { value: 2, message: "Kamida 2 ta" }
            })}
            type="text"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-sm text-red-600">{errors.address?.message}</p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            {...register("email", {
              required: { value: true, message: "Required" },
              minLength: { value: 2, message: "Kamida 2 ta" }
            })}
            type="email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-sm text-red-600">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Avatar (Choose photo)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
          {!imageUrl && <p className="text-sm text-red-600">Rasm tanlanmagan</p>}
        </div>

        {imageUrl && (
          <div className="text-center">
            <img
              src={imageUrl}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-full mx-auto border-2 border-indigo-400"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition duration-200"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default React.memo(Form)

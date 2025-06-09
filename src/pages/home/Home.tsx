import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import UseGetUsers from './service/query/useGetUsers'
import Card from './components/card'

const Home = () => {
  const { data, isLoading } = UseGetUsers()
  const navigate = useNavigate()

  const handleCreate = () => {
    navigate('/create')
  }

  return (
    <div className="p-6 relative">
      <button
        onClick={handleCreate}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
        aria-label="Add User"
      >
        <FiPlus size={24} />
      </button>

      {isLoading ? (
        <h1 className="text-2xl font-semibold text-center text-blue-500">Loading...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default React.memo(Home)

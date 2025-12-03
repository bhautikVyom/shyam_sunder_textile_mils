import React from 'react'
import { CommonTextField } from '../../../components/widgets/common_textField'
import { Card } from '../../../components/ui/card'
import CommonButton from '../../../components/widgets/common_button'

const Design = () => {
     const handleEdit = () => {
    alert("edit Dialog")
  }

  const handleDelete = () => {
    alert("Delete")
  }
  return (
    <div className="grid gap-6">
      <h3 className="text-xl tab:text-2xl font-bold">User List</h3>


    <Card className='p-1.5 lg:p-4'>
      <div className="flex items-center justify-between gap-4 max-lg:flex-col">
        <div className="lg:max-w-72 w-full grid gap-1">
          <CommonTextField
            type="text"
            placeholder="Search..."
            className="w-full"
          />
        </div>
        <CommonButton></CommonButton>
      </div>
        Design Page
    </Card>
    </div>
  )
}

export default Design

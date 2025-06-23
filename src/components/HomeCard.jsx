import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { deletePostAction } from '../redux/actions/post';
import { toast } from 'react-toastify';


const HomeCard = ({post}) => {
  const dispatch = useDispatch()

  const updatePost = (id) => {
      dispatch({type:'MODAL', payload: {open:true, updateId: id}})
  }
  const deletePost = (id) => {
      dispatch(deletePostAction(id))
      toast("Silme işlemi başarılı", {
                  position: "top-right",
                  autoClose: 5000,
                  });
  }

  return (
    <div className='relative w-1/4 border p-3 rounded-md bg-gray-50 mx-3'>
      <div className='font-bold text-xl'>{post?.title}</div>
      <div className='text-gray-600 text-sm'>{post?.description}</div>
      <div className='flex items-center justify-between mt-4'>
        <span className='text-xs text-gray-500'>{post?.user}</span>
        <span className='text-xs text-gray-500'>{(post?.date)?.substring(0,10)}</span>
      </div>
      <div className='absolute top-0.5 right-1 flex items-center space-x-4'>
        <RxUpdate onClick={() => updatePost(post._id)} size={17} title='güncelle' className='cursor-pointer'/>
        <MdDeleteOutline onClick={() => deletePost(post._id)} size={21} title='sil' className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default HomeCard
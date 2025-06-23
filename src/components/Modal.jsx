import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createPostAction, updatePostAction } from "../redux/actions/post"
import { toast } from "react-toastify"
import { IoMdClose } from "react-icons/io"

const Modal = () => {
  const [postData, setPostData] = useState({ user: "", title: "", description: "" })
  const dispatch = useDispatch()
  const { modal } = useSelector(state => state.modal)
  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    if (modal?.updateId && posts.length > 0) {
      const selectedPost = posts.find(post => post._id === modal.updateId)
      if (selectedPost) {
        setPostData({
          user: selectedPost.user || "",
          title: selectedPost.title || "",
          description: selectedPost.description || ""
        })
      }
    } else {
      setPostData({ user: "", title: "", description: "" })
    }
  }, [modal, posts])

  const onChangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

  const postCreate = () => {
    if (modal?.updateId) {
      dispatch(updatePostAction(modal.updateId, postData))
    } else {
      dispatch(createPostAction(postData))
    }

    dispatch({ type: 'MODAL', payload: false })
    toast(modal?.updateId ? "Güncelleme başarılı" : "Ekleme başarılı", {
      position: "top-right",
      autoClose: 5000,
    })
  }

  return (
    <div className='w-full h-screen bg-opacity-50 bg-black fixed inset-0 z-50 flex items-center justify-center'>
      <div className='bg-white w-1/3 p-2 rounded-md'>
        <div onClick={() => dispatch({ type: 'MODAL', payload: false })} className="flex items-center justify-between cursor-pointer">
          <h1 className='text-lime-600 font-bold text-2xl'>{modal?.updateId ? "YORUM GÜNCELLE" : "YORUM YAZ"}</h1>
          <IoMdClose size={25} />
        </div>
        <div className='my-4 flex flex-col space-y-3'>
          <input value={postData.user} name="user" onChange={onChangeFunc} className='input-style' type="text" placeholder='User' />
          <input value={postData.title} name="title" onChange={onChangeFunc} className='input-style' type="text" placeholder='Title' />
          <input value={postData.description} name="description" onChange={onChangeFunc} className='input-style' type="text" placeholder='Description' />
        </div>
        <div onClick={postCreate} className='w-full p-2 text-center bg-lime-500 text-white cursor-pointer hover:bg-lime-600'>
          {modal?.updateId ? "Güncelle" : "Paylaş"}
        </div>
      </div>
    </div>
  )
}

export default Modal

import { CiLogout } from "react-icons/ci";
import { useDispatch } from "react-redux";


const Navbar = () => {
    const dispatch = useDispatch()

    const logoutFunc = () => {
        localStorage.clear()
        window.location = "/auth"
    }

    const openModal = () => {
        dispatch({type:"MODAL", payload: true})
    }
  return (
    <div className="h-20 bg-lime-500 flex items-center justify-between px-5">
        <div className="text-white font-bold text-3xl cursor-pointer">YAZIYORUM</div>
        <div className="flex items-center space-x-5">
            <input type="text" placeholder="Ara" className="p-2 outline-none rounded-md" />
            <div onClick={openModal} className="w-36 border p-2 rounded-md text-center text-white cursor-pointer hover:bg-lime-600" >Yorum Yaz</div>
            <CiLogout onClick={logoutFunc} size={25} className="text-white cursor-pointer" />
        </div>
    </div>
  )
}

export default Navbar
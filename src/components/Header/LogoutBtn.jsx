import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandle = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 mx-2 text-white transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-700 rounded-full"
      onClick={logoutHandle}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;

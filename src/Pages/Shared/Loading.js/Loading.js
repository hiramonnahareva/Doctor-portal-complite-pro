import React from "react";
import './Loading.css'

 const LoadingSpinner = () => {

  return (   
<div className="flex justify-center h-screen items-center">
<div className="loader ease-linear rounded-full border-2 border-dashed border-t-2 border-gray-300 h-12 w-12"></div>
</div>

  );
}
export default LoadingSpinner;
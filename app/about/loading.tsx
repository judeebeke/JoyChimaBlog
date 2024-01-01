import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

const Loading = () => {

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-white opacity-90">
        <BeatLoader
        color={"#ff49db"}
        size={50}
        aria-label="Loading Spinner"
        speedMultiplier={2}
      />
    </div>
  )
}

export default Loading;
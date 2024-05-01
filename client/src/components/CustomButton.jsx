import React from 'react'

const CustomButton = ({btnType, title, handleClick, styles}) => {
  return (
    <button
        type={btnType}
        className={`font-epilogue font-semibold text-[16px] text-white leading-[26px] rounded-[10px] min-h-[52px] px-4 ${styles}`}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton
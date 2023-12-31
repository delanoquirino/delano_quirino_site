import React from 'react'

type TechBadgeProps = {
    name: string
  }

export const TechBadge = ({name}: TechBadgeProps) => {
  return (
    <span className="text-sky-700 bg-sky-500 text-sm py-1 px-3 rounded-lg font-bold">
        {name}    
    </span>
  )
}

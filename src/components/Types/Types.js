import React from 'react'

const Types = (props) => {
  const {types} = props
  return(
    <div className="Type">
      {types.map((type, idx) => {
        return(
          <h3 key={idx}>{type.type.name}</h3>
        )
      })}
    </div>
  )

}

export default Types;
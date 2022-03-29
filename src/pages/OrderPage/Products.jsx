// rfc
import React from 'react'

export default function Products({
  name, imagePath
}) {
  return (
    <div>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label htmlFor={name} style={{ textAlign: "right" }}>
          {name}
        </label>
        <input
          id={name}
          style={{ marginLeft: 7 }}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
          // onChange={handleChange}
        />
      </form>
    </div>
  )
}
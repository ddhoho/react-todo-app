import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ handleSubmit, value, setValue }) {
     const handleChange = (e) => {
          console.log(e.target.value)
          //this.setState({ value: e.target.value }) // 클래스형
          setValue(e.target.value);
     }

     return (
          <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
               <input
                    type="text"
                    name="value"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder="해야 할 일을 입력하세요."
                    value={value}
                    onChange={handleChange}
               />
               <input
                    type="submit"
                    value="입력"
                    className="btn"
                    style={{ flex: '1' }}
               />

          </form>
     )
}

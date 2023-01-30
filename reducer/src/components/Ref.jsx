
import React from 'react'

function Ref() {
    const [name, setName] = React.useState('')
    // const renderCount = React.useRef(1)

    // React.useEffect(()=>{
    //     renderCount.current = renderCount.current+1
    // })

    const inputRef = React.useRef()
    // function focuses() {
    //     inputRef.current.focus()
    // }

    let prevName = React.useRef('')

    React.useEffect(()=>{
        prevName.current = name
    })

  return (
    <div>
        <input ref={inputRef} onChange={(e)=>setName(e.target.value)}/>
        <h3>{name} and {prevName.current}</h3>
        {/* <h4>{renderCount.current}</h4> */}
        {/* <button onClick={focuses}>Focus</button> */}
    </div>
  )
}

export default Ref
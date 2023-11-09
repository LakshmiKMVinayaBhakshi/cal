import React, { useState } from 'react'

const Calculator = () => {
    const [result,setResult] = useState("haii");
return (
    <div>
        <h1>{result}</h1>
    </div>
)
}

export default Calculator
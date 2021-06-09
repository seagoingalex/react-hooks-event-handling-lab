// Code Keypad Component Here

function KeyPad(props) {
    return (
        <input onChange={() => console.log('Entering password...')} type="password" />
    )
}

export default KeyPad;
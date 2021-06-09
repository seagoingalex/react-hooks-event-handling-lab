// Code EyesOnMe Component Here

function EyesOnMe() {
    function focus() {
        console.log('Good!')
    } 

    function blur() {
        console.log('Hey! Eyes on me!')
    } 

    return(
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    )

    // let payingAttention = true;
    
    // if (payingAttention) {
    //     return (
    //         <button onClick={focus}>Eyes on me</button>
    //     )
    // } else {
    //     return (
    //         <button onClick={blur}>Eyes on me</button>
    //     )
    // }

}

export default EyesOnMe;
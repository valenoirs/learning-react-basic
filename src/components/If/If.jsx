const True = (props) => {
    return (
        <div>
            Ternary Operator True!
        </div>
    )
}

const False = (props) => {
    return (
        <div>
            Ternary Operator False!
        </div>
    )
}

const If = (props) => {
    const {firstCondition, secondCondition} = props

    if(firstCondition){
        return(
            <div>
                <h1>TRUE!</h1>
                {secondCondition ? <True /> : <False/>}
                {secondCondition && <p>{'Logical && Operator True'}</p>}
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>FALSE!</h1>
                {secondCondition && <p>{'Logical && Operator True'}</p>}
            </div>
        )
    }
}

export default If
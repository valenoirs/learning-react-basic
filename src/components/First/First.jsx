const First = (props) => {

    const {string, object} = props
    const {first, second} = object

    return (
        <div>
            <p>{`${first} ${second} ${string}`}</p>
        </div>
    )
}

export default First
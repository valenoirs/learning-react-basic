const Input = (props) => {
    const {name, type, label} = props

    return (
            <div>
                <label>{label}</label>
                <input type={type} name={name}></input>
            </div>
    )
}

export default Input
import Input from './items/Input'

const Form = (props) => {
    const {properties} = props

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());

        console.log(formDataObj)
    }

    return (
        <form onSubmit={handleSubmit}>
            {properties.map(e => <Input key={e.id} type={e.type} name={e.name} label={e.label}/>)}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form
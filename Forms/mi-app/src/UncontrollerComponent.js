function UncontrollerComponent() {

    const submit = (e) => {
        e.preventDefault()
        const data = Array.from(new FormData(e.target))
        console.log(Object.fromEntries(data))
    }
    return (
        <form onSubmit={submit}>
            <div>
                <span>lalal</span>
                <input name='campos' />
                <input name='campos2' />
                <input value='Enviar' type='submit'/>
            </div>
        </form>
    );
}

export default UncontrollerComponent;


const App = () => {

    const submit = (e) => {
        e.preventDefault()
        const data = Array.from(new FormData(e.target))
        console.log(Object.fromEntries(data));
    }

    return (
        <form onSubmit={submit}>
            <div>
                <span>Lalala</span>
                <input type='text' name='campo' />
                <input type='text' name='campo2' />
                <input type='file' name='archivo'/>
            </div>
            <input type='submit' value='Enviar' />
        </form>
    );
}

export default App
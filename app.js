const app = document.getElementById('app')

const formAction = () => {
    const form = document.getElementById('form')
    form.onsubmit = (event) => {
        event.preventDefault
    }
}
const startApp = () => {
    const content = `
    <form id="form">
        <input type="email" name="email" placeholder="Email">
        <input type="text" name="telefone" placeholder="Telefone">
        <button>Confirmar</button>
    </form>`

    app.innerHTML = content
}

startApp()
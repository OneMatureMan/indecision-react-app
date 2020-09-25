const app = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of a computer!',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }
    renderApp()
}

const onRemoveAll = (e) => {
    app.options = []
    renderApp()
}
let whatToDo = ''
const onMakeDecision = () => {
    const rand = Math.floor(Math.random() * app.options.length)
    const option = app.options[rand]
    alert(option)
}




const appRoot = document.getElementById('app')

const renderApp = () => {
    const template = (
        <div>  
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <h2>Here are your options:</h2> :<p>No options</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                  app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
}

renderApp()

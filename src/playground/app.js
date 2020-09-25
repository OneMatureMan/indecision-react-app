class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options : []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options) {
                this.setState(() => ({ options }))
            }  
        } catch (e) {
            // Nothing at all!
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const options = JSON.stringify(this.state.options)
            localStorage.setItem('options', options)
        }
    }


    handleDeleteOption(option) {
        const newOptions = this.state.options.filter(op => op !== option)
        this.setState(() => ({ options: newOptions}))
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options : []
            }
            
        })

        this.setState(() => ({ options:[] }));
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[random])
    }

    handleAddOption(option) {
        if (!option) {
            return "please enter a valid option"
        } else if (this.state.options.indexOf(option) > -1){
            return "This option already exists!"
        }

        this.setState((prevState) => ({ options : prevState.options.concat([option])}))
    }

    render() {
        const subtitle= "Put your life in the hands of a computer!"
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}


const Action = props => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}


const Options = props => {
    const options = props.options.map(option => {
        return (
            <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption} 
            />
        )
    })
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {options}
        </div>
    )
}


const Option = props => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button onClick={() => props.handleDeleteOption(props.optionText)}>remove</button>
        </div>
    )
}


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.option.value.trim()
        const error = this.props.handleAddOption(option)
 
        this.setState(() => ({ error }))

        if(!error){
            e.target.option.value = ''
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" autoComplete='off' />
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.handleToggle}>
                    {this.state.visibility ? 'hide details' : 'show details'}
                </button>
                {this.state.visibility && <p>This is a good textation</p>}
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))








// let visibility = false;
// const toggleVisiblity = () => {
//     visibility = !visibility;
//     render()
// }


// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisiblity}>
//                 {visibility ? 'hide details' : 'show details'}
//             </button>
//             { visibility && <p>Hey. here we go bro!</p>}
//         </div>
//     )

//     ReactDOM.render(template,document.getElementById('app'))
// }

// render()

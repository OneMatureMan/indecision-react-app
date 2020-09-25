import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options : [],
        isModal: false,
        selectedOption: undefined
    }

    handleCloseModal = () => {
        this.setState(() => ({
            // selectedOption: '',
            isModal: !this.state.isModal
        }))
    }

    handleDeleteOption = option => {
        const newOptions = this.state.options.filter(op => op !== option)
        this.setState(() => ({ options: newOptions}))
    };

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options : []
            }  
        })
        this.setState(() => ({ options:[] }));
    };

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[random]
        this.setState(() => ({ 
            selectedOption: option,
            isModal: !this.state.isModal
        }))
        // alert(this.state.options[random])
    };

    handleAddOption = option => {
        if (!option) {
            return "Enter valid value to add item."
        } else if (this.state.options.indexOf(option) > -1){
            return "The item already exists."
        }

        this.setState((prevState) => ({ options : prevState.options.concat([option])}))
    };

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

    render() {
        const subtitle= "Put your life in the hands of a computer!"
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                    <Options 
                        options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption} 
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                    </div>
                    
                </div>
                <OptionModal 
                    isModal = {this.state.isModal}
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal} 
                />
            </div>
        )
    }
}
import React, { Component } from 'react'
import Emoji from './component/Emoji.json'
import './App.css'
class EmojiSearch extends Component {
    constructor() {
        super()
        this.state={
            searchData:' ',
        }
    }
    search=(event) => {
        this.setState({
            searchData: event.target.value
        })
    }
    render(){
        return (
            <div className='main-div'>
                <h1 className='heading'>👑Emoji Search👑</h1>
                <input type="text" className='search' onChange={this.search} placeholder="Emoji search...." />
                {Emoji.filter((data) => {
                    return (data.symbol.toLowerCase().includes(this.state.searchData.toLowerCase())
                       ||data.keywords.toLocaleLowerCase().includes(this.state.searchData.toLowerCase())
                       ||data.title.toLowerCase().includes(this.state.searchData.toLowerCase()))         
                })
                .map(data => {
                    return (
                        <div className='All'>
                            <div className="react">{data.symbol}{data.title}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default EmojiSearch;



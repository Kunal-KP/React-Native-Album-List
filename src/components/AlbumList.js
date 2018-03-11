import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    constructor() {
        super()
        this.state = {
            albums: []
        }
    }
    componentDidMount() {
        axios.get('https://albumapi.herokuapp.com/')
        .then(response => {
            console.log(response)
            this.setState({ albums: response.data })
        })
    }

    renderAlbums() {
        return this.state.albums.map((album,key) => <AlbumDetail key={key} album={album} />)
    }

    render() {
        console.log('State Changed: ',this.state)
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList
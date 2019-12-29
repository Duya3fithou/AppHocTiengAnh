import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class Word extends Component {

    memorizedWord() {
        this.props.dispatch({
            type: 'TOGGLE_MEMORIZED',
            id: this.props.myWord.id
        })
    }
    isShowWord() {
        this.props.dispatch({
            type: 'TOGGLE_SHOW',
            id: this.props.myWord.id
        })
    }

    render() {
        console.log(this.props.myWord.isShow)
        const { container, button } = styles
        const { en, vn, memorized, isShow } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none'
        const isShowLine = isShow ? 1 : 0
        return (
            <View style={container}>
                <View style={button}>
                    <TouchableOpacity onPress={this.memorizedWord.bind(this)}>
                        <Text>Memorized</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.isShowWord.bind(this)}>
                        <Text>Show</Text></TouchableOpacity>
                </View>
                <View >
                    <Text style={{ textDecorationLine }}>{en}</Text>
                    <Text style={{opacity: isShowLine}}>{vn}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E9EFF7',
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    button: {
        paddingRight: 50
    }

})

export default connect()(Word)


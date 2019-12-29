import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import {toggleMemorized, toggleShow} from '../redux/action/actionCreators'

class Word extends Component {

    render() {
        const { container, button } = styles
        const { en, vn, memorized, isShow , id} = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none'
        const isShowLine = isShow ? 1 : 0
        return (
            <View style={container}>
                <View style={button}>
                    <TouchableOpacity onPress={() => this.props.toggleMemorized(id)}>
                        <Text>Memorized</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.toggleShow(id)}>
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

export default connect(null, {toggleMemorized, toggleShow})(Word)


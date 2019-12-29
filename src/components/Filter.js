import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class Filter extends Component {

    getTextColor(statusName) {
        const {myFilterStatus} = this.props;
        if(statusName === myFilterStatus) return {color: '#282C34', fontWeight: 'bold'};
        return styles.text
    }

    setFilterStatus(actionType) {
        this.props.dispatch({type: actionType})
    }

    render() {
        const {container, text} = styles
        return (
            <View style={container}>
                <TouchableOpacity onPress = {() =>{
                    this.setFilterStatus('FILTER_SHOW_ALL')
                }}>
                    <Text style = {this.getTextColor('SHOW_ALL')}>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() =>{
                    this.setFilterStatus('FILTER_MEMORIED')
                }}>
                    <Text style = {this.getTextColor('MEMORIED')}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() =>{
                    this.setFilterStatus('FILTER_NEED_PRACTICE')
                }}>
                    <Text style = {this.getTextColor('NEED_PRACTICE')}>NEED PRACTICE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CFDAF5',
        flexDirection: 'row',
        flex: 1, 
        justifyContent: 'space-around',
        alignItems: 'center',
        opacity: 1,
    },
    text:{
        color: '#fff'
    }
})

function mapStateToProps(state){
    return {
        myFilterStatus: state.filterStatus
    }
}

export default connect(mapStateToProps)(Filter);
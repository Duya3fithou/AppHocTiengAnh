import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Dialog from "react-native-dialog";
import {addWord} from '../redux/action/actionCreators'
class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dialogVisible: false, 
            en: '',
            vn: ''
        }
    }
    onAdd(){
        const {en, vn} = this.state;
        this.props.addWord(en, vn);
    }

    showDialog = () => {
        this.setState({ dialogVisible: true });
    };

    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };

    handleAdd = () => {
        this.onAdd(),
        this.setState({ dialogVisible: false });
    };
    render() {
        const { wrapper, addButton, textHeader } = styles
        return (
            <View style={wrapper}>
                <Text />
                <Text style={textHeader}>MY WORDS</Text>
                <TouchableOpacity onPress={this.showDialog}>
                    <Text style={addButton}>+</Text>
                </TouchableOpacity>

                <Dialog.Container visible={this.state.dialogVisible}>
                    <Dialog.Title>Add new words</Dialog.Title>
                    <Dialog.Input
                        placeholder = 'English word'
                        value = {this.state.en}
                        onChangeText = {text => this.setState({en: text})}
                    />
                    <Dialog.Input
                        placeholder = 'Meaning'
                        value = {this.state.vn}
                        onChangeText = {text => this.setState({vn: text})}
                       
                    />
                    <Dialog.Button label="ok" onPress={this.handleAdd} />
                    <Dialog.Button label="cancel" onPress={this.handleCancel} />
                  
                </Dialog.Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'
    },
    addButton: {
        paddingRight: 15, fontWeight: 'bold', fontSize: 30
    }, textHeader: {
        fontWeight: 'bold', fontSize: 30
    }
})



export default connect(null, {addWord})(Header);
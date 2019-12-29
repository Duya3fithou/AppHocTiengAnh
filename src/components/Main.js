console.disableYellowBox = true;
import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Word from './Word.js'
import Filter from './Filter.js'
import Header from './Header.js'
class Main extends Component {

    getWordList() {
        const { myFilter, myWords } = this.props;
        if (myFilter === 'MEMORIED')
            return myWords.filter(e => e.memorized);
        if (myFilter === 'NEED_PRACTICE')
            return myWords.filter(e => !e.memorized);
        return myWords;
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                <Header />
                <View style={{ flex: 20 }}>
                    <FlatList
                        data={this.getWordList()}
                        renderItem={({ item }) =>
                            <Word myWord={item} />
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
                <Filter />
            </SafeAreaView>

        );
    }
}

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords
    }
}

export default connect(mapStateToProps)(Main);
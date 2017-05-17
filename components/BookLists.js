import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
} from 'react-native'

import {Actions} from 'react-native-router-flux'
import BookItems from './BookItems'


// NY Book API information
const API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290';
const QUERY_TYPE = 'hardcover-fiction';
const API_STEM = 'http://api.nytimes.com/svc/books/v3/lists'
// const ENDPOINT = '${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}';
const  ENDPOINT = 'http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290'

class BookList extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
    this.state={
      dataSource: ds.cloneWithRows([]),
      refreshing: false,
    }

  }
  componentDidMount() {
    this._fetchData()
  }

  // getting data from inte rnet
  _fetchData() {
    // console.log('print me')
    fetch(ENDPOINT)
      .then ((response) => response.json())
      .then((rjson) => {
        this.setState({
        dataSource: this.state.dataSource.cloneWithRows(rjson.results.books)
      })
    })
  }
  _onRefresh() {
    this.setState({refreshing: true})
    this._fetchData()
    this.setState({refreshing: false})

  }
  _renderRow(rowData) {
    // console.log('hi')
    // console.log(rowData.amazon_product_url)
    return (
      //
      <BookItems title={rowData.title}
                 author={rowData.author}
                 description={rowData.description}
                 cover={rowData.book_image}
                 url={rowData.amazon_product_url}
               />
    )
  }
  render() {
    // console.log(this.state.dataSource.amazon_product_url)
    return (
      <View style={{flex: 1}}>
      <StatusBar backgroundColor="black"
               barStyle="light-content"/>
      <ListView style={styles.listStyle}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                 />
                }
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#bdc3c7'
  }
})


export default BookList;

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  WebView,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

class PageWebView extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="black"
                 barStyle="light-content"/>
        <WebView source={{uri: this.props.url}}
                style={styles.webSty}/>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  webSty: {
    marginTop: 64,
  }
})

export default PageWebView;

import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'
import {Actions} from 'react-native-router-flux'


class BookItem extends Component {
  constructor(props){
        super(props)
        this.state={
          Url: 'http://google.com',

        }
  }
  propType: {
    cover: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    // buyUrl: React.PropTypes.string.isRequired,
  }

  _nextPage() {
    Actions.buywebview({url: this.state.Url})
  }
  componentDidMount() {
     this.setState({
       Url: this.props.url
     })
  }

  render() {
    console.log(this.props.url)
    return (
      // console.log('print')
    //  return (
        <View style={styles.container}>
            <View style={styles.oneBlock}>
              <Image style={styles.imgCont}
                   source={{uri: this.props.cover}}
                   resizeMode='stretch'/>
                 </View>
              <View style={styles.twoBlock}>
                <View style={styles.thirdblock}>
                  <Text style={styles.titleSty}>
                    {this.props.title}
                  </Text>
                  <Text style={styles.authorSty}>
                    {this.props.author}
                  </Text>
            {/* }<Text style={{fontFamily: 'Palatino', marginTop: 5}}>Description</Text> */}
                  <Text style={styles.descriptionSty}>
                    {this.props.description}
                  </Text>
                </View>
                <View style={styles.forthblock}>
                  <TouchableOpacity style={styles.buylinkSty}
                                    onPress={() => Actions.buywebview({url: this.state.Url})}>
                    <Text style={styles.buySty}>BUY</Text>
                  </TouchableOpacity>
                </View>
              </View>
        </View>
      )
    }
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 1.5,
    marginTop: 1.5,
    borderRadius: 7,
    opacity: 1,
    // color: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    //
  },
  oneBlock: {
    //flex: 1.3,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  twoBlock: {
    // flex: 3,
    // flexDirectoion: 'column',
    marginLeft: 5,
    marginRight: 100,
    marginTop: 5,
  },
  thirdblock: {
    flex: 5,
    marginRight: 5,
    flexDirection: 'column',

  },
  forthblock: {
    marginBottom: 10,
    marginTop: 20,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    // borderRadius: 10,
    // backgroundColor: 'red',
  },
  imgCont: {
    height: 140,
    width: 100,
    borderRadius: 7,
    backgroundColor: 'black',
    margin: 4,
  },
  titleSty: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 18,
    fontFamily: 'Times New Roman',
    // backgroundColor: 'rgb(52, 73, 94)'

    //
  },
  authorSty: {
    marginTop: 3,
    fontFamily: 'Times New Roman',
    fontSize: 18,
    //
  },
  descriptionSty: {
    marginTop: 8,
    // color: 'white',
    fontFamily: 'Times New Roman',
    textAlign: 'left',
    marginRight: 5,
    fontSize: 17,
    //
  },
  buylinkSty: {
    //cmarginBottom: 10,
    // marginTop: 30,
    // height: 20,
    width: 80,
    borderRadius: 5,
    // backgroundColor: '#27ae60',
    borderWidth: 1,
    borderColor: '#27ae60',
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  buySty: {
    fontFamily: 'Times New Roman',
    fontWeight: '500',
    fontSize: 18,
    color: '#27ae60',
    // borderRadius: 10,
  }

})

export default BookItem;

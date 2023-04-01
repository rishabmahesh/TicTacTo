/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

//Icons
import Entypo from 'react-native-vector-icons/Entypo';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rowStyles}>
        <View style={[styles.tileStyles, styles.topLeftCorner]}>
          <View style={styles.circle} />
        </View>
        <View style={[styles.tileStyles, styles.topCenter]}>
          <Entypo name="circle-with-cross" size={50} color="#000000" />
        </View>
        <View style={[styles.tileStyles, styles.topRightCorner]} />
      </View>

      <View style={styles.rowStyles}>
        <View style={[styles.tileStyles, styles.middleLeft]} />
        <View style={styles.tileStyles}>
          <View style={styles.circle} />
        </View>
        <View style={[styles.tileStyles, styles.middleRight]} />
      </View>

      <View style={styles.rowStyles}>
        <View style={[styles.tileStyles, styles.lastLeftCorner]}>
          <Entypo name="circle-with-cross" size={50} color="#000000" />
        </View>
        <View style={[styles.tileStyles, styles.lastCenter]} />
        <View style={[styles.tileStyles, styles.lastRightCorner]}>
          <View style={styles.circle} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    borderColor: 'black',
    borderWidth: 1,
    height: 1,
  },
  topGap: {
    height: 100,
  },
  tileStyles: {
    height: 75,
    width: 75,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowStyles: {
    flexDirection: 'row',
  },
  topLeftCorner: {
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  topRightCorner: {
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  topCenter: {
    borderTopWidth: 0,
  },
  lastLeftCorner: {
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  lastRightCorner: {
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  lastCenter: {
    borderBottomWidth: 0,
  },
  middleLeft: {
    borderLeftWidth: 0,
  },
  middleRight: {
    borderRightWidth: 0,
  },
  circle: {
    borderWidth: 2,
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});

export default App;

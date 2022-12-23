import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image
} from 'react-native';

import { LineChart, YAxis, Grid } from 'react-native-svg-charts';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

class StockPlotComponent extends React.PureComponent {
    render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        const contentInset = { top: 20, bottom: 20 }

        return(
           <View style={{ height: 80, flexDirection: 'row' }}>
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={this.props.data}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={contentInset}
                >
                </LineChart>
            </View>
        )
    }
}


export default StockPlotComponent;

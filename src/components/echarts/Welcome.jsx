import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import 'echarts-gl';
import YN from '../../assets/530000.json'

require('echarts/map/js/china.js');
require('echarts/map/js/china-contour.js');
// require('echarts/map/js/china-cities.js');
require('echarts/map/js/world.js');

class Welcome extends Component {
  constructor(props) {
    super(props);

    echarts.registerMap('YN', YN);
    // this.state={map:"YN"}
    this.state={map:"world"}

  }

  getOption = () => {
    return {
      grid:{
        left:10,
        right:10,
        top:10,
        bottom:10,
      },
      series: [
        {
          type: 'map3D',
          map: this.state.map,
          label: {
            show: true,
            distance:10,
            textStyle: {
              fontSize: 12,
              fontWeight: 'bolder',
              fontFamily: 'monospace',
            },
          },
          itemStyle: {
            borderWidth: 1,
          },
          emphasis:{
            itemStyle:{
              // color:'rgba(44,205,234,0.9)'
            }
          },
          viewControl: {
            distance: 200,
            alpha:60,
            center:[0,-20,0]
          },
        }
      ]
    };
  };
  onChartClick=(e)=>{

  }
  render() {
    let onEvents={
      'click': this.onChartClick.bind(this),
    }
    return (
      <div onDoubleClick={()=> {
        this.onChartClick({name: ""})
      }}>
        <ReactEcharts
          option={this.getOption()}
          style={{height: 900, width: 1200}}
          onEvents={onEvents}
        />
      </div>
    )
  }
}

export default Welcome;




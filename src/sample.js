import React from 'react'
import { Input, Icon, Button, Table, Columns} from 'antd';



export default class extends React.Component {

  state = {
    order: [],
    food: [
      {
        key: 0,
        name: 'ข้าวต้ม',
      },
      {
        key: 1,
        name: 'กระเพรา'
      }
    ]
  }

  onPushOrder = (key) => (data) => {
    this.state.order.push(data)
    this.setState({ order: this.state.order})
    console.log(this.state);
    
    this.state.order.map((val, index) => {
      this.state.food.filter(id => {
        if (id.key === index) {
          delete this.state.order[index]
        }
      })
    })
  }

  onRemoveOrder = (key) => {
    const a = this.state.order.filter((d) => d.key !== key ? d : null)
    this.setState({ order: a})
  }

  render() {
    return (
      <div style={{ display: 'flex', width: '100%', backgroundColor: 'red' }}>
        <div style={{ flex: 1, width: '30%', fontSize: 20 }}>
          {this.state.food.map(d => <div>{d.name}</div>)}
        </div>
        <div style={{ flex: 1, width: '30%' }}>
          {
            this.state.food.map(d => {
              return (
                <div>
                  <div key={d.key} style={{ fontSize: 20 }}>{d.name}</div>
                  <Button onClick={() => this.onPushOrder(d.key)(d)}>+</Button>
                </div>
              )
              
          })
          }
        </div>
        <div style={{ flex: 1, width: '30%', fontSize: 20 }}>
          {this.state.order.map(d => {
            return (
              <div>{d.name}</div>
            )
          })}
        </div>
      </div>
    )
  }
}
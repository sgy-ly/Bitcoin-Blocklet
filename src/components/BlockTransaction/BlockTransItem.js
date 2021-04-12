import React, { Component } from 'react';
import style from "./BlockTran.module.css"

class BlockTranItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        blockDate: {}
      }
    }
    render(){
        return (
            <div className={style["tran-container"]} >
                
            </div>
        )
    }
}
export default BlockTranItem;
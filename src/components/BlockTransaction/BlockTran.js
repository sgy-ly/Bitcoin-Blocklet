import React, { Component } from 'react';
import style from "./BlockTran.module.css"

import BlockTranTtem from "./BlockTransItem"

class BlockTran extends Component {
    constructor(props) {
      super(props);
      this.state = {
        blockDate: {}
      }
    }
    render(){
        return (
            <div className={style["tran-container"]} >
                <div class={style["tran-container-title"]}>
                    <div class="block-lamp-valid"></div>
                    <div class={style["tran-container-title-name"]}>Block Transactions</div>
                </div>
                <div class={style["tran-container-body"]}>
                    <BlockTranTtem></BlockTranTtem>
                </div>
            </div>
        )
    }
}
export default BlockTran;
import style from "./BlockHeader.module.css"
import React, { Component } from 'react';

class BlockHeader extends Component {
    constructor(props) {
        super(props);
        let confirmations;
        if(props.blockHeader){
            confirmations=props.blockHeader.tx.count;
        }
        this.state = {
            blcokHeder:props.blcokHeder,
            confirmations:confirmations
        }
    }
    componentWillReceiveProps = (nextProps) => {
        let confirmations;
        if(this.nextProps.blockHeader){
            confirmations=this.nextProps.blockHeader.tx.count;
        }
        this.setState({
            blcokHeder: this.nextProps.blockHeader,
            confirmations:confirmations
        })    
    }
  

    render() {
        return (
            <div className={style["block-container"]} >
                <div class={style["block-header"]}>
                    <div class={style["block-lamp-valid"]}></div>
                    <div class={style["block-header-title"]}>Block 662463</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Hash</div>
                    <div className={style["block-item-constent"]}>{this.state.blcokHeder.hash?this.state.blcokHeder.hash:""}</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Confirmations</div>
                    <div className={style["block-item-constent"]}>{this.state.blcokHeder.confirmations}</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Timestamp</div>
                    <div className={style["block-item-constent"]}>{this.state.blcokHeder.time}</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Height</div>
                    <div className={style["block-item-constent"]}>{this.state.blcokHeder.height}</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Miner</div>
                    <div className={style["block-item-constent"]}>"Poolin"</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Number of Transactions</div>
                    <div className={style["block-item-constent"]}>props.blockHeader.n_tx</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Merkle root</div>
                    <div className={style["block-item-constent"]}>props.blockHeader.mrkl_root</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Merkle root</div>
                    <div className={style["block-item-constent"]}>props.blockHeader.mrkl_root</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Version</div>
                    <div className={style["block-item-constent"]}>props.blockHeader.Version</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Bits</div>
                    <div className={style["block-item-constent"]}>props.blockHeader.bits</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Weight</div>
                    <div className={style["block-item-constent"]}>props.blockHeader.weight</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Size</div>
                    <div className={style["block-item-constent"]}>props.blockHeader.size</div>
                </div>
                <div class={style["block-header-row"]}>
                    <div className={style["block-item-title"]}>Nonce</div>
                    <div className={style["block-item-constent"]}>props.blockHeader.nonce</div>
                </div>
            </div>
        )
    }
}
export default BlockHeader;
import style from "./BlockHeader.module.css"
import React, { Component } from 'react';

class BlockHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blcokHeder:props.blcokHeder
        }
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            blcokHeder: nextProps.blockHeader
        });
    }
    render() {
        console.log(this.state.blcokHeder);
        let Hash,confirmations,Timestamp, Height,n_tx,mrkl_root,version,bits,weight,size,nonce,Miner;
        let blockHeaderBody;
        if(this.state.blcokHeder){
            Hash=this.state.blcokHeder.hash;
            confirmations=this.state.blcokHeder.tx.weight;
            Timestamp=this.state.blcokHeder.time;
            Height=this.state.blcokHeder.height;
            n_tx=this.state.blcokHeder.height;
            mrkl_root=this.state.blcokHeder.mrkl_root;
            version=this.state.blcokHeder.version;
            bits=this.state.blcokHeder.bits;
            weight=this.state.blcokHeder.weight;
            size=this.state.blcokHeder.size;
            nonce=this.state.blcokHeder.nonce;
            Miner="Poolin";
            blockHeaderBody=(
                <div class={style["block-header-befor"]}>
                    <BlockHeaderRow Title="Hash" Value={Hash}></BlockHeaderRow>
                    <BlockHeaderRow Title="confirmations" Value={this.state.confirmations}></BlockHeaderRow>
                    <BlockHeaderRow Title="Timestamp" Value={Timestamp}></BlockHeaderRow>
                    <BlockHeaderRow Title="Height" Value={Height}></BlockHeaderRow>
                    <BlockHeaderRow Title="Miner" Value={Miner}></BlockHeaderRow>
                    <BlockHeaderRow Title="Number of Transactions" Value={mrkl_root}></BlockHeaderRow>
                    <BlockHeaderRow Title="Merkle root" Value={Hash}></BlockHeaderRow>
                    <BlockHeaderRow Title="Version" Value={version}></BlockHeaderRow>
                    <BlockHeaderRow Title="Bits" Value={bits}></BlockHeaderRow>
                    <BlockHeaderRow Title="Weight" Value={weight}></BlockHeaderRow>
                    <BlockHeaderRow Title="Size" Value={size}></BlockHeaderRow>
                    <BlockHeaderRow Title="Nonce" Value={nonce}></BlockHeaderRow>
                </div>
            );
        }
        return (
            <div className={style["block-container"]} >
                <div class={style["block-header"]}>
                    <div class="block-lamp-valid"></div>
                    <div class={style["block-header-title"]}>Block {Height}</div>
                </div>
                <span>This block was mined on December 22, 2020 at 3:09 PM GMT+8 by Poolin. It currently has 16,382 confirmations on the Bitcoin blockchain.</span>
                <span>The miner(s) of this block earned a total reward of 6.25000000 BTC ($373,218.19). The reward consisted of a base reward of 6.25000000 BTC ($373,218.19) with an additional 0.16583560 BTC ($9,902.86) reward paid as fees of the 912 transactions which were included in the block. The Block rewards, also known as the Coinbase reward, were sent to this address.</span>
                <span>A total of 306.51676953 BTC ($18,303,621.31) were sent in the block with the average transaction being 0.33609295 BTC ($20,069.76).  Learn more about how blocks work.</span>
                {blockHeaderBody}
            </div>
        )
    }
}
function BlockHeaderRow(props){
    return (
        <div class={style["block-header-row"]}>
            <div className={style["block-item-title"]}>{props.Title}</div>
            <div className={style["block-item-constent"]}>{props.Value}</div>
        </div>
    )
}
export default BlockHeader;
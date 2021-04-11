import style from "./BlockSearch.module.css"
import React, { Component } from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import BlockHeader from "./BlockHeader";
import BlockTransaction from "../BlockTransaction/BlockTransaction";


class BlockSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockDate: {},
      searchHash: "",
      searchHeader: null,
      searchTransaction: null
    }
  }
  componentDidMount() {

  }
  blockSearchClick = () => {
    console.log(this.state.searchHash);
    fetch('/block?blockhash=' + this.state.searchHash)
      .then(res => res.json())
      .then(prams => {
        console.log(prams);
        let blockDateParm;
        let searchTransactionparm;
        if(prams.blockData){
          blockDateParm=prams.blockData;
          searchTransactionparm=prams.blockData.tx;
        }

        this.setState((state, props) => ({
          blockDate:blockDateParm,
          blockHeader:blockDateParm,
          searchTransaction:searchTransactionparm
        }));
      });
  }
  change(e) {
    console.log(e.target.value);    //获取修改后的值
    this.setState({
      searchHash: e.target.value
    })
  }
  render() {
    return (
      <div className={style["search-container"]}>
        <div className={style["search-box"]}>
          <div className={style["search-header"]}>
            <span>Explorer</span>
            <span>&gt;</span>
            <span>Explorer</span>
            <span>&gt;</span>
            <span className={style["search-select"]}>Block</span>
          </div>
          <Input className={style["search-input"]} placeholder="Block Hash" value={this.state.searchHash} onChange={(event) => { this.change(event) }} />
          <Button type="primary" onClick={this.blockSearchClick}>Search Block</Button>
        </div>
        <BlockHeader blockHeader={this.state.blockHeader}></BlockHeader>
        <BlockTransaction blockTransaction={this.state.blockTransaction}></BlockTransaction>
      </div>
    );
  }

}
export default BlockSearch;
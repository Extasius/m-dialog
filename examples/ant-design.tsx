/* tslint:disable:no-console */

import 'rmc-dialog/assets/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
// use import Dialog from 'rmc-dialog'
import Dialog from '../src/DialogWrap';

class MyControl extends React.Component<any, any> {
  modalInput: any;

  state = {
    visible: false,
    center: false,
  };

  dialog: Dialog;

  componentDidMount() {
    console.log(this.modalInput);
    this.dialog.componentWillUnmount();
  }

  onClick = () => {
    this.setState({
      visible: true,
    });
  }
  onClose = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  center = (e) => {
    this.setState({
      center: e.target.checked,
    });
  }
  render() {
    let dialog;
    let wrapClassName = '';
    if (this.state.center) {
      wrapClassName = 'center';
    }
    dialog = (
      <Dialog
        ref={(dom: any) => this.dialog = dom}
        visible={this.state.visible}
        wrapClassName={wrapClassName}
        animation="zoom"
        maskAnimation="fade"
        onClose={this.onClose}
      >
      <input ref={el => this.modalInput = el} />
        <p>basic modal</p>
        <div style={{ height: 200 }}></div>
      </Dialog>
    );
    return (
      <div style={{ width: '90%', margin: '0 auto' }}>
        <style>
          {
            `
            .center {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            `
          }
        </style>
        <p>
          <button
            className="btn btn-primary"
            onClick={this.onClick}
          >
            show dialog
          </button>
          &nbsp;
          <label>center
            <input
              type="checkbox"
              checked={this.state.center}
              onChange={this.center}
            />
          </label>
        </p>
        {dialog}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <h2>ant-design dialog</h2>
    <MyControl />
  </div>,
  document.getElementById('__react-content'),
);

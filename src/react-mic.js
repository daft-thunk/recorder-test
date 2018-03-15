import { ReactMic } from 'react-mic';
import React from 'react'
import ajax from 'ajax'

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob) {
    const blobify = (blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function() {
       let base64data = reader.result;
       console.log(base64data);
      }
    }
    console.log('recordedBlob is: ', recordedBlob);
    console.log('base64', blobify(recordedBlob.blob))
  }

  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          strokeColor="#000000"
          backgroundColor="#FF4081" />
        <button onClick={this.startRecording} type="button">Start</button>
        <button onClick={this.stopRecording} type="button">Stop</button>
      </div>
    );
  }
}

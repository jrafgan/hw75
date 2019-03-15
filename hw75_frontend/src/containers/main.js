import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeValue, sendToDecode, sendToEncode} from "../store/actions";

class Main extends Component {

    render() {
        return (
            <div className='main'>
                <div className="decoded_div"><p>Decoded</p>
                    <textarea name='decoded' onChange={this.props.changeValue} value={this.props.decoded}
                              className='decoded_textarea'/></div>
                <div className="password_div">
                    <div className="password_input">
                        <p>Password</p>
                        <input name='password' value={this.props.password} onChange={this.props.changeValue}/>
                    </div>
                    <div className="arrows_div">
                        <img alt='arrow_encode'
                             src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1024px-Red_Arrow_Down.svg.png'

                             className='arrow_encode arrow' onClick={this.props.sendToEncode}/>
                        <img alt='arrow_decode'
                             src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Green_Arrow_Up_Darker.svg/1024px-Green_Arrow_Up_Darker.svg.png'
                             className='arrow_decode arrow' onClick={this.props.sendToDecode}/>
                    </div>
                </div>
                <div className="encoded_div">
                    <p>Encoded</p>
                    <textarea name='encoded' value={this.props.encoded} onChange={this.props.changeValue}/>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        encoded: state.encoded,
        decoded: state.decoded,
        password: state.password,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeValue: (e) => dispatch(changeValue(e)),
        sendToEncode: ()=> dispatch(sendToEncode()),
        sendToDecode: ()=> dispatch(sendToDecode())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
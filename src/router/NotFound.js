import React, { Component } from "react";
import { translate } from '../translations/trs'
 import $ from "jquery";

class notfound extends Component {
	
		componentDidMount() {
                                      $('#home').removeClass('bl')
          $('#homes').removeClass('all')
				       $('.addsa').hide()

  }

	
  render() {
    return (
      <div className="error">
		    
<span className="cra">+</span>
<span  className="crb">+</span><span  className="crc">+</span>
		<div className="endzone">404</div>
		<div className="endzones">404</div>
		<div className="tils">{this.props.t('home.erro')}</div>
       </div>
    );
  }
}
 
export default translate(notfound);
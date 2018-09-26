import React, { Component } from "react";
import { translate } from '../translations/trs'
 import $ from "jquery";
class home extends Component {
	 
		
     
  componentDidMount() {
        $('#home').addClass('bl')
          $('#homes').addClass('all')
	       $('.addsa').hide()
  }

	 
  render() {
	  $(window).mousemove(function(e) {
    var change;
    var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
    var  xpos=xpos*2;ypos=ypos*2;
    $('.bgd').css('top',((100+(xpos/50))+"px"));
    $('.bgd').css('right',"0px");
                       $('.bgd1').css('top',((100+(ypos/50))+"px"));

  });
	  
	  /*
 
		var a = 0;
		for (; a < 15; a += 1) {
			setTimeout(function b() {
					var a = Math.random() * 1e3 + 5e3,
						c = $("", {
							"class": "smoke",
							css: {
								left: Math.random() * 200 + 80
							}
						}); 
				$(c).appendTo(".bgd1"); $.when($(c).animate({}, {
					duration: a / 4,
					easing: "linear",
					queue: false,
					complete: function () {
						$(c).animate({}, {
							duration: a / 3,
							easing: "linear",
							queue: false
						})
					}
				}), $(c).animate({
					bottom: $(".bgd1").height()
				}, {
					duration: a,
					easing: "linear",
					queue: false
				})).then(function () {
					$(c).remove();
					b()
				})
			}, Math.random() * 3e3)
	
}
 
	  
	  */
	  
    return (
<div className="tengahx">
 <div className="bigtext"><span className="reveal-text">SYSTEM</span> <span className="reveal-text1">AND</span> <span className="reveal-text2">FINE</span></div>
		<div className="mailer">hi@techno-graph.com</div>
		<div className="lft"></div>
		<div className="bgd">
		</div>
		<div className="bgd1">
		<span className="smoke"></span>
		</div>
       </div>
    );
  }
}
 
export default translate(home);
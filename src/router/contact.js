import React, { Component } from "react";
import $ from "jquery";
import L from 'leaflet';
 import { translate } from '../translations/trs'

 
 class contact extends Component {
	
	constructor(props) {
    super(props);
this.state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }
 	
}
	componentDidMount() {
            $('#kontak').addClass('bl')
			$('#kontaks').addClass('all')   
    		this.map();
			$('.adds').show()
		$('.addsa').show()

  }
	 
	 
	 map() {
    var map = L.map('map', { zoomControl:false }).setView([-6.6400626, 106.776541], 13);
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
		 	/*var firefoxIcon = L.icon({
				//iconUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/134893/pin-red.svg',
				iconSize: [50, 95],
				popupAnchor: [0, -15]
			});*/
		 var firefoxIcon = new L.Icon.Default();
firefoxIcon.options.shadowSize = [100,0];
		 firefoxIcon.options.shadowSize = [0,0];

		 var customPopup = '<span class="jelong">We are here</span>\n  <p> <b>TechnoGraph</b>'
			var customOptions = {
				'maxWidth': '500',
				'className': 'custom'
			}
		 L.marker([-6.640212, 106.777170], {
				icon: firefoxIcon
			}).bindPopup(customPopup, customOptions).addTo(map);
  }
	 
  render() {
 
 const position = [this.state.lat, this.state.lng];
	  
    return (
		      <div className="tengahx">
<div className="lfts">
		<span className="adds">Cimanglid Blok Purnama 
		<span className="miadd">No.19
RT.6/RW.1, Sukamantri
Tamansari
Bogor
Jawa Barat 16610</span>
		
		<span className="pho"></span>
				<span className="mlr">hi@techno-graph.com</span>

		</span>
		</div>
		
			<div className="lft">
		
		
		
		
		
		</div>
 <div id="map" />
		</div>
    );
  }
}
 
export default translate(contact);
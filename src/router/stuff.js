import React, { Component } from "react"; 
import $ from "jquery";
import Swiper from 'react-id-swiper';
import axios from 'axios';
class stuff extends Component {
	constructor(props) {
    super(props);
this.goNext = this.goNext.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.swiper = null
this.state = {
      tipedata: [],
    };
 	
}
	 
componentDidMount() {
    $('#stuff').addClass('bl')
	$('#stuffs').addClass('all')     
	$('.ble').show()
		       $('.addsa').hide()

	$('.ble').html('<span class="blk"><div class="spinners"></div></span>')
	 axios.get("https://techno-graph.herokuapp.com/production")
    .then((response) => {
      this.setState({
        // given that response.data.courses is an object with a couse property
        tipedata: response.data
      })
		 $('.ble').hide()
	$('.ble').html('')
	var value = $('.swiper-slide-active').attr('af');
	var values = $('.swiper-slide-active').attr('des');
	var valuesd = $('.swiper-slide-active').attr('ur');
   var valuesan = $('.swiper-slide-active').attr('an');
var ty = localStorage.getItem('myData')
if(valuesan){
 			var g =  valuesan
	if(ty == 'en'){
 		$('.lnka').html('<div class="lka"><a href='+g+' target="_blank">Try android app</a></div>')
		
	}else if (ty == 'id'){
		$('.lnka').css({'left': '150px'})
		 		$('.lnka').html('<div class="lka"><a href='+g+' target="_blank">Coba aplikasi android</a></div>')

	}else{
		 		$('.lnka').html('<div class="lka"><a href='+g+' target="_blank">Try android app</a></div>')

	}

}else{
	$('.lnka').html('')
}
if(valuesd){
	var g = 'https://' + valuesd

	if(ty == 'en'){
		$('.lnk').html('<div class="lk"><a href='+g+' target="_blank">Visit</a></div>')
		
	}else if (ty == 'id'){
		$('.lnk').html('<div class="lk"><a href='+g+' target="_blank">Kunjungi</a></div>')

	}else{
		$('.lnk').html('<div class="lk"><a href='+g+' target="_blank">Visit</a></div>')

	}

}else{
	
	$('.lnk').html('')
}
	$('.title').html(value)
	$('.minides').html(values)
		 
    })
	
  }

goNext() {
    if (this.swiper) this.swiper.slideNext()
	  var value = $('.swiper-slide-active').attr('af');
	  var values = $('.swiper-slide-active').attr('des');
	$('.title').html(value)
		$('.minides').html(values)
	 	var valuesd = $('.swiper-slide-active').attr('ur');
	   var valuesan = $('.swiper-slide-active').attr('an');
	var ty = localStorage.getItem('myData')
if(valuesan){
		var g =  valuesan

	if(ty == 'en'){
 		$('.lnka').html('<div class="lka"><a href='+g+' target="_blank">Try android app</a></div>')
		
	}else if (ty == 'id'){
				$('.lnka').css({'left': '150px'})

		 		$('.lnka').html('<div class="lka" ><a href='+g+' target="_blank">Coba aplikasi android</a></div>')

	}else{
		 		$('.lnka').html('<div class="lka"><a href='+g+' target="_blank">Try android app</a></div>')

	}

}else{
	$('.lnka').html('')
}
if(valuesd){
	var g = 'https://' + valuesd

	if(ty == 'en'){
		$('.lnk').html('<div class="lk"><a href='+g+' target="_blank">Visit</a></div>')
		
	}else if (ty == 'id'){
		$('.lnk').html('<div class="lk"><a href='+g+' target="_blank">Kunjungi</a></div>')

	}else{
		$('.lnk').html('<div class="lk"><a href='+g+' target="_blank">Visit</a></div>')

	}
}else{
	$('.lnk').html('')
}
  }
 	

	 ga(a, b, c, d, e) {
		 $('.lftsx').fadeIn('fast')
		 
		 
		 
		 var ty = localStorage.getItem('myData')
		 var an;
		 var ur;
if(e){
		var v =  e

	if(ty == 'en'){
 	an = '<div class="lkaw"><a href='+v+' target="_blank">Try android app</a></div>'
		
	}else if (ty == 'id'){
		

		 	an ='<div class="lkaw" ><a href='+v+' target="_blank">Coba aplikasi android</a></div>'

	}else{
		 		an ='<div class="lkaw"><a href='+v+' target="_blank">Try android app</a></div>'

	}

}else{
	
}
if(d){
		var g = 'https://' + d

	if(ty == 'en'){
		ur ='<div class="lkw"><a href='+g+' target="_blank">Visit</a></div>'
		
	}else if (ty == 'id'){
		ur ='<div class="lkw"><a href='+g+' target="_blank">Kunjungi</a></div>'

	}else{
		ur ='<div class="lkw"><a href='+g+' target="_blank">Visit</a></div>'

	}
	
	
	
}
		 
		 
		 
		 
		 
 		 		$('.lftsx').html('<div class="nx"><span class="jl">'+b+'</span><span class="dsx">'+c+'</span>'+ur+''+an+'</div>')

	 }

	
  goPrev() {
    if (this.swiper) this.swiper.slidePrev()
	 var value = $('.swiper-slide-active').attr('af');
	  var values = $('.swiper-slide-active').attr('des');
	$('.title').html(value)
		$('.minides').html(values)
	 	var valuesd = $('.swiper-slide-active').attr('ur');
	     var valuesan = $('.swiper-slide-active').attr('an');
var ty = localStorage.getItem('myData')
if(valuesan){
			var g = valuesan

	if(ty == 'en'){
 		$('.lnka').html('<div class="lka"><a href='+g+' target="_blank">Try android app</a></div>')
		
	}else if (ty == 'id'){
				$('.lnka').css({'left': '150px'})

		 		$('.lnka').html('<div class="lka" ><a href='+g+' target="_blank">Coba aplikasi android</a></div>')

	}else{
		 		$('.lnka').html('<div class="lka"><a href='+g+' target="_blank">Try android app</a></div>')

	}

}else{
	$('.lnka').html('')
}
if(valuesd){
		var g = 'https://' + valuesd

	if(ty == 'en'){
		$('.lnk').html('<div class="lk"><a href='+g+' target="_blank">Visit</a></div>')
		
	}else if (ty == 'id'){
		$('.lnk').html('<div class="lk"><a href='+g+' target="_blank">Kunjungi</a></div>')

	}else{
		$('.lnk').html('<div class="lk"><a href='+g+' target="_blank">Visit</a></div>')

	}
	
	
	
}else{
	
	$('.lnk').html('')
}
  }

   
	
	
	
  render() {
	  		$(document).on("click", ".lftsx", function (e) {

			$('.lftsx').html('')
	 $(this).fadeOut('fast')
	
		})
		         const { tipedata } = this.state;

		 let params = {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
		 autoResize: false,
      resizeReInit: true,
			 shouldSwiperUpdate: true,
		    mode:'horizontal',
		   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  renderPrevButton: () => <button hidden className="swiper-button-prevs">Prev</button>,
  renderNextButton: () => <button hidden className="swiper-button-nexts">Next</button>,
	 
    };
 
 
									        

    return (
      <div className="tengahx">
		<div className="lfts">
		<span className="title"></span>
		<span className="minides"></span>
		<span className="lnk"></span>
		<span className="lnka"></span>
		</div>
		<div className="lftsx"></div>
		<div className="lft"></div>
		<div className="blks"></div>
        <Swiper {...params} ref="mySwiper" id="lo" >
	
		{tipedata.map((d) => (<div style={{backgroundColor: d.bg,
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    display: 'block',
    backgroundImage: 'url('+d.image+')'}}  des={d.deskrip} ap={d.apel} an={d.android} ur={d.url} key={d.id} af={d.name}><div className="minitips"  onClick={()=> this.ga(d.id, d.name, d.deskrip, d.url, d.android)} >info</div></div>))}

      </Swiper>
        <div id="nex" onClick={this.goNext} className="swiper-button-next swiper-button-white"></div>
        <div id="pre" onClick={this.goPrev} className="swiper-button-prev swiper-button-white"></div>       </div>
    );
  }
}
 
export default stuff;
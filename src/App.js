import React, { Component } from 'react';
import './App.css';
import home from "./router/home";
import contact from "./router/contact";
import stuffi from "./router/stuff";
import notfound from "./router/NotFound";
import PropTypes from 'prop-types';
import { createHashHistory } from 'history'
import { Switch, HashRouter, DelayLink, Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { setDefaultTranslations, setDefaultLanguage, translate, setLanguage }  from './translations/trs';
import $ from "jquery";
import DeviceOrientation from 'react-device-orientation';
import id from './translations/id.json';
import en from './translations/en.json';
import is from 'is_js'
import { browserName, CustomView } from 'react-device-detect';

var u = localStorage.getItem('myData');
var y;
if (u === null){
    y = 'en';
}else{
    y = localStorage.getItem('myData');
}
const history = createHashHistory()
setDefaultTranslations({id, en})
setDefaultLanguage(y)
class App extends Component {
constructor(props) {
    super(props);
     this.timeout = null;
    this.state = {addClassid: false, addClassen: false, land: false}
}

	static propTypes = {
    delay:        PropTypes.number,
    onDelayStart: PropTypes.func,
    onDelayEnd:   PropTypes.func
  };

  static defaultProps = {
    delay:        0,
    onDelayStart: () => {},
    onDelayEnd:   () => {}
  };

  static contextTypes = Link.contextTypes;

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

	
changeLang (lang) {
    setLanguage(lang)
    localStorage.setItem('myData', lang);
	var ty = localStorage.getItem('myData')
	$('.lnka').css({'left': '150px'})
	$('.lnka').html('<div class="lka" style="left: 150px;">Coba aplikasi android</div>')
    $('.lk > a').html('Kunjungi')
    $('.jelong').html('Kami di sini')
    this.setState({addClassid: !this.state.addClassid,addClassn: false});
}
changeLangs (lang) {
    setLanguage(lang)
    localStorage.setItem('myData', lang);
		$('.lnka').css({'left': '100px'})
 		$('.lnka').html('<div class="lka">Try android app</div>')
		$('.lk > a').html('Visit')
        $('.jelong').html('We are here')

    this.setState({addClassen: !this.state.addClassen,addClassid: false});
}
rotate = () =>{
		return(<DeviceOrientation>
    {
		({ absolute, alpha, beta, gamma }) => {
			if(Math.abs(gamma) === '-90' && Math.abs(beta) === '90' && alpha ==='0') {
				return (
				  <div id="kum" className="clox_tray">
					<img src="https://res.cloudinary.com/dsl4hppsk/image/upload/v1533604113/orientation.png" className="po" alt=""/>
					<span className="rotator">{this.props.t('home.rotator')}</span>
					</div>
				)
			}else if(Math.abs(gamma) === '90' && Math.abs(beta) === '90' && alpha === '0') {
					return (
					  <div d="kum" className="clox_tray"><img src="https://res.cloudinary.com/dsl4hppsk/image/upload/v1533604113/orientation.png" alt="" className="po"/><span className="rotator">{this.props.t('home.rotator')}</span>
</div>
				)
			} else {
				return (
			 <span></span>
			)
		}
	}
}
  </DeviceOrientation>
)
	}
 readDeviceOrientation = () =>{
    if (Math.abs(window.orientation) === 90) {
        // Landscape
		 this.setState({
         land: true
     })		
		$('body').css({'position': 'fixed'})
    } else {
    	// Portrait
    		 this.setState({
         land: false
     })
				$('body').css({'position': 'relative'})

    }
}
rots = () => {
window.onorientationchange = this.readDeviceOrientation;
}
handleClick = (e) => {
    const { replace, to, delay, onDelayStart, onDelayEnd } = this.props;
    const { history } = this.context.router;

    onDelayStart(e, to);
    if (e.defaultPrevented) {
      return;
    }
    e.preventDefault();

    this.timeout = setTimeout(() => {
      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
      onDelayEnd(e, to);
    }, delay);
  };

home = () => {
	$('.ble').show()
	$('.ble').html('<span class="blk"><div class="spinners"></div></span>')
	$('.lfts').hide()
	$('#nex').hide()
	$('.adds').hide()
	$('#pre').hide()
	 setTimeout(() => {
	history.push('/home')
		 $('.ble').hide()
	 }, 1500)
}
stuff = () => {
	$('.ble').show()
	$('.ble').html('<span class="blk"><div class="spinners"></div></span>')
		$('.adds').hide()
	 setTimeout(() => {
	history.push('/stuff')
		  $('.ble').hide()
		  $('.ble').html('')
	 }, 1500)
}
kontak = () => {
	$('.ble').show()
	$('.ble').html('<span class="blk"><div class="spinners"></div></span>')
	$('.lfts').hide()
	$('#nex').hide()
	$('#pre').hide()
		$('.adds').hide()
	 setTimeout(() => {
	history.push('/contact')
		   $('.ble').hide()
		  $('.ble').html('')
	 }, 1500)
}


render() {	

	const props = Object.assign({}, this.props);
    delete props.delay;
    delete props.onDelayStart;
    delete props.onDelayEnd;
	$(document).on("click", ".opens", function (e) {
	$(this).removeClass('opens')
	$(this).addClass('closes')
	$(".fg").show()
	$('.lgsc').addClass('open')
 
	$('.mnu-btn-icon').html(' <div id="mnu-icon" class="closes"> <div class="first-lines"></div><div class="second-lines"></div></div>')
})
	$(document).on("click", ".closes", function (e) {
	$(this).removeClass('closes')
	$(this).addClass('opens')
	$(".fg").hide()
	 
	$('.lgsc').removeClass('open')
	$('.mnu-btn-icon').html('<div id="mnu-icon" class="opens"><div class="first-line"></div><div class="second-line"></div></div>')

})
	$(document).on("click", "#homes", function (e) {
	$(this).removeClass('closes')
	$(this).addClass('opens')
	$(".fg").hide()
	$('.lgsc').removeClass('open')
	$('.mnu-btn-icon').html('<div id="mnu-icon" class="opens"><div class="first-line"></div><div class="second-line"></div></div>')

})
	
		$(document).on("click", "#stuffs", function (e) {
	 
$(this).removeClass('closes')
	$(this).addClass('opens')
	$(".fg").hide()
	 
	$('.lgsc').removeClass('open')
	$('.mnu-btn-icon').html('<div id="mnu-icon" class="opens"><div class="first-line"></div><div class="second-line"></div></div>')

})
	
		$(document).on("click", "#kontaks", function (e) {
	 
$(this).removeClass('closes')
	$(this).addClass('opens')
	$(".fg").hide()
	 
	$('.lgsc').removeClass('open')
	$('.mnu-btn-icon').html('<div id="mnu-icon" class="opens"><div class="first-line"></div><div class="second-line"></div></div>')

})
	
	var width;
	width = $(window).width();

	$(window).on('resize', function(){
   if($(this).width() >= 980){
    width = $(this).width();
    $(".fg").fadeOut('fast')
	$('.lgsc').removeClass('open')
	$('.mnu-btn-icon').html('<div id="mnu-icon" class="opens"><div class="first-line"></div><div class="second-line"></div></div>')
   }
});
 	var stuff;
  
	$(window).on('hashchange',function(){ 
    var hash = this.location.hash
    switch (hash) {
    case '':
    	$('#home').addClass('bl')
			    	$('#homes').addClass('all')
$('#stuffs').removeClass('all')
			$('#kontaks').removeClass('all')
		$('#stuff').removeClass('bl')
		$('#kontak').removeClass('bl')
        break;
    case '#/home':
        $('#home').addClass('bl')
				    	$('#homes').addClass('all')
$('#stuffs').removeClass('all')
			$('#kontaks').removeClass('all')
		$('#stuff').removeClass('bl')
		$('#kontak').removeClass('bl')
        break;
    case '#/stuff':
        $('#stuff').addClass('bl')
				    	$('#homes').removeClass('all')
$('#stuffs').addClass('all')
			$('#kontaks').removeClass('all')
		$('#home').removeClass('bl')
		$('#kontak').removeClass('bl')
        break;
    case '#/contact':
        $('#kontak').addClass('bl')
			$('#homes').removeClass('all')
$('#stuffs').removeClass('all')
			$('#kontaks').addClass('all')
		$('#home').removeClass('bl')
		$('#stuff').removeClass('bl')
        break;
    default:
      
    }
});
 /*const homeClass = this.props.history.location.pathname === "/home" ? "bl" : "";
const stuff =this.props.history.location.pathname.match(/^\/stuff/) ? "bl" : "";
const kontak = this.props.history.location.pathname.match(/^\/contact/) ? "bl" : "";*/
 
let  b='idl' ,x='enl', com;
const isLoggedIn = this.state.land;
    if(this.state.addClassid) {
      b = 'idl';
      x = 'enl';
}
    if(this.state.addClassen) {
      x = 'enl';
      b = 'idl';
}

	if(isLoggedIn){
		com =  <div id="kum" className="clox_tray">
					<img src="https://res.cloudinary.com/dsl4hppsk/image/upload/v1533604113/orientation.png" className="po" alt=""/>
					<span className="rotator">{this.props.t('home.rotator')}</span>
					</div>
	}else{
		com = ''
	}
	


    return (
    <HashRouter>
	<div className="App">
		 
		<div className="bone">
<span className="gris"></span>
		
		</div>
				<div className="btwo">
 
		</div>
	<div className="btree"></div>
 			<div className="fg">
		<div className="mbg">MENU</div>
		<div className='wrm'><div id='homes' className='dzz'><span onClick={this.home}  className="strike">HOME</span></div><div id='stuffs' className='dzz'><span onClick={this.stuff} className="strike" >STUFF</span></div><div id='kontaks' className='dzz'><span  onClick={this.kontak}  className="strike" >CONTACT</span></div></div>
 		
		</div>

		{this.rots()}
             {com}
         <header className="App-header">
        <div className="App-title">Techno Graph.</div>
        <div className="boxlang">
        <span onClick={() => this.changeLang('id')} className={b}>Id</span> <span onClick={() => this.changeLangs('en')} className={x}>En</span></div>
        </header>
        <div className="wrpskonten">
			                     <div className="ble"></div> 

         <Switch>
			<Route exact path="/" component={home}/>
            <Route exact path="/home" component={home}/>
            <Route exact path="/stuff" component={stuffi}/>
            <Route exact path="/contact" component={contact}/>
 		    <Route component={notfound} />
           </Switch>
        </div>
		
		<ul className="pull-right section-nav">
                            <li id="home"><span onClick={this.home} className="strike"> <span>01</span></span></li>
                            <li id="stuff"><span onClick={this.stuff} className="strike"><span>02</span></span></li>
                            <li id="kontak"><span onClick={this.kontak} className="strike"><span>03</span></span></li>
        </ul>
<div className="bft">
	
	
	
			<span className="addsa">Cimanglid Blok Purnama 
		<span className="miadds">No.19
RT.6/RW.1, Sukamantri
Tamansari
Bogor
Jawa Barat 16610</span>
		
		<span className="pho"></span>
				<span className="mlrs">hi@techno-graph.com</span>

		</span>
	
	
	</div>
       <div className="lgsc">
    <div className="textbw">
        <span className="bo">Techno Graph</span>
        <span className="boc">system and fine</span>
        <span className="bocx">{this.props.t('home.locat')}</span>
    </div>
         </div>
<div className="mnu-btn-icon">
                                <div id="mnu-icon" className="opens">
                                    <div className="first-line"></div>
                                    <div className="second-line"></div>
                                </div>
                            </div>
                                
      </div>
    </HashRouter>
    );
  }
}

export default translate(App);

$(document).ready(function() {
	// 头部头像点击
	$(".header-img").click(function() {
		$(".header-img img").attr('src', 'images/header_img.png');
	});
	//头部按钮点击事件
	$(".header_btn").click(function(){
		$('html,body').animate({scrollTop:$('.tab1').offset().top}, 1000);
	});
	// 实例化运动插件
	new WOW().init();
	// 背景音乐按钮
	$(".audio_btn").click(function(){
		var audio = $("#bgAudio")[0]; 
		if(audio.paused){
			audio.play();
			$(".audio_btn img").attr('src', 'images/pause.png');
		}
		else{
			audio.pause();
			$(".audio_btn img").attr('src', 'images/star.png');
		}
	});
	
    // 粒子插件初始化

	 $(".tab2").jParticle({
				  particlesNumber: 20,
				  linkDist: 50,
				  createLinkDist: 150,
				  disableLinks: false,
				  disableMouse: false,
				  background: "rgb(0,0,0,0,0)",
				  color: "yellow",
				  width: null,
				  height: null,
				  linksWidth: 1,
				  particle: {
				  color: "green",
				  minSize: 2,
				  maxSize: 4,
				  speed: 50
				  }
		}); 



















	  
  });
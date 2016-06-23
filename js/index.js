$(document).ready(function(){
    //首页按钮和盒子的定位
     $(".div1").css("height",$("#bgvid").height()+"px");
     $(".scroll-down,.scroll-down2").css("left",$("#bgvid").width()/2+"px");
     //首页翻页按钮的定位
     $("#scroll").click(function(){$('html,body').animate({scrollTop:$('#tab1').offset().top}, 1000);});
     $("#scroll1").click(function(){$('html,body').animate({scrollTop:$('#tab2').offset().top}, 1000);});
     $("#scroll2").click(function(){$('html,body').animate({scrollTop:$('#tab3').offset().top}, 1000);});
     $("#scroll3").click(function(){$('html,body').animate({scrollTop:$('#tab4').offset().top}, 1000);});
     $("#scroll4").click(function(){$('html,body').animate({scrollTop:$('#tab5').offset().top}, 1000);});
     $("#scroll5").click(function(){$('html,body').animate({scrollTop:$('#tab6').offset().top}, 1000);});
     //视差滚动插件的激活
     $(".parallux").parallux();



    //判断cookie是否存在
    $('#member, #logout').hide();
    if ($.cookie('user')) {
        $('#member, #logout').show();
        $('#sign_a, #login_a').hide();
        $('#member').html($.cookie('user'));
    } else {
        $('#member, #logout').hide();
        $('#sign_a, #login_a').show();
    }
    $('#logout').click(function () {
        $.removeCookie('user');
        $('#member, #logout').hide();
        $('#sign_a, #login_a').show();
    });
    
     //登录表单验证
     $('#loginForm').bootstrapValidator({
      message: '此表单没有验证',
        // feedbackIcons: {
        //     valid: 'glyphicon glyphicon-ok',
        //     invalid: 'glyphicon glyphicon-remove',
        //     validating: 'glyphicon glyphicon-refresh'
        // },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    remote: {
                        url: '../php/login.php',
                        type: 'POST',
                        data : {
                            username: function () {
                            return $('#login_name').val();
                              }
                          },
                        message: '账号或密码错误'
                     }, 
                }
            },

        }

    }).on('success.form.bv', function(e) {   //表单验证成功后执行
           e.preventDefault();
           $.ajax({
           type: "POST",
           url: "../php/login.php",
           data:$('#loginForm').serialize(),
           success: function(responseText, statusText){
             $("#loading").modal('show');
             $("#loading .modal-body").html("正在登录，请稍后.....");
             $("#loading .modal-body").addClass("bg-success");
             $.cookie('user', $('#login_name').val());
             if ($('#expires').is(':checked')) {
                    $.cookie('user', $('#login_name').val(), {
                     expires : 7,
                    });
                } else {
                    $.cookie('user', $('#login_name').val());
                }
             // alert( "注册成功");
             setTimeout(function () {
                    $('#loading').modal('hide');
                    $('#loginModal').modal('hide');
                    $('#loginForm').bootstrapValidator('resetForm', true);
                    $('#login_a, #sign_a').hide();
                    $('#member, #logout').show();
                    $('#member').html($.cookie('user'));
                }, 1000);
    
         
       }
          });
      });
 


    //注册表单验证
     $('#signForm').bootstrapValidator({
        message: '此表单没有验证',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 12,
                        message: '用户名长度必须在2~12之间'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
                        message: '用户名只能由中文，字母和数字组合'
                    },
                    remote: {
                        url: '../php/is_user.php',
                        type: 'POST',
                        message: '此用户名已被注册',
                     },
                   
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 16,
                        message: '密码长度必须在6~16之间'
                    },
                    different: {
                        field: 'username',
                        message: '用户名和密码不能相同'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        message: '确认密码不能为空'
                    },
                    identical: {
                        field: 'password',
                        message: '两次输入的密码不同'
                    }

                }
            },
              email: {
                validators: {
                     notEmpty: {
                        message: '邮箱不能为空'
                    },
                    emailAddress: {
                        message: '请输入正确的邮箱'
                    }
                }
            },
          
        }

    }).on('success.form.bv', function(e) {   //表单验证成功后执行
            e.preventDefault();
           $.ajax({
           type: "POST",
           url: "../php/sign.php",
           data:$('#signForm').serialize(),
           beforeSend: function(XHR){
            $("#loading").modal('show');
           },
           success: function(msg){
             $("#signBtn").removeAttr("disabled");
              $("#loading .modal-body").html("注册成功,正在登录.....");
             $("#loading .modal-body").addClass("bg-success");
              $.cookie('user', $('#sign_name').val());
             // alert( "注册成功");
             setTimeout(function () {
                    $('#loading').modal('hide');
                    $('#signModal').modal('hide');
                    $('#signForm').bootstrapValidator('resetForm', true);
                    $('#login_a, #sign_a').hide();
                    $('#member, #logout').show();
                    $('#member').html($.cookie('user'));
                }, 1000);
           }
          });
      });

       //轮播图自动播放
        $("#myCarousel").carousel({
          //设置4秒播放
             interval:4000,
        });
    
  
    // $('#masonry').imagesLoaded( function(){
        $('#masonry').masonry({
            itemSelector : '.box',
            gutterWidth : 200,
            isAnimated: true,
        });
    // });
          







   });
    //设置首页阴影的高度
     $(window).resize(function() {
      $(".div1").css("height",$("#bgvid").height()+"px");
       $(".scroll-down,.scroll-down2").css("left",$("#bgvid").width()/2+"px");
    });
    //动画插件的激活
     $(".block").smoove({
        offset:"40%",
     });
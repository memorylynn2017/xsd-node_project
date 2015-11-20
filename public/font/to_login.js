$(function(){
	console.log('登录页面....');
	var email_flag,pass_flag;
	$('input').attr('value','');
	$('#LoginForm_email').blur(function(){
		var filter_email  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(filter_email.test($(this).val())){
			email_flag=true;
		}else{
			$(this).siblings('span').html('您输入的邮箱不符合格式');
			email_flag=false;
		}
	});
	$('#LoginForm_password').blur(function(){
		var filter_password  = /^\d{6}$/;
		if(filter_password.test($(this).val())){
			pass_flag=true;
		}else{
			$(this).siblings('span').html('密码为6位数字');
			pass_flag=false;
		}
	});
	$('.login').on('click',function(){
		if(email_flag&&pass_flag){
			$('#leftForm').submit();
		}
	});
});
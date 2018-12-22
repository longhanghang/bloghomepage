$(function(){
    var index = 0;
		var head_footer = {};
		head_footer.allViewSize = [{ id: '#blog' }, { id: '#about' }, { id: '#contact' }, { id: '#sports' }];
		head_footer.reGetAllViewSize = function () {
			for (var i = 0; i < head_footer.allViewSize.length; i++) {
				var obj = head_footer.allViewSize[i];
				obj.min = $(obj.id).position().top;
				obj.max = $(obj.id).position().top + $(obj.id).height();
			}
		};

		$("a").click(function () {
			if ($(this).attr("href").indexOf("#") != -1) {
				var targetId = $(this).attr("href");
				index = 1;
				$("html,body").animate({ scrollTop: $("" + targetId).offset().top - 50 }, 800);
			}
		})
		head_footer.reGetAllViewSize();
		$(window).scroll(function () {
			console.log(index)
			if (index == 1) {
				index = 0;
				return;
			}
			var wst = $(window).scrollTop() + 100;
			console.log(wst)
			for (var i = 0; i < head_footer.allViewSize.length; i++) {
				var obj = head_footer.allViewSize[i];
				if (wst >= obj.min && wst < obj.max) {

					var allA = $('.navbar-nav > li');
					if ($(allA[i]).hasClass("active")) {
						return;
					}

					//开始判断选中
					for (var j = 0; j < allA.length; j++) {
						$(allA[j]).removeClass('active');
					}
					$(allA[i]).addClass('active');
				}
			}
		})
		new Valine({
			// AV 对象来自上面引入av-min.js(老司机们不要开车➳♡゛扎心了老铁)
			av: AV,
			el: '.comment', // 
			app_id: 'AOCxVX13nnXd3Y3CQun6V0wX-gzGzoHsz', // 这里填写上面得到的APP ID
			app_key: 'o50wncrGRq2a9yeft8MJf4UN', // 这里填写上面得到的APP KEY
			placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!' // [v1.0.7 new]留言框占位提示文字
		});
})
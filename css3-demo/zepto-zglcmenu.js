(function(){

	/*红包遮罩*/
	var hongbao = {
		/*tmpl*/
		_html :	'<style>'+
				  '.hongbaopop {'+
				    'position: fixed;'+
				    'left: 0;'+
				    'bottom: 0;'+
				    'width: 100%;'+
				    'height: 100%;'+
				    'background-color: rgba(0,0,0,0.8);'+
				    'z-index: 99999999;'+
				    'display: none;'+
				    '-webkit-transition: 0.3s;'+
				'}'+
				'</style>'+

		       '<div class="hongbaopop">'+
		        '<div style="position: absolute;z-index: 91;width: 180px;right: 0;">'+
		          '<img src="data:image/png;base64,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" style="width:180px;">'+
		        '</div>'+
		        '<div style="postion:absolute;z-index:90;width:300px;height:178px;margin:0 auto;margin-top:150px;color:white;">'+

		          '<table width="100%">'+
		            '<tbody><tr height="120px">'+
		              '<td width="60px">'+
		                '<img src="data:image/png;base64,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" width="60px">'+
		              '</td>'+
		              '<td width="250px" style="padding-left:20px;">'+
		               ' <h3>特权本金</h3>'+
		                '<p>您好友通过您分享的链接注册成功，您可得<span style="color:yellow;font-weight:bold;">5000</span>元特权本金。</p>'+
		              '</td>'+
		            '</tr>'+
		            '<tr>'+
		              '<td>'+
		                '<img src="data:image/png;base64,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" width="60px">'+
		              '</td>'+
		              '<td style="padding-left:20px;">'+
		                '<h3>现金红包</h3>'+
		                '<p>您好友通过您的链接投资，您有机会可得<span style="color:yellow;font-weight:bold;">1~200</span>元随机现金红包。</p>'+
		             ' </td>'+
		            '</tr>'+
		          '</tbody></table>'+
		        '</div>'+
		      '</div>',

	    /*事件*/
	    bindEvent:function(){
			var $hbPop = $('.hongbaopop');
			/*点击弹窗自动隐藏*/
			$hbPop.on('touchend',function(){
				$hbPop.css({
						opacity:0,
				});
				setTimeout(function(){
					$hbPop.hide();
				},300);
			})
	    },


	    init:function(){
	    	$('body').append(this._html);
	    	this.bindEvent();
	    },

	    show:function(){
	    	if($('.hongbaopop').length==0){this.init();}
			$('.hongbaopop').show();
			setTimeout(function(){
				$('.hongbaopop').css({
					opacity:1,
				});
			},100);
	    }
	}
	/*红包-调用方法*/
	//hongbao.show();		



/*拖拽菜单*/
var dragmenu = {
		_html : '<style type="text/css">'+
				'.dragc-btn {'+
					'width:50px;'+
					'height:50px;'+
					'position:fixed;'+
					'top:0;'+
					'left:0;'+
					'z-index:88888;'+
					'display: none;'+
				'}'+

				'.dragc-btn:before{'+
					'content: "";'+
					'background: url(data:image/png;base64,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) no-repeat;'+
					'background-size: 50px;'+
					'width: 50px;height: 50px;'+
					'-webkit-border-radius:99px;'+
					'border:2px solid #fff;'+
					'display: block;'+
					'-webkit-box-shadow:0 3px 3px rgba(0, 0, 0, .5);'+
				'}'+

				'.dragc-mask{'+
					'position:fixed;'+
					'top:0;'+
					'left:0;'+
					'width:100%;'+
					'height:100%;'+
					'z-index:80000;'+
					'display: none;'+
				'}'+
				'.dragc-pop {'+
					// 'width:240px;'+
					// 'height:240px;'+
					'width:50px;'+
					'height:50px;'+
					'overflow: hidden;'+
					'position:fixed;'+
					// 'top:50%;'+
					// 'left:50%;'+
					'z-index:88880;'+
					'background-color:rgba(0,0,0,.7);'+
					'border-radius:10px;'+
					'display:none;'+
					'-webkit-transition:0.2s ease;'+
				'}'+
				'.dragc-pop .link{'+
					'position: absolute;'+
					'display:block;'+
					'width: 50px;'+
					'height: 65px;'+
					'text-align: center;'+
					'font-size: 12px;'+
					'color: #fff;'+
					'text-decoration: none;'+
					'display:none;'+
				'}'+
				'.dragc-pop .link:before{'+
					'content: "";'+
					'width: 50px;height: 50px;'+
					'-webkit-border-radius:99px;'+
					'border:2px solid #fff;'+
					'display: block;'+
					'-webkit-box-shadow:0 3px 3px rgba(0, 0, 0, .5);'+
					'margin-bottom: 5px;'+
				'}'+
				'.dragc-pop .link:nth-child(1){'+
					'top:15px;'+
					'left:50%;'+
					'-webkit-transform: translate(-50%,0);'+
				'}'+
				'.dragc-pop .link:nth-child(2){'+
					'top:70px;'+
					'right:20px;'+
				'}'+

				'.dragc-pop .link:nth-child(3){'+
					'bottom:20px;'+
					'left:54px;'+
				'}'+

				'.dragc-pop .link:nth-child(4){'+
					'bottom:20px;'+
					'right:54px;'+
				'}'+

				'.dragc-pop .link:nth-child(5){'+
					'top:70px;'+
					'left:20px;'+
				'}'+
				'.dragc-pop .link:nth-child(1):before{'+
					'background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAwFBMVEX///9ERERiYmJeXl5lZWVVVVX4+PiRkZG+vr6tra3s7OxJSUlqamri4uJOTk6oqKi8vLxYWFh0dHR3d3eJiYmSkpKZmZmdnZ3f399QUFBTU1N6enp+fn6Ojo6xsbG2trbFxcXV1dX8/PxFRUVubm54eHiGhoaWlpagoKCurq6zs7PBwcHJycnR0dHa2trj4+Pz8/P19fVcXFxgYGBnZ2dwcHCfn5+lpaW5ubnOzs7h4eHk5OTo6Ojq6ur5+fn6+votYiteAAABlUlEQVRo3u3X13KCUBCAYRc0GJrSFDv2EqMxvef93yqOToSoAU7ZXO1/JZ7RbxjllEKBoiiKoiiKYuxmqip1ZGNVgm1FC9N4hn3GEs+ow6EKEjFoQSL/50cKLcsK3yUZoQq/MvXtm2vP3l8pPRlGZMBRjX5hY8eXV+LGE5zppZy4UIWNCZzNSbxufokRHyZk17wQMq7tHAaUhJAuADoSADqycQEdWTmAjlQB0JFHQEcGbRYDHB7DUpgMsHV2Y2kAY80+q1EBjhinex+4qjEQ+gg4G3/mNfoN4O42zGcsQKRhrhWyDoJV5M4kfxRlIqY44mYiRXHkIROpiSPz7GlxJGq08vy9etOOpmlBwPi0GFqw/VinVmWaWhhnYYVryVLZkHt5iNGazbyzSFEa0t6tTGsXE2mnPLKykHivoBtoiB8PemhIN22uloVEabtwWUg5Hpz/B3JJCCFykWraXplvPXHSEFl3Mj75nrfE2f5kUONCXodpe/aJhDPQ7qzlm6pyyFscnWDcu8OYanY4DYqiKIqiKEpi3/qKGcVPip3vAAAAAElFTkSuQmCC) no-repeat;'+
					'background-size: 50px;'+
				'}'+
				'.dragc-pop .link:nth-child(2):before{'+
					'background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAwFBMVEX///9ERER2dnZISEhNTU1tbW2mpqZSUlJkZGRpaWlWVlZxcXF0dHR8fHyioqLBwcHS0tLp6en6+vpFRUWKiorX19fe3t7w8PBLS0taWlp5eXl/f3+BgYH4+Pj8/PxhYWGGhoaUlJSrq6uurq61tbW2trbJycnu7u7z8/P+/v6NjY2QkJCoqKiysrK5ubnFxcXMzMzOzs7a2tri4uLm5uZfX1+SkpKampqenp69vb3s7Oz29vaIiIjk5OTq6ur09PS8fy6iAAACP0lEQVRo3u2Y6ZaaMBSASdh3RURw37UuMzo6e9t5/7dqBcbClBmyoKfn9H6/MAY+yHJzE0EAAAAAAAAA/kO+LeY3647dbmMTf9/e1nvVG3YPkYiyNFTsu1UqDqMIFTJw6hUpXkboc8RVje/pTcU2dasjfXiu5j9OJoovh+lvucmuuMNFby5Pzw3Umllp4ZTVMSlsHT0eBedKez0pHvaZHEpxF0jYtrRItje716SekzbhgcFRQ2Wo9iQ41bxNRzTDcN6dmsYXS0TyuPfnfQKGT3EDYdwo/57x+VsMpm4pb7IT+IfQTq66DI5+Mj8ky5K+tDSGWnq1pZes4xtXrd8TYoXIuKN1BNkm6JJJRKzQzf77+LZj8uOIiBkob4SGRRPnR4xBbkGqQqIY6e8TRPKSEk9CNJTHMk/OVJ8lZVMqB5JLJbNcV8Yd2RTpJPtSSSd/w8h1H+gU4XN5j9iIB0NWWgTd3uZxhC9kwxfzSBqtK0jCxRUkqncFSUQYUiweiUko6fJIhoSSm2tIKINhHoV0JXE4JHXKxZ0FnXxRdJklG4ql9/HirVUQ7knR6HIVk0lCmRL1tUuO33d62sVCStYyoHSIS4Zc+JUuUopzth0dzdTHR9Z9Y+2e1DHmOYiY6UTJXCDwsSdYXw4CN9kcybA7ZiR+2OaJC37Juf9DJzjlCf3lz9qzn8nzDX6HUE+f5efCnzdfq+kfT1Wc4MQLsvr3Rn3pxJpBNedEc6w9FaaGy41ubqs/XQMAAAAAAAD+YX4BpSgjr65Bvj8AAAAASUVORK5CYII=) no-repeat;'+
					'background-size: 50px;'+
				'}'+
				'.dragc-pop .link:nth-child(3):before{'+
					'background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAwFBMVEX///9ERERISEhycnLq6uphYWFNTU2SkpL09PTg4OBcXFympqba2tru7u5LS0tSUlJWVlZ6enp+fn6VlZWhoaG8vLz7+/tsbGx1dXWGhobJycmCgoKKioqQkJCurq7Hx8fR0dHU1NT+/v5oaGiNjY2Xl5ednZ2xsbG2trbn5+fw8PD8/PxZWVlmZmZvb2+bm5uqqqq/v7/Dw8PPz8/y8vL39/f4+PhGRka5ubnBwcHX19fd3d3e3t7s7OyOjo7Y2NiUSZ+9AAAC+klEQVRo3u2ZaXPaMBCGLYhPMAZzYwhQbsIRbmhI+///VQenSArIAq3kfuj4/WTPgB+PpN19d61piRIlSpQoUaJE/5G29tgsNuwfMSI6BQ+F0s1pXIwBIvLWsSA+5uib6jEwKga6UVM9pI7u1FDNaN8zkGGpZew9BgT11UJ+shhorhZSZkJyn0ohfSYEdZRCFmxISSkkzYZklEJabEj3H2x8Su3Gd5mQntojbBksiK84rQxZkKzqJMzIK+rT8P3Wp7bqc70eb5B8yc7HXxk1za3SjGJcTsInjNf4PNG7H8aLU9/Ea++ypddpjI93s93Vsmi2BqZZav8+75T7oc04qN5kllnaXJ+VATqZxQxFSA9GE/klKjfz6IHmg46MAbeWBnpK+hjO0NHTWiquuWwBPauVE4EAU5ktwkA6bPMbQhBjD0tUQpCUK1nW9ciTnCdR9AGCFK9/r1mRAdkidn8FghSIYUhFnilyBGEVxsGvGw3xSekHlfw3j7xjJKRG/L4Jyo05EswcSO16uZDr4Lo8CG6PdDk3Z0dD0iSanDcAZIQ7w0qFA8HvknsBQDL4FTWLA1nja4iDaZLFdjmQLL4+ASBV8iAehHQuRwBkTgLgkwPR8hKtcMUhofzCgzgSfZeNHzziQwrUtag2VHrlQnCyrsrMns58SAnXFvHJ1BgH2ZYPeZcoW3gVvD0f0paYT/iUDeFCbAnrhQ9NoPEh7gFeG3tUc8iF7AxSQQU1NSiXy4WQ/CNsIslKjx5BgutNQbg1pEeAfEgf7FTbVF18AMEj/MMUWrLQ5BHkSP9USCZOFvtHkA54NNWkH8OHkO0rQ2PRfwiZ4LshNKv84kJqF6vpQGsjTuDtC+QQBQlrSEAdRNBks1r5tuq3cujAFf8IkQ3tejocAZ4iIbMw/hozUMBftDKH6xszeSfva4yzO9Z6Q4hNpfQa3SnKT1buwx85esrQc3FM66kPjKbmWlPqRJ+UQQIaQvdg4kH+RJX8O0Sl7sfKIPrNt5+C4AT6DwvBLzyqF/BJAAAAAElFTkSuQmCC) no-repeat;'+
					'background-size: 50px;'+
				'}'+
				'.dragc-pop .link:nth-child(4):before{'+
					'background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAwFBMVEX///9ERESVlZWWlpZdXV1SUlJISEj9/f1FRUVVVVX6+vp5eXl9fX3ExMSysrLy8vJLS0tubm7MzMze3t5lZWVycnKCgoKJiYn19fVNTU2MjIy4uLjm5ubs7Ozv7+/4+PhpaWmGhoadnZ2qqqq7u7u+vr7BwcHW1tZQUFBZWVmRkZGYmJigoKDS0tKbm5ujo6PJycnPz8/a2trj4+Po6OilpaWurq7Gxsbq6up1dXW1tbXc3NywsLDU1NTu7u709PTCpaV6AAAEDUlEQVRo3u2Z2WKqMBCGEyqbiIiIu3WpWpeq1dr9tH3/tzpIIZkktlBN7pybWpR8MJn8M5MgdLGLXexiF7vYxS6myIqrznDYWRVVMm7mODb7RhniIcTEwgc1jGsDA6tcK4GEmLFQBaOMOSvLZ5g6D5mZ0iFdLFhXOmQiQibSIUsRspYOuRMhG+mQqgipSoe8iJCe/Bie84y5/BBGTzzkn4olX2AZBSXaxU39Vo0MDyGj8WtuOyOrrSlj+eOPgudlSbfro/tTM045U4F7dfog7f5plKarzWaa2/zp+06LCXL3JIbp7fv9vWcep5glPszbf0y+7qbkH3IKQhbGul/auEICboiqMMoN8KaLWiW9rTMmaX6wmHp8jOuG9f2tZcRpLsj3CmWHcXSZWfotp/yZ/LA/O1x47fe0w99hr1jKvWYnLV57t9yFVodxVjTZflSZmWj7/Up32YxbwcvBXrh0G8966tAANa3o0qeVW34cYcSmJ1yKxwnAf2Mtfp3YDC+z9uWdhS2TPDK1g8NIPGA/WoTmMH9uWx176ppw0Y5+qiWfdcffRSs/dFLVzqybH4XxQuoIYDe0wKyT6jy5UMo7JVNSrNTBmlu46dNWiug1+TioVqNACKrVes712EzcP6N58RG83ojO9hKlYxq6/opQW9fT+vw5Z54qoSugv0SLrxAiaoWmyQcnvTmZJOslAzIiLk+nFd8jtAUQUsTcoRYHWdCg+NXSKX6nkC4oiyMIahN6jbgrjN2VuHqYJYwGeRgNLC2vAiCeIcZaDZEZwpWs6sylEaXR+xEaAMix+rUwdf3cVfkVnWwNBr0DIeYM/2KZi4Q88QOFxEVKG0LEFgw6LjPN94COalAjnhgIsn9k5GguJuDpNejiMQuZ0lGdDej6ah858tUCaKxGghmoegKhihkpfLMcHiZp7o86ubY4EjdYewCJi5xnDpJkNmOcRP5utctbQjZgStKAqJs2B/kO40Hw9xrrg6mdNCofaIN5CNppjc4phVyByeAEEtVdWISc24gOEQsZjaRBiAi2ihwE2LmQdLHjKVIGIevLQeogqQRankJIyHe4KiBrkD2UQb7iVWJ0lUKQV7dtJxDzF2PL87eAGY07+iaayh4e8xWpJPOPQQZqN1bUbK+kEKtQmBcMNZB+mrqtW9PcWWkr0pS7YWsdK1Ox3A170nFZUdVJO9OVmr0u4xqeDMjd83LJnkwRhporFfJGOlvm/EHumcAaHyu4JYgXtDajJKSHW0iFNJitx8WJ21kZVgLNL+3Qc3QfJxUvb0wY1KQeA9n4WOuQ3dmeJF1sVY9tmaea1xWmMA6UnAOSUY14e6FHdOVdIuQeM+L+1QL7E9KMnJrp8ZlJUVchXmMu4ZImcXzKaP8B8LU7PTKZlA8AAAAASUVORK5CYII=) no-repeat;'+
					'background-size: 50px;'+
				'}'+
				'.dragc-pop .link:nth-child(5):before{'+
					'background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAwFBMVEX///9EREROTk5SUlLi4uL4+PhsbGxdXV1mZma7u7uQkJC/v796enrn5+fd3d2YmJihoaFISEjS0tLw8PD7+/tTU1NXV1eVlZXOzs7s7OxMTExxcXH19fX9/f1hYWF/f3+Dg4OdnZ3Hx8fV1dXl5eXp6en5+flZWVlpaWl1dXWbm5usrKywsLC3t7e4uLjExMTZ2dlFRUVvb2+JiYmoqKjKysrc3Nzq6uru7u5QUFC8vLzBwcHMzMze3t7g4ODz8/PDo7MoAAAB9klEQVRo3u2YaXOCMBBAkdZi1RZBxIPLq963Vu39//9VUWsNCNFsMo7t7PuYZHiQ7G5CJAlBEARBEAT595RlKOb5kqcEmEtIZIbpKtywUyhoTBInCaDV6jBJgMwuIbk7X3ILwmaTaKCwGrFJpiDJkE0igyT3YEklRaUtRFKlj6wLkaj0kU0hksaJoYoASSrYsayP9Xyg5VWA5JMszL3ta1e8OjnW4paQjxscUrRqH5qNDp/EmhBtRTIlFHLOVA0q0eY1nWzqBxPPJftWg7QLkpjxobqlF+zPgSQFI9DiHRWRYJCpMEmLbMgfV6q+cEnmWNLllWwekpTiQusnwHglVTW3cMiGUm5HbW7uJW1eCQWjL+pLqJQErQmd3QIteCXlWjqaov57gl3zSpT4jbzpHy43pa3InfGU08K7v/ZmaNnzw2KKXVKJl/jzZbwkzDIxuiaDqjDlS0qbGmMRhcuxgPuJF+to+49fj8mxXejOKD1nohnb4ZFv4D2eARcsaVSz0XijE+cuf8PX+KPrIzSvIYly/o/plBpdRvZuz0wJSZa63hCSJ0nKqZ6BBD0Z5fifIAbUWIflx3CZ8hPEdOnxEM1q02lPHiP5usLbm0xKicbtOcIklIWfCJNo1Dz5SxLKdDWESQZKzF2TmTbwUhNBEARBEOR6+QaOCylAIH+frgAAAABJRU5ErkJggg==) no-repeat;'+
					'background-size: 50px;'+
				'}'+

				'</style>'+

				'<div class="dragc-btn"></div>'+
				'<div class="dragc-mask"></div>'+
				'<div class="dragc-pop">'+
					'<a href="./userProfile" class="link">回到主页</a>'+
					'<a href="#" class="link">我要投资</a>'+
					'<a href="./usersettings" class="link">个人中心</a>'+
					'<a href="#" class="link">我要取钱</a>'+
					// '<a href="javascript:;" id="btn-hongbaopop" class="link">我要红包</a>'+
					'<a href="./assets" class="link">我的资产</a>'+
				'</div>',

		init:function(){
			$('body').append(this._html);
			this.bindEvent();
		},

		bindEvent:function(){
	
			var $dragBtn = $('.dragc-btn'),
				$dragMask = $('.dragc-mask'),
				$dragPop = $('.dragc-pop'),
				$links = $dragPop.find('.link'),
				isOpen = false,
				offsetX = 0, offsetY = 0,//点击到元素里的位置
				posX = 0, posY = 0,/*btn移动到的坐标*/
				winW = $(window).width(),
				winH = $(window).height();

			var onClick = function(state){
				switch(state){
					case 'open':
						isOpen = true;
						$dragBtn.hide();
						$dragMask.show();
						$dragPop.show();
						setTimeout(function(){
							$dragPop.css({		
								'width':'240px',
								'height':'240px',
								'left': '50%',
								'top' :'50%',
								'margin':'-120px 0 0 -120px'
							});
							$links.show();
						},50);

					break;
					case 'close':
						isOpen = false;
						$dragMask.hide();
						$links.hide();
						$dragPop.css({
							'left': posX,
							'top' :posY,
							'width':'50px',
							'height':'50px',
							'margin':'0',
						});
						setTimeout(function(){
							$dragPop.hide();
							$dragBtn.show();
						},200);
						
					break;
				}
			};

			/*弹窗阻止滑动*/
			$dragPop.on('touchmove',function(e){
				e.stopPropagation();
				e.preventDefault();
			});

			/*关闭弹层*/
			$dragMask.on('click',function(){
				onClick('close');
			}); 


			/*按钮拖拽*/
			$dragBtn.on('touchstart',function(e){
				var t = e.touches[0];
				offsetX = t.clientX-posX,
				offsetY = t.clientY-posY;
			}).on('touchmove',function(e){
				e.stopPropagation();
				e.preventDefault();

				var t = e.touches[0];
				posX = t.clientX-offsetX,
				posY = t.clientY-offsetY;
				if(posX<0){posX=0;}
				if(posY<0){posY=0;}

				if(posX>winW-50){posX = winW-50;}
				if(posY>winH-50){posY = winH-50;}		
				$(this).css({
					'-webkit-transition': '0s',
					'-webkit-transform' : 'translate('+posX+'px,+'+posY+'px)'
				});


			}).on('touchend',function(e){

				if(posX<winW/2 && posY<winH/2){/*左上角*/
					posY = 10;
				}else if(posX<winW/2 && posY>winH/2){/*左下角*/
					posY = winH-60;
				}else if(posX>winW/2 && posY<winH/2){/*右上角*/
					posX =winW-60;
				}else if(posX>winW/2 && posY>winH/2){/*右下角*/
					posY = winH-60;
				}

				$(this).css({
					'-webkit-transition': '0.3s',
					'-webkit-transform' : 'translate('+posX+'px,+'+posY+'px)'
				});
				$dragPop.css({
					'left':posX,
					'top':posY
				});

			}).click(function(e){
				onClick('open');
			});

			/*初始化到右下角*/
			posX=winW-60;
			posY=winH-60;
			$dragBtn.css({
				'-webkit-transform' : 'translate('+posX+'px,+'+posY+'px)',
				'display':'block'
			});
			$dragPop.css({
				'left':posX,
				'top':posY
			});
		}
}
dragmenu.init();
	
	




})();
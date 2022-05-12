'use strict';

$(function () {
	const swiper = new Swiper('.swiper', {
		// ループ設定
		loop: true,

		// 1ページの表示数
		slidesPerView: 2,


		breakpoints: {
			767: {
				slidesPerView: 3,
			},
			1100: {
				slidesPerView: 4,
			}
		},


		// 自動再生
		autoplay: {
			delay: 5000,
		},

		// アイテム間の余白
		// spaceBetween: 10,

		// ページネーション
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},

		// ナビゲーションボタン
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
});



	function sw() {
		let swiper = document.querySelector('.swiper-slide');
		let swItem = document.querySelectorAll('.sw_item');

		let swObserve = new MutationObserver(function () {
			let swIndex = $('.swiper-slide-active').attr('data-swiper-slide-index');
			$.each(swItem, function (i) {
				if (i == swIndex) {
					$(this).css('display', 'block');
				} else {
					$(this).css('display', 'none');
				}
			})
		});
		let config = {
			childList: true,
			attributes: true
		};

		swObserve.observe(swiper, config);

	}

	
	
	


$(window).on('load resize', function () {
	sw();
});
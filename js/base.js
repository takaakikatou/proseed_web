'use strict';

// ハンバーガーメニュー
$(".header_ham_btn").click(function () {
    $(this).toggleClass('active');
	$(".header_ham_nav").toggleClass('active');
});
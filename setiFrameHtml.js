/**
 * @author     Ryo Watanabe
 * @version    0.0.1
 *
 * Flash上にポップアップさせた感じで
 * iFrame(sample.html)を表示させるサンプル
 * wmode="opaque"で行う事
 **/
(function() {
    // オプションなどの設定はおのおの行う
    jQuery.fn.TestForm = function()
    {
        var target = this;
        var frame  = SetHtml();
        jQuery('body').append(frame);

        // 配置や色などはおのおの設定を行う
        // 表示させるhtmlも設定を行う
	function SetHtml() {
	    frame = '<div class="index-form" style="padding: 6px; background: rgb(44, 110, 189) none repeat scroll 0% 0%; visibility: visible; position: absolute; display: block; text-align: right; width: 520px; z-index: 50000; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; top: 63px; right: 20px; left: 607px;">'
	    frame += '<iframe height="430" frameborder="0" width="520" style="background: rgb(255, 255, 255) no-repeat scroll center bottom; -moz-background-clip: -moz-initial; -moz-background-origin: -moz-initial; -moz-background-inline-policy: -moz-initial; padding-bottom: 4px; display:inline;"';
   	    frame += 'src="http://example.com/sample.html" ';
    	    frame += 'width="300" height="300">';
    	    frame += '</iframe></div>';
    	    return frame;
	};
    };
})(jQuery);

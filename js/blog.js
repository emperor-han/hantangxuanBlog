$(function(){
	$.each($('.NavRight li'),function(index,value){
        //console.log(value);
        $(value).click(function(){
        	//console.log($(value).attr('class'));
        	var $currentLi = $('.NavRight').find('li[class*="current"]');
        	/*console.log($(value));
        	console.log($(value)[0]);
        	console.log($currentLi);*/
        	if($(value)[0] == $currentLi[0]){
        		//console.log('true');

        	}else{
        		//console.log('false');
        		$currentLi.removeClass('current');
        		$(value).addClass('current');
        	}
        });
	});
})
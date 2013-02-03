var c = document.createElement('canvas'),
    ctx = c.getContext('2d'),
    cw = c.width = 200,
  	ch = c.height = 200,
    rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);}

for(var w = 0; w < cw; w++){
	for(var h = 0; h < ch; h++){
    ctx.fillStyle = 'hsl(0, 0%, '+rand(90, 100)+'%)';
		ctx.fillRect(w*8, h*4, 4, 4);
    if(w % 6 === 0 && h % 18 === 0){
      ctx.fillStyle = 'hsla(0, 0%, 0%, .11)';
		  ctx.fillRect(w, h, 20, 1);
    }
	}
}

document.body.style.background = 'url('+c.toDataURL()+')';

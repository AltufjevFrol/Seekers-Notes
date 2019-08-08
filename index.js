/*let frame = document.createElement('div');
	frame.id = 'player';
	document.body.appendChild(frame);
	var player;
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player', {
			height: '720',
			width: '1280',
			videoId: 'tqLjS0bVFYM',
			events: {
				'onStateChange': endVideo
				},
			playerVars: {
				'autoplay': 1,
				'controls': 0,
				'disablekb': 1
			}
		});
	}
function endVideo(event){
	if(event.data === 0){
		document.getElementById('player').remove();
		action();
	}
console.log(event);
}*/




function action(){
	/*	param = {
		idstr: строка с id элемента,
		srcstr: строка с URL, можно использовать здесь dataURL base64
		widthstr: css размеры,
		heightstr: css размеры,
		parent: элемент в который добавляем
	}*/

	function appendCanvasFromImg({idstr = 'foo', srcstr = 'img/Tutorial1.png', widthstr = '25%', heightstr = '25%', parent = document.body} = {}){
		let box = document.createElement('canvas');
		let ctx = box.getContext('2d');
		let img = new Image();
		img.src = srcstr;
		box.id = idstr;
		img.addEventListener('load', ()=>{
			box.width = img.naturalWidth
			box.height = img.naturalHeight;
			ctx.drawImage(img,0,0,box.width,box.height);
		}, false);
		parent.appendChild(box);
		box.style.width = widthstr;
		box.style.height = heightstr;
	}

/*добавляем коробку со сторонами пропорциональными локации(что бы не было искажения)*/
	let container = document.createElement('article');
	container.id = 'container';
	document.body.appendChild(container);
	container.style.width = document.body.offsetHeight/0.5625+'px';
	window.addEventListener('resize', ()=>{
		container.style.width = document.body.offsetHeight/0.5625+'px';
	});

/*добавляем canvas с локацией*/
	let background = {
		idstr: 'background',
		srcstr: 'img/bg_ho.png',
		widthstr: '100%',
		heightstr: '100%',
		parent: container
	}
	appendCanvasFromImg(background);



/*добавляем grid коробку для игровых элементов*/
	let grid = document.createElement('div');
	grid.id = 'grid';
	container.appendChild(grid);



/*добавляем в сетку элементы*/

let tutorial = {
	idstr: 'tutorial',
	srcstr: 'img/Tutorial1.png',
	widthstr: '30%',
	heightstr: '85%',
	parent: grid
}
appendCanvasFromImg(tutorial);

	let gui = {
	idstr: 'gui',
	srcstr: 'img/ho_gui.png',
	widthstr: '100%',
	heightstr: '100%',
	parent: grid
}
appendCanvasFromImg(gui);

	let fan = {
	idstr: 'fan',
	srcstr: 'img/fan.png',
	widthstr: '100%',
	heightstr: '',
	parent: grid
}
appendCanvasFromImg(fan);

	let basket = {
	idstr: 'basket',
	srcstr: 'img/basket.png',
	widthstr: '50%',
	heightstr: '',
	parent: grid
}
appendCanvasFromImg(basket);

	let book = {
	idstr: 'book',
	srcstr: 'img/book.png',
	widthstr: '100%',
	heightstr: '',
	parent: grid
}
appendCanvasFromImg(book);

	let shoe = {
	idstr: 'shoe',
	srcstr: 'img/shoe.png',
	widthstr: '75%',
	heightstr: '',
	parent: grid
}
appendCanvasFromImg(shoe);

	let cover = {
	idstr: 'cover',
	srcstr: 'img/cover.png',
	widthstr: '',
	heightstr: '',
	parent: container
}
appendCanvasFromImg(cover);

/*	let tutorial = document.createElement('canvas');
	tutorial.id = 'tutorial';
	grid.appendChild(tutorial);
	let ctxttr = tutorial.getContext('2d');
	let imgttr = new Image();
	imgttr.src = 'Tutorial1.png';
	imgttr.addEventListener('load', ()=>{
		ctxttr.drawImage(imgttr,0,0,tutorial.width,tutorial.height);
	}, false);
	tutorial.style.width = '30%';
	tutorial.style.height = '85%';

	let gui = document.createElement('div');
	gui.id = 'gui';
	grid.appendChild(gui);*/
}

action();

/*let ctxbck = background.getContext('2d');
let imgbck = new Image();
imgbck.src = 'bg_ho.png';
imgbck.addEventListener('load', ()=>{
	ctxbck.scale(0.15, 0.15);
	ctxbck.drawImage(imgbck,0,0);
	
}, false);*/

const clickableObjects = [
'fan',
'basket',
'book',
'shoe'
];
function click(event){
	let xClck = event.clientX;
	let yClck = event.clientY
	for(let i=0; i<clickableObjects.length; i++){
		let box = document.getElementById(clickableObjects[i]);
		let x = box.getBoundingClientRect().x;
		let y = box.getBoundingClientRect().y;
		let dx = x + box.getBoundingClientRect().width;
		let dy = y + box.getBoundingClientRect().height;
		if(xClck >= x && xClck <= dx && yClck >= y && yClck <= dy){
			console.log('I am a '+box.id);
		}
	}
}
document.getElementById('container').addEventListener('click', click)
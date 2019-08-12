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
let eventReady = new CustomEvent('ready',{bubbles: true});
function paintCanvasFromImg(src,id){
	let box = document.getElementById(id);
	let ctx = box.getContext('2d');
	let img = new Image();
	img.src = src;
	img.addEventListener('load', ()=>{
			box.width = img.naturalWidth
			box.height = img.naturalHeight;
			ctx.drawImage(img,0,0,box.width,box.height);
			box.dispatchEvent(eventReady);
		}, false);
}

	/*	param = {
		id: строка с id элемента,
		src: строка с URL, можно использовать здесь dataURL base64
		width: css размеры,
		height: css размеры,
		parent: элемент в который добавляем
	}*/
	function appendCanvasFromImg(
		{id = 'foo',
		src = 'img/Tutorial1.png',
		width = '25%',
		height = '25%',
		parent = document.body
		} = {}){
		let box = document.createElement('canvas');
		box.id = id;
		parent.appendChild(box);
		paintCanvasFromImg(src, id);
		box.style.width = width;
		box.style.height = height;
	}

	/*{
id текст с id canvas:,
color цвет текста:,
font css свойство font:,
align: css свойства text align,
text: сам текст,
x: позиция,
y: позиция,
widthMAX: максимальная ширина
}
*/
function paintText(
{id = 'body',
color = 'black',
font = '30px serif',
align = '',
text = 'foo',
x = 0,
y = 0,
widthMAX = 300
}={}){
	let box = document.getElementById(id);
	let ctx = box.getContext('2d');
	ctx.fillStyle = color;
	ctx.font = font;
	ctx.textAlign = align;
	ctx.fillText(text, x, y, widthMAX);
}


function action(){
/*добавляем коробку со сторонами пропорциональными локации(что бы не было искажения)*/
	let container = document.createElement('article');
	container.id = 'container';
	container.style.width = document.body.offsetHeight/0.5625+'px';
	document.body.appendChild(container);
	window.addEventListener('resize', ()=>{
		container.style.width = document.body.offsetHeight/0.5625+'px';
	});

/*добавляем canvas с локацией*/
	let background = {
		id: 'background',
		src: 'img/bg_ho.png',
		width: '100%',
		height: '100%',
		parent: container
	}
	appendCanvasFromImg(background);



/*добавляем grid коробку для игровых элементов*/
	let grid = document.createElement('div');
	grid.id = 'grid';
	container.appendChild(grid);



/*добавляем в сетку элементы*/

let tutorial = {
	id: 'tutorial',
	src: 'img/Tutorial1.png',
	width: '30%',
	height: '85%',
	parent: grid
}
appendCanvasFromImg(tutorial);

	let gui = {
	id: 'gui',
	src: 'img/ho_gui.png',
	width: '100%',
	height: '100%',
	parent: grid
}
appendCanvasFromImg(gui);

	let fan = {
	id: 'fan',
	src: 'img/fan.png',
	width: '100%',
	height: '',
	parent: grid
}
appendCanvasFromImg(fan);

	let basket = {
	id: 'basket',
	src: 'img/basket.png',
	width: '50%',
	height: '',
	parent: grid
}
appendCanvasFromImg(basket);

	let book = {
	id: 'book',
	src: 'img/book.png',
	width: '100%',
	height: '',
	parent: grid
}
appendCanvasFromImg(book);

	let shoe = {
	id: 'shoe',
	src: 'img/shoe.png',
	width: '75%',
	height: '',
	parent: grid
}
appendCanvasFromImg(shoe);

	let cover = {
	id: 'cover',
	src: 'img/cover.png',
	width: '',
	height: '',
	parent: container
}
appendCanvasFromImg(cover);

let textTutorial1 = {
id: 'tutorial',
color: 'rgba(79,1,1,1)',
font: 'bold 80px "Unna", serif',
align: 'center',
text: 'FIND ALL THE',
x: 515,
y: 225,
widthMAX: 1000
};

let textTutorial2 = {
id: 'tutorial',
color: 'rgba(79,1,1,1)',
font: 'bold 80px "Unna", serif',
align: 'center',
text: 'HIDDEN OBJECTS!',
x: 515,
y: 325,
widthMAX: 1000
};

let textFan, textBasket, textBook, textShoe;

textFan = {
id: 'gui',
color: 'rgba(79,1,1,1)',
font: 'bold 60px "Unna", serif',
align: 'center',
text: 'Fan',
x: 543.2,
y: 200,
widthMAX: 543.2
};

textBasket = {
id: 'gui',
color: 'rgba(79,1,1,1)',
font: 'bold 60px "Unna", serif',
align: 'center',
text: 'Basket',
x: 1086.4,
y: 200,
widthMAX: 543.2
};

textBook = {
id: 'gui',
color: 'rgba(79,1,1,1)',
font: 'bold 60px "Unna", serif',
align: 'center',
text: 'Book',
x: 1629.6,
y: 200,
widthMAX: 543.2
};

textShoe = {
id: 'gui',
color: 'rgba(79,1,1,1)',
font: 'bold 60px "Unna", serif',
align: 'center',
text: 'Shoe',
x: 2172.8,
y: 200,
widthMAX: 543.2
};


document.getElementById('tutorial').addEventListener('ready', ()=>{
	paintText(textTutorial1);
	paintText(textTutorial2);
});

document.getElementById('gui').addEventListener('ready', ()=>{
	paintText(textFan);
	paintText(textBasket);
	paintText(textBook);
	paintText(textShoe);
});

}

action();

const clickableObjects = [
'fan',
'basket',
'book',
'shoe'
];
function click(event){
	let xClck = event.clientX;
	let yClck = event.clientY
	for(let i of clickableObjects){
		let box = document.getElementById(i);
		let x = box.getBoundingClientRect().x;//кординаты верхнего левого угла
		let y = box.getBoundingClientRect().y;//кординаты верхнего левого угла
		let width = +getComputedStyle(box).width.replace('px','');//ширина
		let height = +getComputedStyle(box).height.replace('px','');//высота
		let matrixArr = getComputedStyle(box).transform.replace('matrix(','').replace(')','').split(', ').map((i)=>{return +i});//матрица преобразований в виде массива занчений
		let dx, dy;
		/*console.log('xClck = '+xClck);
		console.log('yClck = '+yClck);
		console.log('x = '+x);
		console.log('y = '+y);*/
		if (matrixArr[1]===0 && matrixArr[2]===0){
			/*нет поворота*/
			dx = x + width;
			dy = y + height;
		}
		if(Math.abs(matrixArr[0])===Math.abs(matrixArr[1]) && Math.abs(matrixArr[1])===Math.abs(matrixArr[2]) && Math.abs(matrixArr[2])===Math.abs(matrixArr[3])){
			/*случай угла 45 градусов*/
					dx = x + width;
					dy = y + width;
				/*if(matrixArr[0]>0 && matrixArr[1]>0){//I четверть
					dx = x + 100;
					dy = y + 100;
				}
				if(matrixArr[0]<0 && matrixArr[1]>0){//II четверть
					dx = x - width;
					y = y - height
					dy = y + height*2;
				}
				if(matrixArr[0]<0 && matrixArr[1]<0){//III четверть
					x = x + height
					dx = x - height*2;
					dy = y + width;
				}
				if(matrixArr[0]>0 && matrixArr[1]<0){//IV четверть
					dx = x + width;
					y = y + height
					dy = y - height*2;
				}*/
			}else{
						if(Math.abs(matrixArr[1])>0.7 && Math.abs(matrixArr[2])<=1){//более вертикальное положение
							if(matrixArr[1]>=0 && matrixArr[2]<0){//I и II четверть
								dx = x - height;
								dy = y + width;
							}
							if(matrixArr[1]<0 && matrixArr[2]>=0){//III и IV четверть
								dx = x + height;
								dy = y - width;
							}
						}
						if(Math.abs(matrixArr[0])>0.7 && Math.abs(matrixArr[3])<=1){//более горизонтальное положение
							if(matrixArr[0]>=0 && matrixArr[3]>=0){//I и IV четверть
								dx = x + width;
								dy = y + height;
							}
							if(matrixArr[0]<0 && matrixArr[3]<0){//IIи III четверть
								dx = x - width;
								dy = y - height;
							}
						}
			}

			let x1 = x<dx?x:dx;
			let x2 = x>dx?x:dx;
			let y1 = y<dy?y:dy;
			let y2 = y>dy?y:dy;

			if(xClck >= x1 && xClck <= x2 && yClck >= y1 && yClck <= y2){
			console.log('I am a '+box.id);
			}

	}
}
document.getElementById('container').addEventListener('click', click);


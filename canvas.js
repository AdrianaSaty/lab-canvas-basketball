var canvas = document.getElementById('basketball');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = 'white';
ctx.lineWidth = 3;

//brown background
ctx.fillStyle = "#b49860";
ctx.fillRect(0, 0, 1000, 500);

//rectangle left (x, y, width, height) 
ctx.fillStyle = "#de944d"; //orange
ctx.fillRect(-1, 190, 200, 120);
ctx.strokeRect(-1, 190, 201, 120);
ctx.strokeRect(1, 175, 200, 150); //bigger

//orange rectangle right (x, y, width, height) 
ctx.fillStyle = "#de944d";
ctx.fillRect(1001, 190, -200, 120);
ctx.strokeRect(1001, 190, -200, 120);
ctx.strokeRect(1001, 175, -200, 150); //bigger


//small circle left
ctx.beginPath();
ctx.arc(199, 250, 60, Math.PI*(3/2), Math.PI/2); // ctx.arc(x, y, radius, startAngle, endAngle)
ctx.stroke();
ctx.closePath();ctx.beginPath(); //dotted line
ctx.setLineDash([5, 5]);
ctx.arc(199, 250, 60, Math.PI/2,  Math.PI*(3/2)); // ctx.arc(x, y, radius, startAngle, endAngle)
ctx.stroke();
ctx.closePath();
ctx.setLineDash([]);

//small circle right
ctx.beginPath();
ctx.arc(800, 250, 60,  Math.PI/2,  Math.PI*(3/2)); // ctx.arc(x, y, radius, startAngle, endAngle)
ctx.stroke();
ctx.closePath();
ctx.beginPath(); //dotted line
ctx.setLineDash([5, 5]);
ctx.arc(800, 250, 60, Math.PI*(3/2), Math.PI/2); // ctx.arc(x, y, radius, startAngle, endAngle)
ctx.stroke();
ctx.closePath();
ctx.setLineDash([]);

//half circle left
ctx.beginPath();
ctx.arc(60, 250, 200, Math.PI*(3/2), Math.PI/2); // ctx.arc(x, y, radius, startAngle, endAngle)
ctx.stroke();
ctx.closePath();
ctx.beginPath(); //line top    
ctx.moveTo(0, 50);
ctx.lineTo(60, 50);
ctx.stroke();
ctx.closePath();
ctx.beginPath(); //lin botton
ctx.moveTo(0, 450);
ctx.lineTo(60, 450);
ctx.stroke();
ctx.closePath();

//half circle right
ctx.beginPath();
ctx.arc(940, 250, 200,  Math.PI/2,  Math.PI*(3/2)); // ctx.arc(x, y, radius, startAngle, endAngle)
ctx.stroke();
ctx.closePath();
ctx.beginPath(); //line top    
ctx.moveTo(1000, 50);
ctx.lineTo(940, 50);
ctx.stroke();
ctx.closePath();
ctx.beginPath(); //lin botton
ctx.moveTo(1000, 450);
ctx.lineTo(940, 450);
ctx.stroke();
ctx.closePath();

//center circle
ctx.beginPath();
ctx.arc(500, 250, 60, 0, Math.PI*2)
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(500, 250, 60, 0, Math.PI*2)
ctx.stroke();
ctx.closePath();
ctx.fillStyle = 'orange';

//vertical center line
ctx.beginPath(); //line top    
ctx.moveTo(500, 0);
ctx.lineTo(500, 500);
ctx.stroke();
ctx.closePath();




// close the path
ctx.closePath();

ctx.beginPath();

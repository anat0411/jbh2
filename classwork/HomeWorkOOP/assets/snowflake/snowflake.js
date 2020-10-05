var snowflakes = [];
var sf_count = 1000;

document.onload = function(){
    createSnowFlakes(sf_count);
    makeItSnow();
}

function createSnowFlakes(num){
    for( let i = 0; i< num ; i++ ){
        let position = {
            x:Math.floor(Math.random() * window.innerWidth),
            y:-2
        }
        let temp_size = Math.floor(Math.random() * 20);
        let size = {
            width:temp_size,
            height:temp_size 
        }
        let sf = new snowFlake(position,size);
        snowflakes.push(sf);
    }

    setInterval(() => {
        makeItSnow();
    }, 50);
}
function makeItSnow(){
    for( let i = 0; i< snowflakes.length ; i++ ){
        
    }
}

function snowFlake(position,size){
    var self = this;

    self.position = position;
    self.size = size;
    self.color = randomColor();

    var randomColor = function(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    this.getSnowFlakeHtmlObj = function(){
        let snowflake_html_obj = document.createElement('div');
        snowflake_html_obj.classList.add('snowflake');
        snowflake_html_obj.style = `
        top:${self.position.y};
        left:${self.position.x};
        width:${self.size.width};
        height:${self.position.height};
        background-color:${self.color};
        `;

        return snowflake_html_obj;
    }

    this.fall = function(){
        self.position.y += 1;
    }
}
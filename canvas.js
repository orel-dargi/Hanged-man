var canvas= document.querySelector('canvas');

var context= canvas.getContext('2d');

const drawMan = (num) => {

    switch (num) {
        case 1:
            context.beginPath();
            context.moveTo(180,140);
            context.lineTo(240, 140);
            context.stroke();
            
            break;
        
        case 2:
            context.beginPath();
            context.moveTo(210,140);
            context.lineTo(210, 30);
            context.stroke();
            break;

        case 3:
            context.beginPath();
            context.moveTo(210,30);
            context.lineTo(150,30);
            context.stroke();

            break;

        case 4:
            context.beginPath();
            context.moveTo(150,30);
            context.lineTo(150,45);
            context.stroke();

            break;
        
        case 5:
            context.beginPath();
            context.arc(150, 55, 10, 0, Math.PI*2, false);
            context.stroke();

            break;

        case 6:
            context.beginPath();
            context.moveTo(150,65);
            context.lineTo(150,100);
            context.stroke();
            break;
            
        case 7:
            // ידיים
            context.beginPath();
            context.moveTo(150,65);
            context.lineTo(175,80);
            context.stroke();
            break;
            
        case 8:
            context.beginPath();
            context.moveTo(150,65);
            context.lineTo(125,80);
            context.stroke();
            break;
            
            case 9:
                // רגליים
                
                context.beginPath();
                context.moveTo(150,100);
                context.lineTo(175,120);
                context.stroke();
                break;
            
            case 10:
                context.beginPath();
                context.moveTo(150,100);
                context.lineTo(125,120);
                context.stroke();
                break;
                
            
        default:
            break;
    }

}














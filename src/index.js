module.exports = function zeros(expression) {
    var c = 0,
        q= 0,
        k = 0,
        a = [],
        ax = [],
        axx= [],
        bx = [],
        bxx = [],
        mass =[],
        b = [],
        d5 = 0,
        d2 = 0;
        
        expression = expression.split('*');
        expression = expression.join('');

        function isInteger(num) {
            return (num ^ 0) === num;
        }
    for (var i = 0; i < expression.length; i++) {
        if(expression[i] == '!'){
            if(expression[i + 1] == '!'){
                b[k] = expression.substring(0,i);
                k++;
                expression = expression.substring(i + 2, expression.length);
                i = 0;
            }
            else{
                a[q] = expression.substring(0,i);
                q++;
                expression = expression.substring(i + 1, expression.length);
                i = 0;
            }
        }
    }
    for (var i = 0; i < a.length; i++) {
        ax[i] = axx[i] = a[i];
               
    }
    for (var i = 0; i < b.length; i++) {
        bx[i] = bxx[i] = b[i];       
    }
    for (var i = 0; i < ax.length; i++) {
        for (var j = ax[i]; j > 0, ax[i] > 0; j--) {
            //console.log(ax[i]);
            while((axx[i] % 5 == 0) && ax[i] > 0){
                d5++;
                axx[i] /= 5;
            } 
            ax[i]--;
            axx[i] = ax[i];
        }  
    }
    for (var i = 0; i < a.length; i++) {
        for (var j = a[i]; j > 0, a[i] > 0; j--) {
            //console.log(a[i]);
            if(isInteger(a[i] / 2) && a[i] > 0){
                d2++;
            } 
            a[i]--;
        }  
    }

    for (var i = 0; i < bx.length; i++) {
        for (var j = bx[i]; j > 0, bx[i] > 0; j--) {
            //console.log(bx[i]);
            while((bxx[i] % 5 == 0) && bx[i] > 0){
                d5++;
                bxx[i] /= 5;
                //console.log(d5);
            } 
            
            bx[i] = bx[i] - 2;
            bxx[i] = bx[i];
        }  
    }

    for (var i = 0; i < b.length; i++) {
        for (var j = b[i]; j > 0, b[i] > 0; j--) {
            //console.log(b[i]);
            if(isInteger(b[i] / 2) && b[i] > 0){
                d2++;
            } 
            b[i] = b[i] - 2;
        }  
    }

    console.log('d5 = ', d5," d2 = ", d2);

    if(d5 < d2){
        //console.log(d5);
        return d5;
    }
    else{
        //console.log(d2);
        return d2;

    }
}

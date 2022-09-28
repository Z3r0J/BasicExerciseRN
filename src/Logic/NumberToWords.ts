export class NumberToWords {
    toWords = (value:any) => {
        if (value<=1000) {
            var dg = [
              'cero',
              'uno',
              'dos',
              'tres',
              'cuatro',
              'cinco',
              'seis',
              'siete',
              'ocho',
              'nueve',
            ];
            var tn = [
              'diez',
              'once',
              'doce',
              'trece',
              'catorce',
              'quince',
              'dieciseis',
              'diecisiete',
              'dieciocho',
              'diecinueve',
            ];
            var tw = [
              'veinte',
              'treinta',
              'cuarenta',
              'cincuenta',
              'sesenta',
              'setenta',
              'ochenta',
              'noventa',
            ];
            var th = ['', 'mil'];
      
            value = value.toString();
            value = value.replace(/[\, ]/g, '');
            if (value != parseFloat(value)) return 'Eso no es un numero';
            var x = value.indexOf('.');
            if (x == -1) x = value.length;
            var n = value.split('');
            var str = '';
            var sk = 0;
            for (var i = 0; i < x; i++) {
              if ((x - i) % 3 == 2) {
                if (n[i] == '1') {
                  str += tn[Number(n[i + 1])] + ' ';
                  i++;
                  sk = 1;
                } else if (n[i] != 0) {
                const AddYLetter = (n[i+1]!=0) ?' y ' + dg[n[i+1]]:"";
                    str += tw[n[i] - 2] + AddYLetter ;
                    sk = 1;
                }
              } 
              
              else if (n[i] != 0) {
                if ((x - i) % 3 == 0) {
                    
                    switch (dg[n[i]]) {
                        case 'uno':
                            str += 'c';
                            break;
                        case 'cinco':
                            str += 'quin';
                            break;
                        case 'siete':
                            str+='setec';
                            break;
                        case 'nueve':
                            str+='novec';
                            break;
                        default:
                            str+=dg[n[i]]+'c';
                            break;
                    }
                    str += 'iento '
                    if(n[i+2]>0&&n[i+1]<=0){str+=dg[n[i+2]]}
                };
                sk = 1;
              }

              if ((x - i) % 3 == 1) {
                if (sk) str += th[(x - i - 1) / 3] + ' ';
                sk = 0;
              }
            }

            if (x != value.length) {
              var y = value.length;
              str += 'punto ';
              for (var i: number = x + 1; i < y; i++) str += dg[n[i]] + ' ';
            }
            return str.replace(/\value+/g, ' ');
        }
    return "Numeros entre 1 y 1000";
}

}
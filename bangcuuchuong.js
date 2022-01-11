let bang = '<table border="1" width="600" cellpadding="3" cellspacing="0">';
for (let i = 1; i <10 ; i++) {
    bang = bang +'<tr>';
    for (let j = 2; j <10 ; j++) {
        let ketqua = i*j;
        bang = bang +'<td>' + j +'x'+i + '= '+ ketqua +'</td>'
    }
bang = bang +'</tr>';
    }
bang = bang + '</table>';
document.writeln(bang)
function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var hexKeyColor = '#';
    for (var i = 0; i < 6; i++ ) {
        hexKeyColor += letters[Math.floor(Math.random() * 16)];
    }
    return hexKeyColor;
}
window.onload=function()
    {
        var i=0;
        var j=0;

        for (i=1; i<=6; i++)
        {
            for (j=1; j<=9; j++)
            {
                if ((i%2==1 && j%2==0)||(i%2==0 && j%2==1))
                {
                    var div = document.createElement('div');
                    document.body.appendChild(div);
                    div.style.backgroundColor= randomColor();
                    div.style.width = '11.1%';
                    div.style.paddingBottom = '11.1%';
                    div.style.cssFloat = 'left';
                }
                else
                {
                  var div = document.createElement('div');
                  document.body.appendChild(div);
                  div.style.backgroundColor= randomColor();
                  div.style.width = '11.1%';
                  div.style.paddingBottom = '11.1%';
                  div.style.cssFloat = 'left';
                }
            }
        }
    }

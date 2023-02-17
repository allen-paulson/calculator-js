var count = 0
var num = [0,1,2,3,4,5,6,7,8,9]
function btnClick(val)
{
  document.getElementById("screenInp").value += val
  count++
  if( count > 2 )
  {
    if( val == '/' || val == '*' || val == '+' || val == '-' )
    {
      var text = document.getElementById("screenInp").value
      text = text.substring(0, text.length-1)
      var result = eval(text)
      document.getElementById("screenOut").value = result
    }
    else if( val in num)
    {
      var text = document.getElementById("screenInp").value
      var result = eval(text)
      document.getElementById("screenOut").value = result
    }
  }
  
}

function clearScreen()
{
  document.getElementById("screenInp").value = ''
  document.getElementById("screenOut").value = ''
  count = 0
}

function calculate()
{
  var text = document.getElementById("screenInp").value
  var result = eval(text)
  document.getElementById("screenInp").value = result
  document.getElementById("screenOut").value = ''
}
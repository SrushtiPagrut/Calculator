let input = document.getElementsByTagName("input")[0]
function display(a)
{
    input.value +=a
}
function output()
{
    input.value = eval(input.value)    //eval give output
}
function clearInput()
{
    input.value = ""
}
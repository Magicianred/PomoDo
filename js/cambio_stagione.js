var currentTime = new Date();
var month = currentTime.getMonth() + 1;
var total = month;

// Summer
if (total >= 6 && total <= 8)
{
    document.getElementById("banner-container").style.backgroundImage = "url('images/winter.png')";
}
// Autumn
else if (total >= 9 && total <= 11)
{
    document.getElementById("banner-container").style.backgroundImage="url('images/fall.png')";
}
// Winter
else if (total == 12 || total == 1 || total == 2)
{
    document.getElementById("banner-container").style.backgroundImage = "url('images/winter.png')";
}
// Spring
else if (total >= 2 && total <= 6)
{
    document.getElementById("banner-container").style.backgroundImage = "url('images/spring.png')";
}
else
{
    document.getElementById("banner-container").style.backgroundImage = "url('images/summer.png')";
}

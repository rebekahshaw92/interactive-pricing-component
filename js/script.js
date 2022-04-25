const pageViews = document.getElementById("pageviews");
const price = document.getElementById("price");
const priceMobile = document.getElementById("priceMobile");
const slider = document.getElementById("slider");
const togglePrice = document.getElementById("switch"); 
const discount = document.getElementById("discount");

let ipcPrice = 8.00;
let yearState = false;
slider.addEventListener("change", setPrice);
togglePrice.addEventListener("click", () => {
    changeYearState();
});


function setPrice() {
    let value = parseInt(slider.value);
    switch (value) {
       case 1:
           pageViews.innerText = "10K pageviews";
           price.innerHTML = "$" + ipcPrice.toFixed(2) + "<span> / month </span>";
           priceMobile.innerHTML = "$" + ipcPrice.toFixed(2) + "<span> / month </span>";
           break;
       case 2:
           ipcPrice = 12;
           pageViews.innerText = "50k pageviews";
           price.innerHTML = "$" + ipcPrice.toFixed(2) + "<span> / month </span>";
           priceMobile.innerHTML = "$" + ipcPrice.toFixed(2) + "<span> / month </span>";
           break;
        case 3:
            ipcPrice = 16;
            pageViews.innerHTML = "100K pageviews";
            price.innerHTML = "$" + ipcPrice.toFixed(2) + "<span> / month </span>";
            priceMobile.innerHTML = "$" + ipcPrice.toFixed(2) + "<span> / month </span>";
            break;
        case 4:
            ipcPrice = 24;
            pageViews.innerText = "500k pageviews";
            price.innerHTML = "$" + ipcPrice.toFixed(2) + "<span> / month </span>";
            priceMobile.innerHTML = "$" + ipcPrice.toFixed(2) + "<span> / month </span>";
            break;
        case 5:
            ipcPrice = 36;
            pageViews.innerText = "1M pageviews";
            price.innerHTML = "$" + ipcPrice.toFixed(2) + "<span> / month </span>";
            priceMobile.innerHTML = "$" + ipcPrice.toFixed(2) + "<span> / month </span>";
            break;
        default:
            break;

    }
}

function changeYearState() {
    
 if(togglePrice.checked) {
    const totalValue = ipcPrice - ipcPrice * 0.25;
    price.innerHTML = `$${totalValue.toFixed(2)}` + "<span> / month </span>";
    priceMobile.innerHTML = `$${totalValue.toFixed(2)}` + "<span> / month </span>";
 } else {
     price.innerHTML = `$${ipcPrice.toFixed(2)}` + "<span> / month </span>";
     priceMobile.innerHTML = `$${ipcPrice.toFixed(2)}` + "<span> / month </span>";

 }
}



window.addEventListener("DOMContentLoaded", setPrice);

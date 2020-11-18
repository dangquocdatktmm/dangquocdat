
var products = [
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    },
    {
        name:"Flying Ninja",
        image:"imgs/product.jpg",
        price: 12,
        star:3.5
    }

]
function gridProduct() {
    "<div class=\"col-md-4\">\n" +
    "                <div class=\"item text-center\">\n" +
    "                    <img class=\"product-image\" src=\"imgs/product.jpg\"/>\n" +
    "                    <h2 class=\"product-name\">Flying Ninja</h2>\n" +
    "                    <div class=\"star\">\n" +
    "                        <div class=\"star-box\">\n" +
    "                            <div class=\"star-rate\" style=\"width: 70%\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p class=\"price\">$12</p>\n" +
    "                    <a href=\"#\" class=\"add-to-cart text-uppercase\">Add To Cart</a>\n" +
    "                </div>\n" +
    "            </div>"
    return g_html;
}

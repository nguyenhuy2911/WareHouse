_PRODUCT = null;

function PRODUCT() {

}

PRODUCT.prototype = new BaseFunction("PRODUCT");

PRODUCT.prototype.getProducts = function () {
    var $this = this;
    $.ajax({
        type: "GET",
        url: "get-products",
        data: {date: new Date()},
        dataType: "json",
        success: function (response) {
            $this.loadToDataTable(response);
        }
    });
}
PRODUCT.prototype.loadToDataTable = function (response) {

    $('#product_list_item').DataTable({
        processing: true,
        data: response.Results,
        columns: [
            { data: "Product_ID", title: "Product ID" },
            { data: "Product_Name", title: "Product Name" },
            { data: "Unit", title: "Unit" },
            { data: "Quantity", title: "Quantity" }
        ],
        select: true
    });
    
};

PRODUCT.prototype.newPRODUCTForm = function () {

    window.location.href = "/PRODUCT-new";
}

$(function () {
    _PRODUCT = new PRODUCT();
    _PRODUCT.getProducts();
});

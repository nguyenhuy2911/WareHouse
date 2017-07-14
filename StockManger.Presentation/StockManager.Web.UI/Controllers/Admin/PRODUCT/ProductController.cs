
using AutoMapper;
using Newtonsoft.Json;
using StockManage.Entity.Service.Contract;
using StockManager.Business;
using StockManager.Entity;
using StockManager.Entity.Web.Mapper;
using StockManager.Web.UI.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace StockManager.Web.UI.Controllers
{
    [RoutePrefix("product")]
    public class ProductController : BaseController
    {
        private readonly IProductService _IProductService;
        public ProductController(IProductService productService)
        {
            this._IProductService = productService;
        }

        [Route("~/products")]
        public ActionResult Product()
        {
            if (!CheckLogin())
            {
                return Login();
            }
            var model = new Products_ViewModel();
            return View("~/Views/Admin/PRODUCT/products.cshtml", model);
        }

        [Route("product-form-list")]
        public ActionResult Product_Form_List()
        {
            if (!CheckLogin())
            {
                return Login();
            }
            var model = new Products_ViewModel();
            return View("~/Views/Admin/PRODUCT/partial/_product-form-list.cshtml", model);
        }

        [HttpGet]
        [Route("get-products")]
        public string GetProducts()
        {
            var response = GetProducts_Data();            
            string json = JsonConvert.SerializeObject(response);
            return json;
        }

        private ResponseBase<List<GetProducts_DTOMaper>> GetProducts_Data()
        {
            var request = new GetProducts_Request();
            var response = _IProductService.GetProducts(request);
            var dataMapping = Mapper.Map<ResponseBase<List<PRODUCT>>, ResponseBase<List<GetProducts_DTOMaper>>>(response);
            return dataMapping;
        }

        public ActionResult Details(int id)
        {
            return View();
        }

        public ActionResult ProductCreate_Form()
        {
            return View("PRODUCT_UDC_Form");
        }

        public ActionResult MERCHANDISE_NEWASESEMBLED_Form()
        {
            return View("PRODUCT_UDC_ASESEMBLED_Form");
        }

    }
}

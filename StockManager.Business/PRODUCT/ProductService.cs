
using StockManage.Entity.Service.Contract;
using StockManager.Data.Repository;
using StockManager.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StockManager.Business
{
    public interface IProductService
    {
        ResponseBase<List<PRODUCT>> GetProducts(GetProducts_Request request);
        ResponseBase<PRODUCT> GetProduct(int id);
        ResponseBase<int> UpdateProduct(PRODUCT ProductToUpdate);
        ResponseBase<int> CreateProduct(PRODUCT Product);
        ResponseBase<int> DeleteProduct(int id);
    }
    public class ProductService : IProductService
    {
        private readonly IProductRepository _IProductRepository;

        public ProductService(IProductRepository productRepository)
        {
            this._IProductRepository = productRepository;
        }

        public ResponseBase<int> CreateProduct(PRODUCT Product)
        {
            throw new NotImplementedException();
        }

        public ResponseBase<int> DeleteProduct(int id)
        {
            throw new NotImplementedException();
        }

        public ResponseBase<PRODUCT> GetProduct(int id)
        {
            throw new NotImplementedException();
        }
        public ResponseBase<List<PRODUCT>> GetProducts(GetProducts_Request request)
        {
            var response = _IProductRepository.GetAll(request.Page, x => x.Product_ID, false);          
            return response;
        }

        public ResponseBase<int> UpdateProduct(PRODUCT ProductToUpdate)
        {
            throw new NotImplementedException();
        }
    }
}

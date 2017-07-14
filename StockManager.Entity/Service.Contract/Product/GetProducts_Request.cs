using StockManager.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StockManage.Entity.Service.Contract
{
    public class GetProducts_Request : RequestBase
    {
        public GetProducts_Request()
        {
            Page = new Page();
        }
        public Page Page { get; set; }
    }
}

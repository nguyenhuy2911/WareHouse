namespace StockManager.Web.UI.Models
{
    public class WAREHOUSE_FormList_Model : BaseModel
    {
        public WAREHOUSE_FormList_Model()
        {
            FunctionName = "WAREHOUSE_LIST";
        }

        public string GridHeader { get; set; }
    }
}
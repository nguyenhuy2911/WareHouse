using System;
using System.Collections.Generic;

namespace StockManager.Entity
{
    public partial class CUSTOMER_GROUP
    {
        public string Customer_Group_ID { get; set; }
        public string Customer_Group_Name { get; set; }
        public string Description { get; set; }
        public bool Active { get; set; }
    }
}

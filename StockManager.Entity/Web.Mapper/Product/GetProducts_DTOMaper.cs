﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StockManager.Entity.Web.Mapper
{
    public class GetProducts_DTOMaper
    {
        public GetProducts_DTOMaper()
        {
        }
        public int Product_ID { get; set; }
        public string Product_Name { get; set; }
        public string Product_NameEN { get; set; }
        public int? Product_Type_ID { get; set; }
        public int? Manufacturer_ID { get; set; }
        public string Model_ID { get; set; }
        public string Product_Group_ID { get; set; }
        public string Provider_ID { get; set; }
        public string Origin { get; set; }
        public string Barcode { get; set; }
        public string Unit { get; set; }
        public string UnitConvert { get; set; }
        public decimal? UnitRate { get; set; }
        public decimal? Org_Price { get; set; }
        public decimal? Sale_Price { get; set; }
        public decimal? Retail_Price { get; set; }
        public decimal? Quantity { get; set; }
        public decimal? CurrentCost { get; set; }
        public decimal? AverageCost { get; set; }
        public Nullable<int> Warranty { get; set; }
        public decimal? VAT_ID { get; set; }
        public decimal? ImportTax_ID { get; set; }
        public decimal? ExportTax_ID { get; set; }
        public decimal? LuxuryTax_ID { get; set; }
        public string Customer_ID { get; set; }
        public string Customer_Name { get; set; }
        public Nullable<short> CostMethod { get; set; }
        public decimal? MinStock { get; set; }
        public decimal? MaxStock { get; set; }
        public decimal? Discount { get; set; }
        public decimal? Commission { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public Nullable<bool> Expiry { get; set; }
        public decimal? LimitOrders { get; set; }
        public decimal? ExpiryValue { get; set; }
        public Nullable<bool> Batch { get; set; }
        public decimal? Depth { get; set; }
        public decimal? Height { get; set; }
        public decimal? Width { get; set; }
        public decimal? Thickness { get; set; }
        public string Size { get; set; }
        public byte[] Photo { get; set; }
        public string Currency_ID { get; set; }
        public decimal? ExchangeRate { get; set; }
        public string Stock_ID { get; set; }
        public string UserID { get; set; }
        public Nullable<bool> Serial { get; set; }
        public bool Active { get; set; }
    }
}
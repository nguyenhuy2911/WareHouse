export class GetProducts_Response {
    public Results: GetProduct_DTO[];
    public TotalRow: number;
    //constructor(
    //    public Results: Array<Product>,
    //    public TotalRow: number,
    //) 
    //{ }
}

export class GetProduct_DTO {
    constructor(
        public Product_ID: string,
        public Product_Name: string,
    ) { }
}


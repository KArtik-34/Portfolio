declare module '*.json' {
  const value: any;
  export default value;
}

interface SalesByCustomerType {
  customerType: string;
  sales: number;
}

interface TransactionsByCustomerType {
  customerType: string;
  transactions: number;
}

interface QuarterlyGrowthByRegion {
  quarter: string;
  Hamburg: number;
  Hessen: number;
  Saarland: number;
}

interface TopSellingProductByRegion {
  region: string;
  quantity: number;
  product: string;
}

declare module '@/data/salesByCustomerType.json' {
  const value: SalesByCustomerType[];
  export default value;
}

declare module '@/data/transactionsByCustomerType.json' {
  const value: TransactionsByCustomerType[];
  export default value;
}

declare module '@/data/quarterlyGrowthByRegion.json' {
  const value: QuarterlyGrowthByRegion[];
  export default value;
}

declare module '@/data/topSellingProductByRegion.json' {
  const value: TopSellingProductByRegion[];
  export default value;
} 
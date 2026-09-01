export interface SupplierOrderPayload {
  buyerSkuCode: string;
  customerNo: string;
  refId: string;
}

export interface SupplierOrderResponse {
  refId: string;
  status: "PENDING" | "SUCCESS" | "FAILED";
  message?: string;
  rawResponse?: Record<string, unknown>;
}

export interface TopUpProvider {
  name: string;
  order(payload: SupplierOrderPayload): Promise<SupplierOrderResponse>;
  checkBalance(): Promise<number>;
}

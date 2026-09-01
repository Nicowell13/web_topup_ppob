import { TopUpProvider, SupplierOrderPayload, SupplierOrderResponse } from "./types";

export class DigiflazzAdapter implements TopUpProvider {
  name = "digiflazz";

  async order(payload: SupplierOrderPayload): Promise<SupplierOrderResponse> {
    // Digiflazz API integration placeholder
    return {
      refId: payload.refId,
      status: "PENDING",
      message: "Order placed via Digiflazz adapter",
    };
  }

  async checkBalance(): Promise<number> {
    return 1000000;
  }
}

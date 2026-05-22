import { ref } from "vue";
import { useAppFetch } from "@/composables/useAppFetch";

interface ProductInfo {
  itemId: number;
  productName: string;
  shopName: string;
  price: number;
  sales: number;
  imageUrl: string;
  productLink: string;
  rating: string;
  commission: number;
  sellerComFinal: number;
  shopeeComFinal: number;
  isXtra: boolean;
  hasSellerCommission: boolean;
  hasShopeeCommission: boolean;
  isCapped: boolean;
  isLimitCap: boolean;
  cap: number;
  capRaw: number;
  capAfterRate: number;
  lastUpdate: string;
  dataSource: string;
  priceStats?: {
    currentPrice: number;
    minPrice: number;
    maxPrice: number;
    avgPrice: number;
    priceChange7d: number;
    priceChange30d: number;
    lastPriceUpdate: string;
    lowestPriceDate: string | null;
    highestPriceDate: string | null;
  };
  latestPriceHistory?: {
    price: number;
    originalPrice: number;
    discountPercent: number;
    currency: string;
    flashSale: boolean;
    promotionId: string | null;
    stockAvailable: number;
    recordedDate: string;
    recordedTime: string;
  };
  commission_min_rate?: number;
  commission_max_rate?: number;
}

interface ConvertResponse {
  success?: boolean;
  shortLink?: string;
  affiliateLink?: string;
  data?: {
    shortLink?: string;
  };
  productInfo?: ProductInfo;
  message?: string;
}

export function useShopeeApi() {
  const resultLink = ref<string>("");
  const productInfo = ref<ProductInfo | null>(null);
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Validation function for Shopee link formats
  const validateShopeeUrl = (url: string): boolean => {
    if (!url || url.trim() === "") return false;

    // Check if it's a valid URL structure or a Shopee short link pattern
    const shopeeRegex = /(shopee\.vn|shp\.ee|shope\.ee|shopee\.co\.id|shopee\.sg)/i;

    return shopeeRegex.test(url);
  };

  const convertUrl = async (rawUrl: string) => {
    // Reset states
    resultLink.value = "";
    error.value = null;

    const trimmedUrl = rawUrl.trim();

    // Validate link
    if (!validateShopeeUrl(trimmedUrl)) {
      error.value = "Vui lòng nhập đường dẫn Shopee hợp lệ! (Ví dụ: shopee.vn/... hoặc shp.ee/...)";
      return false;
    }

    isLoading.value = true;

    try {
      const { api } = useAppFetch();

      // Call Elysia API via Axios instance (relative path triggers Nitro proxy to bypass CORS)
      const response = await api.post<ConvertResponse>("/convert", {
        originalLink: trimmedUrl,
      });

      const responseData = response.data;

      // Flexible extraction to handle various response structures
      const affiliateLink = responseData.shortLink || responseData.affiliateLink || responseData.data?.shortLink;

      if (affiliateLink) {
        resultLink.value = affiliateLink;
        productInfo.value = responseData.productInfo || null;
        return true;
      } else {
        throw new Error(responseData.message || "Không thể lấy được link từ máy chủ.");
      }
    } catch (err: any) {
      console.error("API error:", err);
      // Retrieve parsed error message from Axios interceptor
      const errMsg = err?.message || "Không thể kết nối đến máy chủ. Vui lòng thử lại sau!";
      debugger
      error.value = `Lỗi chuyển đổi: ${errMsg}`;
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  const clearStates = () => {
    resultLink.value = "";
    productInfo.value = null;
    error.value = null;
    isLoading.value = false;
  };

  return {
    resultLink,
    productInfo,
    isLoading,
    error,
    convertUrl,
    clearStates,
    validateShopeeUrl,
  };
}

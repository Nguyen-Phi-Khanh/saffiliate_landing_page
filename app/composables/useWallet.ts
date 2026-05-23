import { ref } from 'vue';

export interface WalletData {
  availableBalance: number;
  pendingBalance: number;
  totalPaid: number;
}

export function useWallet() {
  const { api } = useAppFetch();
  
  const walletData = ref<WalletData>({
    availableBalance: 0,
    pendingBalance: 0,
    totalPaid: 0
  });
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchWallet = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await api.get('/wallet');
      // Do useAppFetch interceptor xử lý: response._data = response._data.data
      // nên res.data chính là object { availableBalance, pendingBalance, totalPaid }
      if (res.data) {
        walletData.value = {
          availableBalance: res.data.availableBalance || 0,
          pendingBalance: res.data.pendingBalance || 0,
          totalPaid: res.data.totalPaid || 0,
        };
      }
    } catch (err: any) {
      error.value = err?.message || 'Có lỗi xảy ra khi tải thông tin ví';
      console.error('useWallet error:', err);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    walletData,
    isLoading,
    error,
    fetchWallet
  };
}

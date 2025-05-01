
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { fetchMarketData, mapMockDataToCoinGeckoFormat } from "@/services/marketDataService";

export const useCryptoMarketData = (chain?: string) => {
  const { toast } = useToast();

  return useQuery({
    queryKey: ["cryptoMarketData", chain],
    queryFn: () => fetchMarketData(chain),
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    initialData: mapMockDataToCoinGeckoFormat(),
    meta: {
      onError: () => {
        toast({
          title: "API Rate Limit Reached",
          description: "Using static data until API becomes available again.",
          duration: 5000,
        });
      }
    }
  });
};


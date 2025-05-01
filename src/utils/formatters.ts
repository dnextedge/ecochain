
export const formatNumber = (num: number, options: Intl.NumberFormatOptions = {}): string => {
  return new Intl.NumberFormat('en-US', options).format(num);
};

export const formatCurrency = (amount: number, currency = 'USD', decimals = 2): string => {
  // List of valid ISO 4217 currency codes that Intl.NumberFormat supports
  const validCurrencyCodes = ['USD', 'EUR', 'GBP', 'JPY', 'CNY', 'AUD', 'CAD', 'CHF', 'AED', 'INR'];
  
  // Check if the provided currency is a valid ISO currency code
  if (validCurrencyCodes.includes(currency)) {
    return formatNumber(amount, { 
      style: 'currency', 
      currency, 
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals 
    });
  } else {
    // If it's not a valid ISO currency code (likely a crypto code), use a simpler format
    return `${formatNumber(amount, { 
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    })} ${currency}`;
  }
};

export const formatCrypto = (amount: number, symbol: string): string => {
  let decimals = 2;
  
  // Use more decimals for lower value crypto
  if (amount < 1) {
    decimals = 4;
  }
  if (amount < 0.01) {
    decimals = 6;
  }
  
  return `${formatNumber(amount, { 
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })} ${symbol}`;
};

export const formatCompactNumber = (num: number): string => {
  return formatNumber(num, { notation: 'compact' });
};

export const formatPercentage = (percent: number): string => {
  return formatNumber(percent, { 
    style: 'percent', 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'exceptZero'
  });
};

export const formatMarketCap = (marketCap: number): string => {
  return formatNumber(marketCap, { 
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  });
};

export const shortenAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

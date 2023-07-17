
interface Quotes {
    USD: {
        price: number;
        percent_change_15m: number;
        percent_change_30m: number;
        percent_change_1h: number;
        percent_change_6h: number;
        percent_change_12h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        percent_change_30d: number;
        percent_change_1y: number;
        market_cap: number;
        volume_24h: number;
        percent_from_price_ath: number;
        ath_date: string;
        ath_price: number;
    }
}

export interface CryptoCurrency {
    id: string;
    symbol: string;
    name: string;
    circulating_supply: number;
    rank: number;
    quotes: Quotes;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
}
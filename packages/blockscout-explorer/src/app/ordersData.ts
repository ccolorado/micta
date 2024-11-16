import { Order, OrderBalance, OrderKind } from "@/types";

export const ordersData: Order[] = [
    {
        sellToken: "USDC", // USDC
        buyToken: "ETH", // ETH
        sellAmount: "10000", // 10,000 USDC
        buyAmount: "5", // 5 ETH
        validTo: 1704153600, // Expiration date
        appData: "0x1234",
        feeAmount: "10", // 10 USDC fee
        kind: OrderKind.SELL,
        partiallyFillable: true,
        sellTokenBalance: OrderBalance.ERC20, // USDC is ERC20
        buyTokenBalance: OrderBalance.ETH,
        chain: "arbitrum", // Arbitrary chain
    },
    {
        sellToken: "USDC", // USDC
        buyToken: "ETH", // ETH
        sellAmount: "5000", // 5,000 USDC
        buyAmount: "2.5", // 2.5 ETH
        validTo: 1704159600,
        appData: "0x5678",
        feeAmount: "5", // 5 USDC fee
        kind: OrderKind.SELL,
        partiallyFillable: false,
        sellTokenBalance: OrderBalance.ERC20, // USDC is ERC20
        buyTokenBalance: OrderBalance.ETH,
        chain: "ethereum", // Ethereum chain
    },
    {
        sellToken: "EURC", // EURC
        buyToken: "ETH", // ETH
        sellAmount: "2000", // 2,000 EURC
        buyAmount: "1", // 1 ETH
        validTo: 1704163200,
        appData: "0x90ab",
        feeAmount: "1", // 1 EURC fee
        kind: OrderKind.SELL,
        partiallyFillable: true,
        sellTokenBalance: OrderBalance.ERC20, // EURC is ERC20
        buyTokenBalance: OrderBalance.ETH,
        chain: "arbitrum", // Arbitrum chain
    },
    {
        sellToken: "USDC", // USDC
        buyToken: "ETH", // ETH
        sellAmount: "15000", // 15,000 USDC
        buyAmount: "7.5", // 7.5 ETH
        validTo: 1704166800,
        appData: "0xcdef",
        feeAmount: "15", // 15 USDC fee
        kind: OrderKind.SELL,
        partiallyFillable: false,
        sellTokenBalance: OrderBalance.ERC20, // USDC is ERC20
        buyTokenBalance: OrderBalance.ETH,
        chain: "ethereum", // Ethereum chain
    },
    {
        sellToken: "EURC", // EURC
        buyToken: "ETH", // ETH
        sellAmount: "5000", // 5,000 EURC
        buyAmount: "2.5", // 2.5 ETH
        validTo: 1704170400,
        appData: "0x2345",
        feeAmount: "2", // 2 EURC fee
        kind: OrderKind.SELL,
        partiallyFillable: true,
        sellTokenBalance: OrderBalance.ERC20, // EURC is ERC20
        buyTokenBalance: OrderBalance.ETH,
        chain: "arbitrum", // Arbitrum chain
    },
    {
        sellToken: "USDC", // USDC
        buyToken: "ETH", // ETH
        sellAmount: "25000", // 25,000 USDC
        buyAmount: "12.5", // 12.5 ETH
        validTo: 1704174000,
        appData: "0x6789",
        feeAmount: "25", // 25 USDC fee
        kind: OrderKind.SELL,
        partiallyFillable: false,
        sellTokenBalance: OrderBalance.ERC20, // USDC is ERC20
        buyTokenBalance: OrderBalance.ETH,
        chain: "ethereum", // Ethereum chain
    },
    {
        sellToken: "EURC", // EURC
        buyToken: "ETH", // ETH
        sellAmount: "10000", // 10,000 EURC
        buyAmount: "5", // 5 ETH
        validTo: 1704177600,
        appData: "0x2345",
        feeAmount: "5", // 5 EURC fee
        kind: OrderKind.SELL,
        partiallyFillable: true,
        sellTokenBalance: OrderBalance.ERC20, // EURC is ERC20
        buyTokenBalance: OrderBalance.ETH,
        chain: "arbitrum", // Arbitrum chain
    },
    {
        sellToken: "USDC", // USDC
        buyToken: "ETH", // ETH
        sellAmount: "7500", // 7,500 USDC
        buyAmount: "3.75", // 3.75 ETH
        validTo: 1704181200,
        appData: "0x7890",
        feeAmount: "7.5", // 7.5 USDC fee
        kind: OrderKind.SELL,
        partiallyFillable: false,
        sellTokenBalance: OrderBalance.ERC20, // USDC is ERC20
        buyTokenBalance: OrderBalance.ETH,
        chain: "ethereum", // Ethereum chain
    },
    {
        sellToken: "EURC", // EURC
        buyToken: "ETH", // ETH
        sellAmount: "20000", // 20,000 EURC
        buyAmount: "10", // 10 ETH
        validTo: 1704184800,
        appData: "0xabc0",
        feeAmount: "10", // 10 EURC fee
        kind: OrderKind.SELL,
        partiallyFillable: true,
        sellTokenBalance: OrderBalance.ERC20, // EURC is ERC20
        buyTokenBalance: OrderBalance.ETH,
        chain: "arbitrum", // Arbitrum chain
    },
    {
        sellToken: "USDC", // USDC
        buyToken: "ETH", // ETH
        sellAmount: "12000", // 12,000 USDC
        buyAmount: "6", // 6 ETH
        validTo: 1704188400,
        appData: "0xdef0",
        feeAmount: "12", // 12 USDC fee
        kind: OrderKind.SELL,
        partiallyFillable: false,
        sellTokenBalance: OrderBalance.ERC20, // USDC is ERC20
        buyTokenBalance: OrderBalance.ETH,
        chain: "ethereum", // Ethereum chain
    }
];

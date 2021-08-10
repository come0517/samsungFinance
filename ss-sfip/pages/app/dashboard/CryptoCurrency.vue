<template>
    <v-row>
        <v-col cols="12" lg="8" md="12">
            <v-row>
                <v-col cols="12" md="4">
                    <!-- test -->
                    <crypto-currency-card
                        bg-card-color="primary"
                        heading="Bitcoin"
                        sub-heading="49.32 USDT"
                        main-icon-text-color="primary--text text--lighten-2"
                        main-icon-name="mdi-numeric-9-plus-circle-outline"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <crypto-currency-card
                        bg-card-color="info"
                        heading="Etherium"
                        sub-heading="73.90 USDT"
                        main-icon-text-color="info--text text--lighten-2"
                        main-icon-name="mdi-numeric-9-plus-circle-outline"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <crypto-currency-card
                        bg-card-color="warning"
                        heading="Doge Coin"
                        sub-heading="14.30 USDT"
                        main-icon-text-color="warning--text text--lighten-2"
                        main-icon-name="mdi-numeric-9-plus-circle-outline"
                    />
                </v-col>
                <v-col cols="12">
                    <chart-card title="Last Updates" button-text="last 7 days">
                        <template slot="chart">
                            <div id="basicArea-chart" style="min-height: 365px">
                                <apexchart
                                    type="area"
                                    height="350"
                                    :options="customChartEight.chartOptions"
                                    :series="customChartEight.series"
                                />
                            </div>
                        </template>
                    </chart-card>
                </v-col>
                <v-col cols="12">
                    <base-card>
                        <v-card-title>Market Depth</v-card-title>
                        <v-card-text>
                            <apexchart
                                type="line"
                                height="250"
                                :options="marketChart.chartOptions"
                                :series="marketChart.series"
                            />
                        </v-card-text>
                    </base-card>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" lg="4" md="12">
            <base-card>
                <v-card-text>
                    <v-tabs v-model="tab">
                        <v-tab v-for="item in items" :key="item.tab">
                            {{ item.tab }}
                        </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab">
                        <v-tab-item v-for="item in items" :key="item.tab">
                            <v-card flat>
                                <v-card-text>
                                    <v-simple-table>
                                        <thead>
                                            <tr>
                                                <th class="text-left">
                                                    Coin
                                                </th>
                                                <th class="text-left">
                                                    Last Price
                                                </th>
                                                <th class="text-left">
                                                    Change
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(itemTwo,
                                                index) in item.content"
                                                :key="index"
                                            >
                                                <td>{{ itemTwo.coin }}</td>
                                                <td>
                                                    <p
                                                        :class="
                                                            getColor(
                                                                itemTwo.lastPrice
                                                            )
                                                        "
                                                    >
                                                        {{ itemTwo.lastPrice }}
                                                    </p>
                                                </td>
                                                <td>
                                                    {{ itemTwo.number }}
                                                    <v-chip
                                                        :class="
                                                            changeColor(
                                                                itemTwo.number
                                                            )
                                                        "
                                                        small
                                                        label
                                                        class="ml-2"
                                                    >
                                                        {{ itemTwo.percent }}
                                                    </v-chip>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" lg="3" md="6">
            <base-card class="h-full">
                <v-card-text>
                    <div
                        class="d-flex justify-space-between align-center flex-wrap mb-10"
                    >
                        <p class="mb-0 font-weight-regular pr-6">
                            Buy:<span
                                class="success--text font-weight-medium ml-1"
                                >USDT</span
                            >
                        </p>
                        <p class="mb-0 font-weight-regular">
                            Available:<span
                                class="success--text font-weight-medium ml-1"
                                >0.0 USDT</span
                            >
                        </p>
                    </div>
                    <v-text-field label="Price (USDIT)" required />
                    <v-text-field label="Amount (BTC)" required />
                    <v-text-field label="Total (BTC)" required />
                    <v-btn block color="success white--text">
                        Buy
                    </v-btn>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" lg="3" md="6">
            <base-card class="h-full">
                <v-card-text>
                    <div
                        class="d-flex justify-space-between align-center flex-wrap mb-10"
                    >
                        <p class="mb-0 font-weight-regular pr-6">
                            Sell:<span
                                class="danger--text font-weight-medium ml-1"
                                >USDT</span
                            >
                        </p>
                        <p class="mb-0 font-weight-regular">
                            Available:<span
                                class="danger--text font-weight-medium ml-1"
                                >0.0 USDT</span
                            >
                        </p>
                    </div>
                    <v-text-field label="Price (USDIT)" required />
                    <v-text-field label="Amount (BTC)" required />
                    <v-text-field label="Total (BTC)" required />
                    <v-btn block color="danger white--text">
                        Sell
                    </v-btn>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" lg="6" md="12">
            <base-card>
                <v-card-text>
                    <v-tabs v-model="order">
                        <v-tab v-for="item in orders" :key="item.orders">
                            {{ item.tab }}
                        </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="order">
                        <v-tab-item v-for="item in orders" :key="item.tab">
                            <v-card flat>
                                <v-card-text>
                                    <v-simple-table>
                                        <thead width="200">
                                            <tr>
                                                <th class="text-left">
                                                    Coin
                                                </th>
                                                <th class="text-left">
                                                    Last Price
                                                </th>
                                                <th
                                                    class="text-left"
                                                    width="200px"
                                                >
                                                    Change
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(itemTwo,
                                                index) in item.content"
                                                :key="index"
                                            >
                                                <td>{{ itemTwo.coin }}</td>
                                                <td>
                                                    <p
                                                        :class="
                                                            getColor(
                                                                itemTwo.lastPrice
                                                            )
                                                        "
                                                    >
                                                        {{ itemTwo.lastPrice }}
                                                    </p>
                                                </td>
                                                <td>
                                                    {{ itemTwo.number }}
                                                    <v-chip
                                                        :class="
                                                            changeColor(
                                                                itemTwo.number
                                                            )
                                                        "
                                                        small
                                                        label
                                                        class="ml-2"
                                                    >
                                                        {{ itemTwo.percent }}
                                                    </v-chip>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
import CryptoCurrencyCard from '@/components/card/CryptoCurrencyCard'
import {priceChart, marketChart} from '@/data/cryptoCurrency'
import ChartCard from '@/components/card/ChartCard'

import {
    customChartOne,
    customChartTwo,
    customChartThree,
    customChartFour,
    customChartFive,
    customChartSix,
    customChartSeven,
    customChartEight,
    customChartNine,
    customChartTen,
    customChartEleven,
    customChartTwelve,
    customChartThirteen,
    customChartFourteen,
    customChartFifteen,
    customChartSixteen,
    customChartSeventeen,
    customChartEighteen
} from '@/data/apexChart'
export default {
    name: 'crypto-currency',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'crypto-currency'
    },
    components: {
        CryptoCurrencyCard,
        ChartCard
    },
    data() {
        return {
            customChartOne,
            customChartTwo,
            customChartThree,
            customChartFour,
            customChartFive,
            customChartSix,
            customChartSeven,
            customChartEight,
            customChartNine,
            customChartTen,
            customChartEleven,
            customChartTwelve,
            customChartThirteen,
            customChartFourteen,
            customChartFifteen,
            customChartSixteen,
            customChartSeventeen,
            customChartEighteen,
            priceChart,
            marketChart,
            tab: null,
            items: [
                {
                    tab: 'USDT',
                    content: [
                        {
                            coin: 'BTC',
                            lastPrice: 4000.32,
                            number: 6.4,
                            percent: '(-3.2%)'
                        },
                        {
                            coin: 'LTC',
                            lastPrice: 7826.0,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'ETH',
                            lastPrice: 3456.99,
                            number: 3.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'DOGE',
                            lastPrice: 1782.99,
                            number: 2.4,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'XMR',
                            lastPrice: 2398.54,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'ERC20',
                            lastPrice: 3456.99,
                            number: 5.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'CFT',
                            lastPrice: 7826.0,
                            number: 6.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'RIF',
                            lastPrice: 4000.32,
                            number: 3.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'NEO',
                            lastPrice: 3456.99,
                            number: 3.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'MXM',
                            lastPrice: 1782.99,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'LTC',
                            lastPrice: 7826.0,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'ETH',
                            lastPrice: 3456.99,
                            number: 3.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'DOGE',
                            lastPrice: 1782.99,
                            number: 2.4,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'XMR',
                            lastPrice: 2398.54,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'CFT',
                            lastPrice: 7826.0,
                            number: 6.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'RIF',
                            lastPrice: 4000.32,
                            number: 3.5,
                            percent: '(-5.2%)'
                        }
                    ]
                },
                {
                    tab: 'Market Trading',
                    content: [
                        {
                            coin: 'BTC',
                            lastPrice: 4000.32,
                            number: 6.4,
                            percent: '(-3.2%)'
                        },
                        {
                            coin: 'LTC',
                            lastPrice: 7826.0,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'ETH',
                            lastPrice: 3456.99,
                            number: 3.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'DOGE',
                            lastPrice: 1782.99,
                            number: 2.4,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'XMR',
                            lastPrice: 2398.54,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'ERC20',
                            lastPrice: 3456.99,
                            number: 5.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'CFT',
                            lastPrice: 7826.0,
                            number: 6.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'RIF',
                            lastPrice: 4000.32,
                            number: 3.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'NEO',
                            lastPrice: 3456.99,
                            number: 3.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'MXM',
                            lastPrice: 1782.99,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'LTC',
                            lastPrice: 7826.0,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'ETH',
                            lastPrice: 3456.99,
                            number: 3.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'DOGE',
                            lastPrice: 1782.99,
                            number: 2.4,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'XMR',
                            lastPrice: 2398.54,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'CFT',
                            lastPrice: 7826.0,
                            number: 6.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'RIF',
                            lastPrice: 4000.32,
                            number: 3.5,
                            percent: '(-5.2%)'
                        }
                    ]
                }
            ],
            order: null,
            orders: [
                {
                    tab: 'Active Orders',
                    content: [
                        {
                            coin: 'BTC',
                            lastPrice: 4000.32,
                            number: 6.4,
                            percent: '(-3.2%)'
                        },
                        {
                            coin: 'LTC',
                            lastPrice: 7826.0,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'ETH',
                            lastPrice: 3456.99,
                            number: 3.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'DOGE',
                            lastPrice: 1782.99,
                            number: 2.4,
                            percent: '(-5.2%)'
                        }
                    ]
                },
                {
                    tab: 'Closed Orders',
                    content: [
                        {
                            coin: 'BTC',
                            lastPrice: 4000.32,
                            number: 6.4,
                            percent: '(-3.2%)'
                        },
                        {
                            coin: 'LTC',
                            lastPrice: 7826.0,
                            number: 2.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'ETH',
                            lastPrice: 3456.99,
                            number: 3.5,
                            percent: '(-5.2%)'
                        },
                        {
                            coin: 'ETH',
                            lastPrice: 3456.99,
                            number: 3.5,
                            percent: '(-5.2%)'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        getColor(lastPrice) {
            if (lastPrice > 4000) return 'danger--text'
            else if (lastPrice > 1000) return 'success--text'
            else return 'priamry--text'
        },
        changeColor(number) {
            if (number > 4) return 'danger white--text'
            else if (number <= 3) return 'success white--text'
            else return 'primary white--text'
        }
    }
}
</script>

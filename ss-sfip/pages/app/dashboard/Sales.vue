<template>
    <v-row>
        <v-col cols="12" md="4">
            <test-card
                chip-color="primary lighten-5"
                title="Sales"
                amount="950,00"
                footer-text="Over last month 2.4%"
                footer-class="primary--text"
                card-icon="mdi-chart-line-variant"
                color-icon="primary--text"
            />
        </v-col>
        <v-col cols="12" md="4">
            <test-card
                chip-color="success lighten-5"
                title="Items"
                amount="430,00"
                footer-text="Over last month 4.4%"
                footer-class="success--text"
                card-icon="mdi-format-list-bulleted"
                color-icon="success--text"
            />
        </v-col>
        <v-col cols="12" md="4">
            <test-card
                chip-color="info lighten-5"
                title="Items"
                amount="278,00"
                footer-text="Over last month 7.4%"
                footer-class="info--text"
                card-icon="mdi-account-multiple"
                color-icon="info--text"
            />
        </v-col>

        <v-col cols="12" md="6" lg="8">
            <base-card>
                <v-card-title>Monthly Recap Statistics</v-card-title>
                <v-card-text>
                    <apexchart
                        type="line"
                        height="350"
                        :options="gradientLineChart.chartOptions"
                        :series="gradientLineChart.series"
                    />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="6" lg="4">
            <base-card style="height:100%">
                <v-card-title>Sales By Countries</v-card-title>
                <v-card-text>
                    <apexchart
                        type="pie"
                        height="350"
                        width="100%"
                        :options="salesByCountries.chartOptions"
                        :series="salesByCountries.series"
                    />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" lg="3" md="6">
            <price-card
                price-title="Total Profit"
                amount="$42000"
                card-icon="mdi-call-made"
                footer-text="Profit in this Period"
                chip-color="success lighten-5"
                chip-text="+33.57%"
                chip-text-color="success--text"
            />
        </v-col>
        <v-col cols="12" lg="3" md="6">
            <price-card
                price-title="Total Expense"
                amount="$22000"
                card-icon="mdi-call-received"
                color-icon="danger--text"
                chip-color="danger lighten-5"
                footer-text="Profit in this Period"
                chip-text="+13.57%"
                chip-text-color="danger--text"
            />
        </v-col>
        <v-col cols="12" lg="3" md="6">
            <price-card
                price-title="Total Expense"
                amount="$72000"
                card-icon="mdi-call-made"
                color-icon="info--text"
                chip-color="info lighten-5"
                footer-text="Profit in this Period"
                chip-text="+13.57%"
                chip-text-color="info--text"
            />
        </v-col>
        <v-col cols="12" lg="3" md="6">
            <price-card
                price-title="Total Expense"
                amount="$62000"
                card-icon="mdi-call-received"
                color-icon="warning--text"
                chip-color="warning lighten-5"
                footer-text="Profit in this Period"
                chip-text="+13.57%"
                chip-text-color="warning--text"
            />
        </v-col>
        <v-col cols="12">
            <base-card>
                <div class="d-flex align-center justify-space-between pr-3">
                    <v-card-title>Visitors Analytic</v-card-title>
                    <div>
                        <v-menu left bottom>
                            <template v-slot:activator="{on}">
                                <v-btn icon v-on="on">
                                    <v-icon>mdi-dots-horizontal</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                    v-for="n in 4"
                                    :key="n"
                                    @click="() => {}"
                                >
                                    <v-list-item-title
                                        >Option {{ n }}</v-list-item-title
                                    >
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
                <v-card-text>
                    <apexchart
                        type="bar"
                        width="100%"
                        height="365"
                        :options="visitorsAnalytic.chartOptions"
                        :series="visitorsAnalytic.series"
                    />
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="8">
            <base-card>
                <div class="d-flex align-center justify-space-between pr-3">
                    <v-card-title>Manage Order</v-card-title>
                    <div>
                        <v-menu left bottom>
                            <template v-slot:activator="{on}">
                                <v-btn icon v-on="on">
                                    <v-icon>mdi-dots-horizontal</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                    v-for="n in 4"
                                    :key="n"
                                    @click="() => {}"
                                >
                                    <v-list-item-title
                                        >Option {{ n }}</v-list-item-title
                                    >
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
                <v-card-text>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">Order ID</th>
                                    <th class="text-left">Customer</th>
                                    <th class="text-left">Date & Time</th>
                                    <th class="text-left">Price</th>
                                    <th class="text-left">Status</th>
                                    <th class="text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in desserts" :key="item.name">
                                    <td>{{ item.orderId }}</td>
                                    <td class="text-no-wrap">
                                        <div class="d-flex align-center">
                                            <v-avatar size="36px" class="mr-2">
                                                <v-img :src="item.img" alt />
                                            </v-avatar>
                                            <p class="ma-0">
                                                {{ item.customer }}
                                            </p>
                                        </div>
                                    </td>
                                    <td class="text-no-wrap">
                                        {{ item.date }}
                                    </td>
                                    <td>
                                        <h6 class="text-success">
                                            ${{ item.price }}
                                        </h6>
                                    </td>
                                    <td>
                                        <div class="d-flex align-center">
                                            <v-sheet
                                                width="20"
                                                height="20"
                                                class="success lighten-4 rounded-circle  d-flex  align-center justify-center mr-2"
                                            >
                                                <v-icon
                                                    class="success--text caption"
                                                    >mdi-check</v-icon
                                                >
                                            </v-sheet>
                                            <span>{{ item.status }}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <v-menu left bottom>
                                            <template v-slot:activator="{on}">
                                                <v-btn icon v-on="on">
                                                    <v-icon class="text-primary"
                                                        >mdi-dots-horizontal</v-icon
                                                    >
                                                </v-btn>
                                            </template>

                                            <v-list>
                                                <v-list-item @click="() => {}">
                                                    <v-list-item-title
                                                        >View
                                                        Order</v-list-item-title
                                                    >
                                                </v-list-item>
                                                <v-list-item @click="() => {}">
                                                    <v-list-item-title
                                                        >Refund</v-list-item-title
                                                    >
                                                </v-list-item>
                                                <v-list-item @click="() => {}">
                                                    <v-list-item-title
                                                        >Delete</v-list-item-title
                                                    >
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>
            </base-card>
        </v-col>
        <v-col cols="12" md="4">
            <base-card>
                <div class="d-flex align-center justify-space-between pr-3">
                    <v-card-title>Recent Transactions</v-card-title>
                    <div>
                        <v-menu left bottom>
                            <template v-slot:activator="{on}">
                                <v-btn icon v-on="on">
                                    <v-icon>mdi-dots-horizontal</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item
                                    v-for="n in 4"
                                    :key="n"
                                    @click="() => {}"
                                >
                                    <v-list-item-title
                                        >Option {{ n }}</v-list-item-title
                                    >
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
                <v-card-text>
                    <v-list subheader>
                        <v-list-item v-for="item in items" :key="item.title">
                            <v-list-item-avatar>
                                <v-img :src="item.img" alt="asdasd" />
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.title" />
                                <v-list-item-subtitle v-text="item.subtitle" />
                            </v-list-item-content>

                            <v-list-item-action-text>
                                <h6 class="text-success">$ {{ item.text }}</h6>
                            </v-list-item-action-text>
                        </v-list-item>
                    </v-list>
                    <v-btn block class="my-2" color="primary" dark
                        >View More</v-btn
                    >
                </v-card-text>
            </base-card>
        </v-col>
    </v-row>
</template>
<script>
import TestCard from '@/components/card/TestCard'
import PriceCard from '@/components/card/PriceCard'
import {
    gradientLineChart,
    salesByCountries,
    visitorsAnalytic
} from '@/data/sales2'
export default {
    name: 'Sales',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Sales'
    },
    components: {
        'test-card': TestCard,
        'price-card': PriceCard
    },
    data() {
        return {
            gradientLineChart,
            salesByCountries,
            visitorsAnalytic,
            series: [
                {
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ],
            desserts: [
                {
                    orderId: '#0032',
                    img: require('@/assets/images/faces/1.jpg'),
                    customer: 'Jhon Doe',
                    date: '22 Mar 20, 6:30 PM',
                    price: '950',
                    status: 'Paid',
                    actions: 'asd'
                },
                {
                    orderId: '#0032',
                    img: require('@/assets/images/faces/2.jpg'),
                    customer: 'Jhon Doe',
                    date: '22 Mar 20, 6:30 PM',
                    price: '950',
                    status: 'Paid',
                    actions: 'asd'
                },
                {
                    orderId: '#0032',
                    img: require('@/assets/images/faces/3.jpg'),
                    customer: 'Jhon Doe',
                    date: '22 Mar 20, 6:30 PM',
                    price: '950',
                    status: 'Paid',
                    actions: 'asd'
                },
                {
                    orderId: '#0032',
                    img: require('@/assets/images/faces/4.jpg'),
                    customer: 'Jhon Doe',
                    date: '22 Mar 20, 6:30 PM',
                    price: '950',
                    status: 'Paid',
                    actions: 'asd'
                }
            ],
            items: [
                {
                    img: require('@/assets/images/faces/1.jpg'),
                    title: 'Dan Fox',
                    subtitle: 'ID: #02298',
                    text: '3200'
                },
                {
                    img: require('@/assets/images/faces/2.jpg'),
                    title: 'Jamie Fox',
                    subtitle: 'ID: #02298',
                    text: '3200'
                },
                {
                    img: require('@/assets/images/faces/3.jpg'),
                    title: 'Jhon Fox',
                    subtitle: 'ID: #02298',
                    text: '3200'
                }
            ]
        }
    }
}
</script>
>

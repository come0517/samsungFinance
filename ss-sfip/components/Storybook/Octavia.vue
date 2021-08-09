<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-one-card
          main-icon-name="mdi-hand-pointing-up"
          main-icon-background-color-class="primary lighten-5"
          main-icon-text-color="primary--text"
          sub-heading-text="Impressions"
          heading-text="9.2k"
          bottom-button-text="10.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-primary"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-one-card
          floating-button-icon-name="mdi-plus"
          floating-button-icon-text-color="white--text"
          floating-button-background-color="success "
          main-icon-name="mdi-hand-pointing-up"
          main-icon-background-color-class="success lighten-5"
          main-icon-text-color="success--text"
          sub-heading-text="Impressions"
          heading-text="9.2k"
          bottom-button-text="10.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-success"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-one-card
          floating-button-icon-name="mdi-plus"
          floating-button-icon-text-color="white--text"
          floating-button-background-color="info"
          main-icon-name="mdi-hand-pointing-up"
          main-icon-background-color-class="info lighten-5"
          main-icon-text-color="info--text"
          sub-heading-text="Visitors"
          heading-text="4.2k"
          bottom-button-text="20.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-info"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-one-card
          floating-button-icon-name="mdi-plus"
          floating-button-icon-text-color="white--text"
          floating-button-background-color="warning"
          main-icon-name="mdi-hand-pointing-up"
          main-icon-background-color-class="warning lighten-5"
          main-icon-text-color="warning--text"
          sub-heading-text="Visitors"
          heading-text="4.2k"
          bottom-button-text="20.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-warning"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex pr-1 justify-space-between">
          <div class="d-flex align-center">
            <h5 class="mb-0 mr-2 font-weight-medium">Most</h5>
            <a href="#" class="font-weight-medium">Recent Media</a>
          </div>
          <div>
            <v-menu left bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                  <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card>
          <v-img
            height="300"
            contain
            src="@/assets/images/illustrations/undraw_Designer_by46.svg"
          />
          <v-card-actions class="pa-4 d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon class="body-1 mr-1">mdi-cards-heart</v-icon>
              <v-card-subtitle class="pa-0 mr-2">2.3k</v-card-subtitle>
              <v-icon class="body-1 mr-1">mdi-comment-text</v-icon>
              <v-card-subtitle class="pa-0">900</v-card-subtitle>
            </div>
            <v-card-subtitle class="pa-0">23 days ago</v-card-subtitle>
          </v-card-actions>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card>
          <v-img
            height="300"
            contain
            src="@/assets/images/illustrations/undraw_marilyn_v73y.svg"
          />
          <v-card-actions class="pa-4 d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon class="body-1 mr-1">mdi-cards-heart</v-icon>
              <v-card-subtitle class="pa-0 mr-2">2.3k</v-card-subtitle>
              <v-icon class="body-1 mr-1">mdi-comment-text</v-icon>
              <v-card-subtitle class="pa-0">900</v-card-subtitle>
            </div>
            <v-card-subtitle class="pa-0">23 days ago</v-card-subtitle>
          </v-card-actions>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card>
          <v-img
            height="300"
            contain
            src="@/assets/images/illustrations/undraw_home_run_oerh.svg"
          />
          <v-card-actions class="pa-4 d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon class="body-1 mr-1">mdi-cards-heart</v-icon>
              <v-card-subtitle class="pa-0 mr-2">2.3k</v-card-subtitle>
              <v-icon class="body-1 mr-1">mdi-comment-text</v-icon>
              <v-card-subtitle class="pa-0">900</v-card-subtitle>
            </div>
            <v-card-subtitle class="pa-0">23 days ago</v-card-subtitle>
          </v-card-actions>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <base-card>
          <v-img
            height="300"
            contain
            src="@/assets/images/illustrations/undraw_successful_purchase_uyin.svg"
          />
          <v-card-actions class="pa-4 d-flex justify-space-between">
            <div class="d-flex align-center">
              <v-icon class="body-1 mr-1">mdi-cards-heart</v-icon>
              <v-card-subtitle class="pa-0 mr-2">2.3k</v-card-subtitle>
              <v-icon class="body-1 mr-1">mdi-comment-text</v-icon>
              <v-card-subtitle class="pa-0">900</v-card-subtitle>
            </div>
            <v-card-subtitle class="pa-0">23 days ago</v-card-subtitle>
          </v-card-actions>
        </base-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <base-card class>
          <div class="d-flex align-center justify-space-between pr-2">
            <v-card-title>Follower Growth</v-card-title>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-row>
            <v-col cols="12" md="12" lg="5" class="d-flex">
              <div class="d-flex justify-center flex-column w-full">
                <div class="px-6 d-flex align-center">
                  <div class="flex-grow-1">
                    <h2 class="font-weight-bold display-2 ma-0">
                      4,829
                    </h2>
                    <p class="mb-4 body-2">
                      Gained Followers (last 360 days)
                    </p>
                  </div>
                  <div>
                    <div class="d-flex align-center mb-3">
                      <v-sheet class="success lighten-5 px-1 mr-2 rounded">
                        <v-icon class="success--text caption"
                          >mdi-call-made</v-icon
                        >
                      </v-sheet>
                      <p class="ma-0 heading-muted">
                        You have a
                        <span class="text-success mr-1">20% Growth</span>compare
                        to last year
                      </p>
                    </div>
                    <div class="d-flex align-center">
                      <v-sheet class="warning lighten-5 px-1 mr-2 mr-2 rounded">
                        <v-icon class="warning--text caption"
                          >mdi-call-received</v-icon
                        >
                      </v-sheet>
                      <p class="ma-0 heading-muted">
                        You have a reached
                        <span class="text-warning mr-1">10%</span>of your
                        follower goal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="12" lg="7">
              <apexchart
                type="line"
                width="100%"
                height="365"
                :options="analyticOne.chartOptions"
                :series="analyticOne.series"
              />
            </v-col>
          </v-row>
        </base-card>
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-two-card
          main-icon-name="mdi-account-multiple"
          main-icon-background-color-class="primary lighten-5"
          main-icon-text-color="primary--text"
          sub-heading-text="Reach"
          heading-text="30.2k"
          bottom-button-text="0.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-primary"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-two-card
          main-icon-name="mdi-hand-pointing-up"
          main-icon-background-color-class="success lighten-5"
          main-icon-text-color="success--text"
          sub-heading-text="Engagement"
          heading-text="20.3k"
          bottom-button-text="10.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-success"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-two-card
          main-icon-name="mdi-alert-plus-outline"
          main-icon-background-color-class="info lighten-5"
          main-icon-text-color="info--text"
          sub-heading-text="Rate per Click"
          heading-text="1.25K"
          bottom-button-text="09.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-info"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" sm="6">
        <analytic-two-card
          main-icon-name="mdi-alert-plus-outline"
          main-icon-background-color-class="warning lighten-5"
          main-icon-text-color="warning--text"
          sub-heading-text="Average rate per cost"
          heading-text="3.25K"
          bottom-button-text="19.4%"
          bottom-button-icon="mdi-arrow-down-drop-circle-outline"
          bottom-button-hover-class="hover:bg-warning"
        />
      </v-col>
      <v-col cols="12">
        <base-card>
          <div class="d-flex align-center justify-space-between pr-3">
            <v-card-title>Reach Impressions history</v-card-title>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-card-text>
            <apexchart
              type="area"
              width="100%"
              height="365"
              :options="analyticTwo.chartOptions"
              :series="analyticTwo.series"
            />
          </v-card-text>
        </base-card>
      </v-col>
      <v-col cols="12" md="6">
        <base-card>
          <div class="d-flex align-center justify-space-between pr-3">
            <v-card-title>Reach Impressions history</v-card-title>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-card-text>
            <apexchart
              type="line"
              width="100%"
              height="365"
              :options="analyticThree.chartOptions"
              :series="analyticThree.series"
            />
          </v-card-text>
        </base-card>
      </v-col>
      <v-col cols="12" md="6">
        <base-card>
          <div class="d-flex align-center justify-space-between pr-3">
            <v-card-title>Comment History</v-card-title>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-card-text>
            <apexchart
              type="line"
              width="100%"
              height="365"
              :options="analyticFour.chartOptions"
              :series="analyticFour.series"
            />
          </v-card-text>
        </base-card>
      </v-col>
      <v-col cols="12">
        <base-card>
          <div class="d-flex align-center justify-space-between pr-3">
            <v-card-title>Posting Habits</v-card-title>
            <div>
              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-horizontal</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="n in 4" :key="n" @click="() => {}">
                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-card-text>
            <apexchart
              type="heatmap"
              width="100%"
              height="365"
              :options="analyticFive.chartOptions"
              :series="analyticFive.series"
            />
          </v-card-text>
        </base-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import analyticOneCard from "@/components/card/AnalyticCardVersionOne";
import analyticTwoCard from "@/components/card/AnalyticCardVersionTwo";
import {
  analyticOne,
  analyticTwo,
  analyticThree,
  analyticFour,
  analyticFive
} from "@/data/analytic2";
export default {
  name: "Analytic",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Analytic"
  },
  components: {
    "analytic-one-card": analyticOneCard,
    "analytic-two-card": analyticTwoCard
  },
  data() {
    return {
      analyticOne,
      analyticTwo,
      analyticThree,
      analyticFour,
      analyticFive
    };
  }
};
</script>

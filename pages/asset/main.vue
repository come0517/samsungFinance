<template>
  <section class="sfip">
    <v-main class="myassets">

        <div class="cont-wrap">
            <div class="chat-wrap">
                <div class="bubble">
                    <p><strong class="font-weight-bold">삼성증권</strong> 계좌가 없는 삼성님께 추천드려요!</p>
                </div>
                <div class="card">
                    <h2 class="fs-title-3">비대면 계좌 개설 시 <br>온라인 국내주식 위탁거래 수수료 <br><strong class="primary--text">평생혜택 제공</strong></h2>
                    <div class="img">
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            width="180px"
                            height="122px"
                        ></v-img> 
                    </div>                        
                    <v-btn text class="btn mt-2">비대면계좌개설 시작하기 <i class="ico"></i></v-btn>
                </div>
                <div class="bubble justify-end">
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        width="62px"
                        height="46px"
                    ></v-img> 
                </div>
            </div>

            <h2 class="fs-title-3 mt-13">혜택을 받으면 <br>국내주식 1억원 온라인 거래시</h2>

            <v-card class="main-card">
                <v-row>
                    <v-col>
                        <span>기본 수수료</span>
                        <div class="price before">97,216원</div>
                    </v-col>
                    <v-col class="align-self-end">
                        <div class="price text-right">3,639원</div>
                    </v-col>
                </v-row>
            </v-card>
            <p class="txt-info"><v-icon small color="#bbb">mdi-information</v-icon>우대 수수료율은 유의사항 참고</p>
            
            <v-card class="etc-card" color="bg" flat>
                <h3 class="fs-h1">비대면 계좌의 신용융자이자율은 <br>지점/은행연계 계좌보다 높습니다.</h3>
                <v-row class="mt-5">
                    <v-col>
                        <span>비대면</span>
                        <div class="percent">연 5.5~9.9%</div>
                    </v-col>
                    <v-col class="align-self-end pl-6">
                        <span>지점/은행연계</span>
                        <div class="percent">연 4.9~9.3%</div>
                    </v-col>
                </v-row>
            </v-card>
        </div>

        <div class="cont-wrap">
            <v-expansion-panels 
                v-model="panel" 
                accordion 
                flat 
                class="acco-icon"
            >
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <span class="fs-title-4">
                            <i class="ico1"></i>
                            혜택 수수료율
                        </span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pb-15">
                        <dl class="txt-dl">
                            <dt>평생혜택 대상</dt>
                            <dd>
                                <v-row>
                                    <v-col class="tit col-8">
                                        주식 <br>(거래소, 코스닥, 코넥스)
                                    </v-col>
                                    <v-col class="col-4">
                                        <div class="txt-percent"><strong>0.00</strong><span>3639</span>%</div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="tit col-8">
                                        ETF, ETN
                                    </v-col>
                                    <v-col class="col-4">
                                        <div class="txt-percent"><strong>0.00</strong><span>42087</span>%</div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col class="tit col-8">
                                        K-OTC
                                    </v-col>
                                    <v-col class="col-4">
                                        <div class="txt-percent"><strong>0.00</strong><span>09187</span>%</div>
                                    </v-col>
                                </v-row>
                            </dd>
                        </dl>
                        <dl class="txt-dl">
                            <dt>평생혜택 비대상</dt>
                            <dd>
                                <v-row>
                                    <v-col class="tit col-8">
                                        주식, ETF, ETN
                                    </v-col>
                                    <v-col class="col-4">
                                        <div class="txt-percent"><strong>0.07</strong><span>7216</span>%</div>
                                        <div class="txt-percent"><strong>~0.49</strong><span>7216</span>%</div>
                                    </v-col>
                                </v-row>
                            </dd>
                        </dl>
                        <ul class="bul-list mt-10">
                            <li>자세한 사항 홈페이지 참조</li>
                            <li>혜택 타인승계 불가</li>
                            <li>지점에서 계좌 개설 시 이벤트 대상에서 제외됩니다.</li>
                        </ul>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <span class="fs-title-4">
                            <i class="ico2"></i>
                            혜택 제공 조건
                        </span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pb-15">
                        <dl class="txt-dl">
                            <dt>기간</dt>
                            <dd><p>2021년 1월 1일(금) ~ 12월 31일(금)</p></dd>
                        </dl>
                        <dl class="txt-dl">
                            <dt>대상</dt>
                            <dd>
                                <strong class="fs-h2">신규고객</strong>
                                <p class="mt-3">주민번호 기준 2021년 1월 이후 최초 신규고객</p>
                                <strong class="fs-h2">휴면 고객</strong>
                                <p class="mt-3">2018년 1월 1일 ~ 2020년 12월 24일 기간 내 국내주식 거래가 없으면서 2020년 12월 24일 삼성증권 보유 계좌 총 잔고 10만원 이하 고객</p>
                                <ul class="bul-list mt-5">
                                    <li>2018년 1월 ~ 2020년 12월까지의 신규 고객은 제외</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl class="txt-dl">
                            <dt>거래매체</dt>
                            <dd>온라인 (O2, mPOP 모바일앱, HTS/DTS, 홈페이지)</dd>
                        </dl>
                        <dl class="txt-dl">
                            <dt>대상 종목</dt>
                            <dd>국내주식 (ELW, 해외주식, 선물/옵션 제외)</dd>
                        </dl>
                        <dl class="txt-dl">
                            <dt>혜택</dt>
                            <dd>
                                <p>이벤트 기간 중 개설된 최초 01종합(비대면)계좌(‘평생’ 혜택 표기 계좌)에서 온라인 국내주식 위탁거래 수수료 평생 혜택</p>
                                <ul class="bul-list mt-5">
                                    <li>휴면고객도 이벤트 기간 중 새로 01종합(비대면)계좌 (‘평생’ 혜택 표기 계좌)를 개설하셔야 혜택이 제공됩니다.</li>
                                    <li>이벤트 기간 중 최초 개설된 1개의 비대면 종합계좌에 한하여 수수료 이벤트 적용(1인 1계좌)</li>
                                    <li>평생혜택 비대상 고객 대상 표준수수료율은 주식(ETF)거래 시 0.077216%~0.497216%이며, 기타 자세한 사항은 홈페이지를 참고하시기 바랍니다.</li>
                                </ul>
                            </dd>
                        </dl>
                        
                        <div class="help-wrap mt-10">
                            <h4 class="fs-title-4">계좌 개설 도움이 필요하신가요?</h4>
                            <p>평생 혜택 전용 상담번호로 연락주세요.</p>
                            <a href="tel:1599-9080"><i class="ico"></i>1599 - 9080</a>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <span class="fs-title-4">
                            <i class="ico3"></i>
                            유의사항
                        </span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="pb-15">
                        <ul class="bul-list mt-8 type-warning">
                            <li>비대면 계좌 개설 고객에 한하여 온라인 국내 주식 위탁거래 수수료 평생혜택을 제공하며, 삼성증권 지점에서 계좌 개설 시 혜택에서 제외됩니다.</li>
                            <li>평생혜택 계좌는 1인 1계좌만 가능하며, 기타 협의 수수료 혜택 적용이 불가합니다.</li>
                            <li>평생 혜택은 타인승계가 불가합니다.</li>
                        </ul>
                        <h4 class="fs-title-4 mt-10">1. 온라인 국내주식 수수료 평생혜택 이벤트 유의사항</h4>
                        <ul class="bul-list type-black">
                            <li>평생혜택 이벤트는 2021년 1월 1일(금) ~ 12월 31일(금)까지 한시적으로 운영되는 이벤트 입니다.</li>
                            <li>법인, 외국인, 미성년자는 이벤트 대상에서 제외됩니다.</li>
                            <li>비대면계좌개설을 통해 개설된 01종합(비대면)계좌(‘평생’ 혜택 표기 계좌)에 한하여 제공되며,  은행 및 지점개설 계좌, 제휴 비대면개설 계좌(네이버페이, 리브메이트 계좌 등), 주식전용,  저축, 랩, 세금우대, 퇴직연금, 코넥스 소액계좌 등 특수계좌는 제외됩니다.</li>
                            <li>평생 혜택이 적용되는 01종합(비대면)계좌(‘평생’ 혜택 표기 계좌) 외 계좌에서 온라인 국내주식 거래 시 표준수수료가 부과됩니다.</li>
                            <li>평생 혜택 계좌 폐쇄 시 평생 혜택은 소멸되며, 계좌를 다시 개설하시더라도 평생 혜택 제공은 불가합니다.</li>
                            <li>평생혜택은 국내주식에 한하며 해외주식, ELW, 선물/옵션 등은 제외됩니다.</li>
                            <li>평생혜택 적용 계좌는 국내주식 거래 및 신용/대출 협의수수료 제공이 불가합니다.</li>
                            <li>본 이벤트는 당사 사정 또는 금융당국의 지도 및 권고에 의해 사전 고지없이 조기종료될 수 있으며, 이에 따라 추가적인 혜택의 지급이 중단될 수 있습니다. (단, 조기종료 전 이벤트 조건 충족고객 및 당첨고객은 혜택 지급)</li>
                            <li class="font-weight-bold">주식 거래 시 세금은 고객부담입니다. </li>
                        </ul>
                        <h4 class="fs-title-4 mt-10">2. 투자 유의사항</h4>
                        <ul class="bul-list type-black">
                            <li>투자자는 금융투자상품에 대하여 증권사로부터 충분한 설명을 받을 권리가 있으며, 투자전 상품설명서 등을 반드시 읽어보시기 바랍니다.</li>
                            <li>금융상품은 예금자보호법에 따라 예금보험공사가 보호하지 않습니다.</li>
                            <li>금융투자상품은 자산가격 변동 등에 따라 투자원금의 손실(0~100%)이 발생할 수 있으며, 그 손실은 투자자에게 귀속됩니다.</li>
                            <li>
                                우대 수수료율
                                <p>주식(거래소/코스닥/코넥스) : 0.0036396%,  <br> ETF/ETN : 0.0042087%,  <br>K-OTC : 0.0909187%</p>
                            </li>
                            <li>주식(ETF)거래 시 표준 수수료는(평생혜택미적용)는 0.077216% ~ 0.497216%이며, 기타 자세한 사항은 홈페이지를 참고하시기 바랍니다. (평생 혜택 계좌는 이벤트 혜택을 참고해주세요.)</li>
                            <li>신용융자 이자율은 영업점/은행연계 계좌는 4.9~9.3%, 비대면 계좌는 5.5~9.9%가 적용됩니다.</li>
                        </ul>
                        <p class="txt-judge mt-10">삼성증권 준법감시인 심사필 제21-B1622호(2021.06.11~2022.06.10)</p>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            
        </div>
    </v-main> 
  </section>
</template>

<script>
  export default {
    data () {
      return {
        panel: 0
      }
    }
  }
</script>
<template>
  <section>
    <s-subject :subject="subject"/>

    <v-list
      subheader
      two-line
    >
      <v-subheader>Bottom Buttons</v-subheader>

      <p class="fs-cap pl-4">
        - 기본적으로 플로팅되어 사용되는 하단 버튼<br />
        - 활성화, 비활성화 상태에 따라 구분하여 사용<br />
        - 디바이스 기기에 따라 가로 영역은 유동적으로 늘어난다.<br />
      </p>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            1단 컨펌 버튼 활성화
          </v-list-item-title>
          <v-btn block tile color="primary">다음</v-btn>
        </v-list-item-content>

      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            1단 컨펌 버튼 비활성화
          </v-list-item-title>
          <v-btn block tile disabled color="primary">다음</v-btn>
        </v-list-item-content>

      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            2단 컨펌 버튼 활성화
          </v-list-item-title>
          <v-row no-gutters>
            <v-col col=6>
              <v-btn block tile elevation=0 color="#eeeeee">초기화</v-btn>
            </v-col>
            <v-col col=6>
              <v-btn block tile elevation=0 color="primary">검색</v-btn>
            </v-col>
          </v-row>

        </v-list-item-content>

      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            2단 컨펌 버튼 비활성화
          </v-list-item-title>
          <v-row no-gutters>
            <v-col col=6>
              <v-btn block tile elevation=0 disabled color="#eeeeee">초기화</v-btn>
            </v-col>
            <v-col col=6>
              <v-btn block tile elevation=0 disabled color="primary">검색</v-btn>
            </v-col>
          </v-row>

        </v-list-item-content>

      </v-list-item>

      <v-subheader>Middle Buttons</v-subheader>

      <p class="fs-cap pl-4">
        - Middle Button 컨텐츠 내 기능 버튼<br />
        - 양옆의 가로사이즈에 따라 유동적으로 가로길이가 늘어난다.<br />
      </p>

      <v-list-item>
        <v-list-item-content>
          <v-row>
            <v-col>
              <v-btn block tile elevation=0 color="#eeeeee">일반</v-btn>
            </v-col>
            <v-col>
              <v-btn block tile elevation=0 color="primary">일반</v-btn>
            </v-col>
            <v-col>
              <v-btn block tile elevation=0 color="warning">일반</v-btn>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-subheader>Small Buttons</v-subheader>
      <p class="fs-cap pl-4">
        - 인증하기, 캘린더 등에 사용하는 버튼<br/>
        - Middle Button 보다 사이즈가 작은 버튼들은
          모두 상하좌우 8px의 터치 영역을 가진다. <br/>
        - 터치영역은 디자인 여백에 영향을 미치지 않는다.
      </p>

      <v-list-item>
        <v-list-item-content>
          <v-row>
            <v-col>
              <v-btn small block tile elevation=0 color="#eeeeee">스몰</v-btn>
            </v-col>
            <v-col>
              <v-btn small block tile elevation=0 color="primary">스몰</v-btn>
            </v-col>
            <v-col>
              <v-btn small block tile elevation=0 color="warning">스몰</v-btn>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-subheader>Extra Small Buttons</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-row>
            <v-col>
              <v-btn x-small block tile elevation=0 color="#eeeeee">캘린더</v-btn>
            </v-col>
            <v-col>
              <v-btn x-small block tile elevation=0 color="primary">캘린더</v-btn>
            </v-col>
            <v-col>
              <v-btn x-small block tile elevation=0 color="warning">캘린더</v-btn>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-subheader>Icon Buttons</v-subheader>
      <v-list-item>
        <v-list-item-content>
          <v-row>
            <v-col>
              <v-btn icon color="red">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn icon color="primary">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn icon color="dark">
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn icon color="info">
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <p class="fs-desc">
      <ol>
        <li>이중클릭 방지, 로딩등 검토중</li>
        <li>색상코드 변경 </li>
      </ol>
    </p>
  </section>
</template>




<style lang="scss" scoped>


</style>

<script>

export default {
  layout: 'sfip',
  transition: 'slide-bottom',
  computed: {
    init() {
      console.log("init");
      this.$store.commit("commons/setSubject", this.subject)
      console.log(this.subject);
      setSubject();
    }
  },
  data: () => ({
    subject: '공통 Button에 대한 타입별 정의',
  }),
  methods: {
    setSubject: function () {
      this.$store.commit("commons/setSubject", this.subject)
    }
  },
  head: function () {
    return {
      title: this.subject,
    }
  },
}
</script>

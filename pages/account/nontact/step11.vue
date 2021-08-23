<template>
  <section class="sfip">
  <s-subject :subject="`${name}님의 투자성향을 등록해주세요.`"/>

  <span>삼성증권은 금융소비자 보호에 관한 법률에 따라
고객님의 투자자정보를 파악하여,
적합한 상품만을 투자권유 할 의무가 있습니다.</span>

  <span>투자성향에 맞는 상품에 투자하실 수 있습니다. </span>

  <span>등록된 투자성향이  만료되었습니다.</span>
  </section>
</template>

<script>
export default {
  data: function () {
    return {name: '누구나'}
  }
}
</script>

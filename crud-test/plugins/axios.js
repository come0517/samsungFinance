export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    // 요청 전 처리
    console.log("request axios url : " + config.url)
  })

  $axios.onError(error => {
    // 에러 처리
    console.log(error);
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
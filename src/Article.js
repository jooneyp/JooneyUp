export default function getArticle (
  user = "Zarya",
  content = "Together, we are strong.",
  url = "https://namu.wiki/w/%EC%9E%90%EB%A6%AC%EC%95%BC",
  title = "자리야(오버워치)",
  description = "블리자드 엔터테인먼트 사의 FPS 게임 오버워치의 영웅. 강력한 개인용 방벽을 전개하여 받은 피해를 흡수하고 그 힘을 강력한 입자포로 발산하는 자리야는 전장의 최전선에서 빠질 수 없는 자원입니다.",
  thumbnail_url = "https://image-proxy.namuwikiusercontent.com/r/https%3A%2F%2Fd1u1mce87gyfbn.cloudfront.net%2Fhero%2Fzarya%2Ficon-portrait.png" ,
  thumbnail_width = 80,
  thumbnail_height = 80,
  provider_name = "namu wiki"
){
  return {
    user : user,
    content : content,
    cardInfo:{
      url : url,
      title:title,
      description : description,
      thumbnail_url : thumbnail_url,
      thumbnail_width : thumbnail_width,
      thumbnail_height :thumbnail_height,
      provider_name : provider_name
    }
  }
}
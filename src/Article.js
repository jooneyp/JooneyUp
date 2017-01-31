export default function getArticle (
  user = "Zarya",
  content = "Together, we are strong.",
  url = "https://namu.wiki/w/자리야",
  title = "자리야(오버워치)",
  description = "블리자드 엔터테인먼트 사의 FPS 게임 오버워치의 영웅. 강력한 개인용 방벽을 전개하여 받은 피해를 흡수하고 그 힘을 강력한 입자포로 발산하는 자리야는 전장의 최전선에서 빠질 수 없는 자원입니다.",
  imageUrl = "https://cdn.namuwikiusercontent.com/f4/f4f62be92fbe936381a51a623735b839af0654e86ff9156044750a4d2621a708.jpg?e=1490867316&k=g3dM9eFBwAyTWoahoaSOvw",
  imgWidth = 640,
  imgHeight = 480,
  thumbnailUrl = "https://image-proxy.namuwikiusercontent.com/r/https%3A%2F%2Fd1u1mce87gyfbn.cloudfront.net%2Fhero%2Fzarya%2Ficon-portrait.png" ,
  thumbnailWidth = 80,
  thumbnailHeight = 80
){
  return {
    user : user,
    content : content,
    urls:[{
      url : url,
      title:title,
      description : description,
      imageUrl : imageUrl,
      imgWidth: imgWidth,
      imgHeight : imgHeight,
      thumbnailUrl : thumbnailUrl,
      thumbnailWidth : thumbnailWidth,
      thumbnailHeight :thumbnailHeight
    }]
  }
}
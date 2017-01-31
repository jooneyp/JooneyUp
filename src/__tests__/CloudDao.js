import firebase from 'firebase'
import FirebaseDao from '../FirebaseDao'
import config from '../config'
import Article from '../Article';
var article1 = Article();
var dao = new FirebaseDao(config);
var keys=[];

it('Object assign', function(){
  var article2 = Object.assign({},article1);
  article2.user = "Zarya";
  article2.content = "네이버";
  article2.urls[0].url = "http://www.naver.com";
  //article1의 값이 잘 전달되었는지 확인.
  expect(article1.urls[0].imgWidth).toEqual(article2.urls[0].imgWidth);
})
it('list article', function(){
  dao.list(25).once('value',(dataSnapshots)=>{
    dataSnapshots.forEach((dataSnapshot)=>{
      keys.push(dataSnapshot.key);
      var article = dataSnapshot.val();
      expect(article.user).toEqual("Zarya");
    })
  });
})

it('upload article and edit',function(){
  let key = dao.newKey();
    console.log(JSON.parse(JSON.stringify(article1)));
  var updated = dao.update( key, article1 );
  dao.getArticle(key).on('value',(snapShot)=>{
    expect(snapShot.key).toEqual(key);
    dao.update(key, article2);
    // dao.remove(key);
  });
  return updated;
});
/*global firebase*/
import React ,{Component} from 'react';
import './PopCard.css';
//Action 을 불러옵니다.
import {userArticles,loadArticles} from './actions/Article'
//redux에서 connect 함수를 불러옵니다.
import {connect} from 'react-redux';

class PopCard extends Component{ 
  logout() {
    firebase.auth().signOut();
  }
  //Article Action 에서 가져온 userArticles, loadArticles를 dispatch명령어를 통해
  //호출합니다.
  render() {
    const {dispatch} = this.props;
    if(this.props.isPop) {
      return(
        <div className="card_pop">
          <div className="card_pop_arrow"/>
          <div>
          <a href="#" onClick={()=>dispatch(userArticles())}>내 글만 보기</a>
          </div>
          <div>
          <a href="#" onClick={()=>dispatch(loadArticles())}>전체 글 보기</a>
          </div>
          <div>
            <a href="#" onClick={()=>this.logout()}>로그아웃</a>
          </div>
        </div>);
    } else {
      return <div/>
    }
  }
}
// redux에 connect 함수를 통해 클래스를 연결 시켜줍니다.
export default connect()(PopCard)
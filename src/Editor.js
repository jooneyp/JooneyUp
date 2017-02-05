import React, { Component } from 'react';
import './Editor.css';
import Profile from './Profile';
// import Article from './Article';
import Card from './Card';
import getEmbedly from './EmbedlyDao';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPaste = this.onPaste.bind(this);
    this.editorChange = this.editorChange.bind(this);
    // this.getCard = this.getCard.bind(this);
    this.hasValue = this.hasValue.bind(this);
    this.detectURL = this.detectURL.bind(this);
    this.getArticle = this.getArticle.bind(this);
    this.getForcedState = this.getForcedState.bind(this);
    this.state ={
      embedlyUrl : undefined,
      content : undefined,
      cardinfo : undefined
    };
  }
  getForcedState(embedlyUrl, content) {
    return new Promise(resolve=>{
      if(embedlyUrl) {
        getEmbedly(embedlyUrl).then((response)=>{
          let cardInfo = Object.assign({}, response.data);
          resolve({
            embedlyUrl : embedlyUrl,
            content : content,
            cardInfo : cardInfo
          });
        }).catch((error)=>{
          resolve({
            embedlyUrl : undefined,
            content : undefined,
            cardInfo : undefined
          });
        });
      } else {
        resolve({
          content : content
        });
      }
    })
  }
  onPaste(event) {
    event.clipboardData.items[0].getAsString(text=>{
      // if(this.detectURL(text)) {
      //   this.setState({embedlyUrl:text});
      // }
      let checkText = this.detectURL(text);
      if(checkText) {
        this.getForcedState(checkText).then((obj)=>{
          this.setState(obj);
        });
      }
    })
  }
  editorChange(event) {
    let checkText = this.detectURL(event.currentTarget.textContent);
    if(!this.state.embedlyUrl && (event.keyCode===32 || event.keyCode===13) && checkText) {
      // this.setState({embedlyUrl:checkText,content:event.currentTarget.textContent});
      this.getForcedState(checkText, event.currentTarget.textContent)
        .then((obj)=>{
          this.setState(obj);
        });
    } else {
      // this.setState({content:event.currentTarget.textContent});
      this.getForcedState(undefined, event.currentTarget.textContent)
        .then((obj)=>{
          this.setState(obj);
        });
    }
  }

  getArticle() {
    let article = {};
    article.user = "Zarya";
    article.content = this.state.content;
    if(this.state.embedlyUrl) {
      article.cardinfo = this.state.cardinfo;
    }
    return article;
  }

  hasValue(value) {
    if((value && (typeof value) === "string"))
      return (!value) ? false:(value.trim() === ""?false:true);
    else return false;
  }

  // getCard(embedlyUrl) {
  //   if(embedlyUrl) {
  //     return(
  //       <div>{embedlyUrl}</div>
  //     );
  //   } else {
  //     return(<div/>);
  //   }
  // }

  handleSubmit(event) {
    // let article = Object.assign({}, Article());
    // article.user = "Zarya";
    // article.content = this.state.content;
    // article.urls[0].url = this.state.embedlyUrl;
    // this.props.submit(article);
    event.preventDefault();
    this.props.submit(this.getArticle());
    this.setState({
      embedlyUrl : undefined,
      content : undefined,
      cardInfo : undefined
    });
  }

  detectURL(text) {
    var urls = text.match(/(https?:\/\/[^\s]+)/g)||text.match(/(www.[^\s]+)/g);
    if(urls && urls.length>0) return urls[0];
    else return undefined;
  }
  render() {
    return (
      <div className="wrapEditor">
        <Profile isAnonymous={this.props.isAnonymous}/>
        <div className="textEditor">
          <div className="innerEdit"
            contentEditable="true"
            placeholder="글쓰기..."
            onPaste={this.onPaste}
            onKeyUp={this.editorChange}
            dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            <Card cardInfo={this.state.cardInfo}/>
        </div>
        <div className="actionBar">
          <button className="upload"
            disabled={!this.hasValue(this.state.content)}
            onClick={this.handleSubmit}><span>스탠드업!</span></button>
        </div>
      </div>
    );
  }
}
export default Editor;
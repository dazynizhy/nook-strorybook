import React from 'react'
import PropTypes from 'prop-types'



function PostItem({ task: { id, title, vote ,tags }, onPinTask, onVote }){
   
    let tagBox
    if(tags != null){
        tagBox = tags.map((tags)=>{
            let tagUrl = tags.url
            return  <a href={tagUrl} key={tags.name} >{tags.name}</a>
        })
    }

    return (
        <div className="col-lg-8">
            
            <div className="post-item-type-a">
            <a  onClick={() => onPinTask(id)}>
                <div className="post-item-thumbnail">
                    <div className="img-thumbnail" 
                    style={{ backgroundImage: 'url(https://ptcdn.info/pick/204/000/000/pco8qrhcmE4voloUq6G-s.jpg)' }}
                    >                
                    </div>
                </div>
            </a>
            <div className="post-item-title">
                <div>
                    <a  onClick={() => onPinTask(id)} >
                        <h2>การบินไทยและไทยสมายล์ร่วมสนับสนุนบัตรโดยสารทีมผู้เชี่ยวชาญที่ให้ความช่วยเหลือค้นหานักกีฬาฟุตบอลเยาวชนทีมหมูป่าอะคาเดมี่ </h2>
                    </a>
                </div>
                <div className="post-item-by pt-sm-toggle-show">
                    <span className="text-icon-left">
                        <i className="material-icons md-18"></i>
                        <b>RipperHusky</b> - 15 พฤษภาคม เวลา 14.25 น.
                    </span>
                </div>
            </div>
            <div className="post-item-extend">
                <div className="post-item-by pt-sm-toggle-hide">
                    <span className="text-icon-left"><i className="material-icons md-18"></i><b>RipperHusky</b></span>
                </div>
                <div className="post-item-viewstat">                
                    <span><i className="material-icons md-18"></i>380</span>                
                    <span><i className="material-icons md-18"></i>73</span>
                    <a  onClick={() => onPinTask(vote)} ><span><i className="material-icons md-18"></i>{vote}</span></a>
                </div>
                <div className="post-item-tag pt-lg-toggle-show">
                    {tagBox}
                </div>
            </div>
            </div>    
        </div>   
    )
}

export default PostItem
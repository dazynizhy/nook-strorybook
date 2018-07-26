import React from 'react'
import PropTypes from 'prop-types'

function List({ task: { id, title, state }, onArchiveTask, onPinTask }){
    return (
        <div className="post-item-type-a"> 
            <a href="#">
            <div className="post-item-thumbnail">
                {/* <div className="img-thumbnail" style="background-image:url(images/temp/temp_img1.jpg)"></div> */}
            </div>
            </a>
            <div className="post-item-title"> 
                <a href="#">
                <h2>การบินไทยและไทยสมายล์ร่วมสนับสนุนบัตรโดยสารทีมผู้เชี่ยวชาญที่ให้ความช่วยเหลือค้นหานักกีฬาฟุตบอลเยาวชนทีมหมูป่าอะคาเดมี่ </h2>
                </a>
                <div className="post-item-by pt-sm-toggle-show">
                    <span className="text-icon-left">
                    <i className="material-icons md-18">&#xe838</i>
                    <b>RipperHusky</b> - 15 พฤษภาคม เวลา 14.25 น.
                    </span>
                </div>
            </div>
            <div className="post-item-extend">
                <div className="post-item-by pt-sm-toggle-hide">
                    <span className="text-icon-left"><i className="material-icons md-18">&#xe838</i><b>RipperHusky</b></span>
                </div>
                <div className="post-item-viewstat"> 
                    <span><i className="material-icons md-18">&#xe8f4</i>380</span> 
                    <span><i className="material-icons md-18">&#xe0c9</i>73</span> 
                    <span><i className="material-icons md-18">&#xe146</i>163</span> 
                </div>
                <div className="post-item-tag pt-lg-toggle-show"> 
                    <a href="#">เกาะเต่า</a> 
                    <a href="#">เกาะนางยวน</a> 
                    <a href="#">เที่ยวไทย</a> 
                    <a href="#">บันทึกนักเดินทาง</a> 
                </div>
            </div>
        </div>
    )
}

export default List
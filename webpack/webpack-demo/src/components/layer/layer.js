import tpl from './layer.tpl' //把模板引入进来,把模板作为一个字符串进行处理
import './layer.less';

function layer(){
    return{
        name:'layer',
        tpl:tpl  //tpl即template模板内容
    }

}

export default layer;
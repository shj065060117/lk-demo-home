import Mock from 'mockjs';
import {getUserInfo} from './data/common';

// 引入用户信息
Mock.mock(/\/userInfo/,getUserInfo);


export default Mock;
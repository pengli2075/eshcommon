/* *
* @file: 公用menu文件，左侧导航栏、顶部和底部的设置
* @quthor: wang.ru
*/

import {useIntl} from 'umi';
import {useEffect} from 'react';
export default function(props) {
    const intl = useIntl();
    global.i18n = new Proxy({}, {
        get: (target, key) => {
            return intl.formatMessage({id: key}) || key;
        }
    });


    return (
        <>
            {props.children}
        </>
    );
}

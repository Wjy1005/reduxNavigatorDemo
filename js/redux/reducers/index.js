/**
 * Created by git-wangjianying on 2018/1/4.
 * @flow
 */

'use strict';

import nav from './NavReducer';
import MainReducer from './MainReducer';
import DeputyReducer from './DeputyReducer';

//you can add  millions of routes here!
// Reducer是纯函数，里面不应该有过多的逻辑。
const rootReducer = {
    nav,
    MainReducer,
    DeputyReducer,
};
export default rootReducer
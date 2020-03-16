// @ts-ignore
import createHistory from 'history/createBrowserHistory';
import _ from 'lodash';

const history = createHistory();

// 路由改变，更新页面标题
history.listen(location => {
});

export default history;

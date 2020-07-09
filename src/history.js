import { createBrowserHistory } from 'history';
import { withRouter } from "react-router-dom";

const history = createBrowserHistory();

export default withRouter(history);
/**
 * Created by panxianwen on 16/11/27.
 */
export const naviGoBack = (navigator) => {

    if(navigator && navigator.getCurrentRoutes().length > 1) {

        navigator.pop();

        return true;
    }

    return false;
}
import { FC } from "react";

import IndexView from "../views/IndexView";

export const IndexController: FC = () => {
  return <IndexView>
        <af-metamask-connect-btn onClick={()=>{}}/>
      </IndexView>;
};
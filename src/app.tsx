import * as React from "react";
import {
  MemberTable
} from "./components";
import { Color } from "./model/color";
import { Member } from "./model/member"
import { Panel } from "./components/panel";

export const App = () => {
  

  return (
    <>
      <Panel/>
      <MemberTable />
    </>
  );
};

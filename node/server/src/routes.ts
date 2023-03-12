import { docGetByIdAction } from "./controller/projectGetByIdAction";
import { projectSaveAction } from "./controller/projectSaveAction";
import { requestStsAction } from "./controller/requestStsAction";
import { scriptCompileAction } from "./controller/scriptCompileAction";

export const AppRoutes = [
  {
    path: "/sts",
    method: "get",
    action: requestStsAction,
  },
  {
    path: "/project/:id",
    method: "get",
    action: docGetByIdAction,
  },
  {
    path: "/project",
    method: "post",
    action: projectSaveAction,
  },
  {
    path: "/script/compile",
    method: "post",
    action: scriptCompileAction,
  },
] as const;

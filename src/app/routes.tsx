import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import PromoPage from "./components/page/promoPage";
import PhoneLayout from "./layout/phoneLayout";
import PhonePage from "./components/page/phonePage";
import FinishPage from "./components/page/finishPage";

interface RouterItem {
  path?: string;
  element?: ReactElement;
  children?: RouterItem[];
}

const routes = (): RouterItem[] => [
  {
    path: "",
    element: <PromoPage />,
  },
  {
    element: <PhoneLayout />,
    children: [
      {
        path: "phone",
        element: <PhonePage />,
      },
      {
        path: "finish",
        element: <FinishPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;

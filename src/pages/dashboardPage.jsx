import { Routes, Route } from 'react-router-dom';
// import HomeTab from "components/HomeTab";
import DiagramTab from "components/DiagramTab";
// import ButtonAddTransactions from "components/ButtonAddTransactions";
import { Navigation, HomeTab, ButtonAddTransactions} from "components";
import { Currency } from "components";
import { MainWrap, LeftHeader, ButtonNav } from "./dashboardPage.styled";
import Balance from "components/Balance";

export default function DashboardPage() {

    return (
      <>
      <MainWrap>
        <LeftHeader>
          <Navigation />
          <Balance />
          <Currency />   
        </LeftHeader>
         
      <Routes> 
        <Route path='/home' element={<HomeTab />} />
        <Route path='/diagram' element={ <DiagramTab/>}/>
      </Routes>
      </MainWrap>
        <ButtonNav>
          <ButtonAddTransactions/>
        </ButtonNav>
      </>
    )
  }

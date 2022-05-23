import {Routes, Route} from 'react-router-dom';
import Media from 'react-media';
import DiagramTab from "components/DiagramTab";
import { Navigation, HomeTab, Container} from "components";
import { Currency } from "components";

import {MobSidebar, TabWrap, SideBar, MainWrap, HomeTabWrap, CurrencyWrap, TabletBalanceWrap} from './DashboardPage.styled'
import Balance from "components/Balance";

export default function DashboardPage() {

  return (  
    <>
      <Container>
        
    <MainWrap>
        <SideBar>
          <MobSidebar>
            <Navigation />
          
            <Media query="(min-width: 768px)">
              <TabletBalanceWrap>
                <Balance />
              </TabletBalanceWrap>  
            </Media>
          </MobSidebar>
          <Media query="(min-width: 768px)">
            <CurrencyWrap>
              <Currency />
            </CurrencyWrap>
          </Media>
        </SideBar>

        <TabWrap>
          <Routes>
            <Route index element={<HomeTab />}/>           
            <Route path="/home" element={
              <>
                <Media query="(max-width: 767px)">
                  <Balance />
                </Media>
         
                <HomeTabWrap>
                  <HomeTab />
                </HomeTabWrap>
              </>
          } />
            <Route path="diagram" element={<DiagramTab />} />
            <Route
              path="currency"
              element={
                <>
              <Media query="(max-width: 767px)">
                  <CurrencyWrap>
                      <Currency />
                    </CurrencyWrap>
                  </Media>
                </>
              }
            />
          </Routes>
        </TabWrap>
        </MainWrap>
        </Container>
    </>    
  );

  
  }

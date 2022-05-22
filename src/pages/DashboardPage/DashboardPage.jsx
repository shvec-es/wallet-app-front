import { Routes, Route, Navigate } from 'react-router-dom';
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
            {/* <Balance /> */}
            <Media query="(min-width: 768px)" render={() => 
            <TabletBalanceWrap>
              <Balance />
            </TabletBalanceWrap>
            } />
          </MobSidebar>
          <Media query="(min-width: 768px)" render={() => 
           <CurrencyWrap>
              <Currency />
          </CurrencyWrap>
          } />
        </SideBar>

        <TabWrap>
          <Routes>
            <Route index element={<HomeTab />}/>           
           
            <Route path="home" element={
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
                  <Media
                    query="(min-width: 768px)"
                    render={() => <Navigate to="home" />}
                  />
                  
                  <Media
                    query="(max-width: 767px)"
                    render={() => 
                    <CurrencyWrap>
                      <Currency />
                    </CurrencyWrap>}
                  />
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

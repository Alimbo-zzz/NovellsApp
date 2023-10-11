import { Main, Settings, Shop } from "./components";
import { BaseControlls } from '@/layouts';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Previews, PromoCode, RewardDays } from './Rewards';

function App() {

  return (
    <>
      <div className="wrapper">
        <HashRouter>
          <Routes>
            <Route path='/' element={<BaseControlls><Main /></BaseControlls>} />
            <Route path='/rewards'>
              <Route index element={<BaseControlls><Previews /></BaseControlls>} />
              <Route path='code' element={<PromoCode />} />
              <Route path='days' element={<RewardDays />} />
            </Route>
            <Route path='settings' element={<BaseControlls><Settings /></BaseControlls>} />
          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App
